'use client'

import { useTranslations, useLocale } from 'next-intl'
import Header from '../components/Header'
import LangSwitcher from '../components/LangSwitcher'
import styles from './page.module.css'

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  const tFooter = useTranslations('footer')
  const locale = useLocale()
  const dateLocale = { ru: 'ru-RU', en: 'en-US', hy: 'hy-AM', zh: 'zh-CN', ja: 'ja-JP' }[locale] ?? 'en-US'
  const dateStr = new Date().toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('lastUpdated', { date: dateStr })}</p>
          <div className={styles.textContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section1.title')}</h2>
              <p>{t('section1.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section2.title')}</h2>
              <p>{t('section2.intro')}</p>
              <ul>
                <li>{t('section2.item1')}</li>
                <li>{t('section2.item2')}</li>
                <li>{t('section2.item3')}</li>
                <li>{t('section2.item4')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section3.title')}</h2>
              <p>{t('section3.intro')}</p>
              <ul>
                <li>{t('section3.item1')}</li>
                <li>{t('section3.item2')}</li>
                <li>{t('section3.item3')}</li>
                <li>{t('section3.item4')}</li>
                <li>{t('section3.item5')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section4.title')}</h2>
              <p>{t('section4.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section5.title')}</h2>
              <p>{t('section5.intro')}</p>
              <ul>
                <li>{t('section5.item1')}</li>
                <li>{t('section5.item2')}</li>
                <li>{t('section5.item3')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section6.title')}</h2>
              <p>{t('section6.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section7.title')}</h2>
              <p>{t('section7.intro')}</p>
              <ul>
                <li>{t('section7.item1')}</li>
                <li>{t('section7.item2')}</li>
                <li>{t('section7.item3')}</li>
                <li>{t('section7.item4')}</li>
                <li>{t('section7.item5')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section8.title')}</h2>
              <p>{t('section8.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section9.title')}</h2>
              <p>{t('section9.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section10.title')}</h2>
              <p>
                {t('section10.content')}{' '}
                <a href="mailto:privacy@mytanks.com" className={styles.link}>privacy@mytanks.com</a>
              </p>
            </section>
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
