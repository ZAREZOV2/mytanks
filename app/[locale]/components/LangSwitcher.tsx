'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import styles from './LangSwitcher.module.css'

type Props = {
  className?: string
  onClick?: () => void
}

export default function LangSwitcher({ className, onClick }: Props) {
  const locale = useLocale()
  const fullPath = usePathname()
  const pathSuffix = (fullPath?.replace(/^\/(ru|en|hy|zh|ja)/, '') || '') || ''

  return (
    <div className={`${styles.root} ${className ?? ''}`.trim()} onClick={onClick}>
      <a href={`/ru${pathSuffix}`} className={locale === 'ru' ? styles.langActive : undefined}>RU</a>
      <span className={styles.langSep}>|</span>
      <a href={`/en${pathSuffix}`} className={locale === 'en' ? styles.langActive : undefined}>EN</a>
      <span className={styles.langSep}>|</span>
      <a href={`/hy${pathSuffix}`} className={locale === 'hy' ? styles.langActive : undefined}>HY</a>
      <span className={styles.langSep}>|</span>
      <a href={`/zh${pathSuffix}`} className={locale === 'zh' ? styles.langActive : undefined}>ZH</a>
      <span className={styles.langSep}>|</span>
      <a href={`/ja${pathSuffix}`} className={locale === 'ja' ? styles.langActive : undefined}>JA</a>
    </div>
  )
}
