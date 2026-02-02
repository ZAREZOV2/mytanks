'use client'

import { useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Header from '../components/Header'
import LangSwitcher from '../components/LangSwitcher'
import styles from './page.module.css'

const DISCORD_LINK = 'https://discord.gg/6BT4GxVB49'

export default function DonatePage() {
  const t = useTranslations('donate')
  const tFooter = useTranslations('footer')
  const locale = useLocale()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = DISCORD_LINK
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <div className={styles.redirectBox}>
            <div className={styles.redirectIcon}>🛒</div>
            <h2 className={styles.redirectTitle}>{t('redirectTitle')}</h2>
            <p className={styles.redirectText}>{t('redirectText')}</p>
            <p className={styles.redirectSubtext}>{t('redirectSubtext')}</p>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className={styles.discordButton}>
              {t('goToDiscord')}
            </a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRating}><span>{tFooter('rated')}</span></div>
          <div className={styles.footerCopyright}>{tFooter('copyright')}</div>
          <div className={styles.footerLinks}>
            <a href={`/${locale}/rules`} className={styles.footerLink}>{tFooter('rules')}</a>
            <a href={`/${locale}/terms`} className={styles.footerLink}>{tFooter('terms')}</a>
            <a href={`/${locale}/privacy`} className={styles.footerLink}>{tFooter('privacy')}</a>
          </div>
          <LangSwitcher className={styles.footerLangSwitcher} />
        </div>
      </footer>
    </div>
  )
}
