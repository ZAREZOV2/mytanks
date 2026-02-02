import type { Metadata } from 'next'
import { getLocale, getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import LocaleLang from './LocaleLang'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const localeTitles: Record<string, string> = {
  ru: 'MyTanks - Танковый экшен',
  en: 'MyTanks - Tank Action Game',
  hy: 'MyTanks - Թանկային ակշն',
  zh: 'MyTanks - 坦克动作游戏',
  ja: 'MyTanks - 戦車アクションゲーム',
}
const localeDescriptions: Record<string, string> = {
  ru: 'Долгожданная версия Танков 2014–2017 годов, созданная для возвращения той самой атмосферности прошлых лет',
  en: 'The long-awaited version of Tanks 2014–2017, created to bring back the atmosphere of those past years',
  hy: '2014–2017 թթ. սպասված Թանկերի տարբերակը, ստեղծված այն ատմոսֆերան վերադարձնելու համար',
  zh: '2014–2017年坦克游戏期待版本，重现往日氛围',
  ja: '2014–2017年のタンクの待望のバージョン、あの雰囲気を取り戻すために',
}
const ogLocales: Record<string, string> = {
  ru: 'ru_RU',
  en: 'en_US',
  hy: 'hy_AM',
  zh: 'zh_CN',
  ja: 'ja_JP',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = localeTitles[locale] ?? localeTitles.en
  const description = localeDescriptions[locale] ?? localeDescriptions.en
  const ogLocale = ogLocales[locale] ?? 'en_US'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://mytanks.online',
      siteName: 'MyTanks',
      type: 'website',
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://mytanks.online/${locale}`,
      languages: {
        ru: 'https://mytanks.online/ru',
        en: 'https://mytanks.online/en',
        hy: 'https://mytanks.online/hy',
        zh: 'https://mytanks.online/zh',
        ja: 'https://mytanks.online/ja',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'ru' | 'en' | 'hy' | 'zh' | 'ja')) {
    return null
  }
  setRequestLocale(locale)
  const messages = await getMessages()
  const currentLocale = await getLocale()

  return (
    <NextIntlClientProvider locale={currentLocale} messages={messages}>
      <LocaleLang locale={currentLocale} />
      {children}
    </NextIntlClientProvider>
  )
}
