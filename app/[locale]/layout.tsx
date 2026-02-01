import type { Metadata } from 'next'
import { getLocale, getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import LocaleLang from './LocaleLang'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isRu = locale === 'ru'
  const title = isRu
    ? 'MyTanks - Танковый экшен'
    : 'MyTanks - Tank Action Game'
  const description = isRu
    ? 'Долгожданная версия Танков 2014–2017 годов, созданная для возвращения той самой атмосферности прошлых лет'
    : 'The long-awaited version of Tanks 2014–2017, created to bring back the atmosphere of those past years'
  const ogLocale = isRu ? 'ru_RU' : 'en_US'

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
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'ru' | 'en')) {
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
