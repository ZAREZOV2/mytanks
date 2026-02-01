'use client'

import { useTranslations, useLocale } from 'next-intl'
import Header from '../components/Header'
import styles from './page.module.css'

export default function TermsPage() {
  const t = useTranslations('terms')
  const tFooter = useTranslations('footer')
  const locale = useLocale()
  const dateStr = new Date().toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
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
              <p>{t('section1.p1')}</p>
              <p>{t('section1.p2')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section2.title')}</h2>
              <p>{t('section2.p1')}</p>
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
              </ul>
              <p>{t('section3.p2')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section4.title')}</h2>
              <p>{t('section4.intro')}</p>
              <ul>
                <li>{t('section4.item1')}</li>
                <li>{t('section4.item2')}</li>
                <li>{t('section4.item3')}</li>
                <li>{t('section4.item4')}</li>
                <li>{t('section4.item5')}</li>
                <li>{t('section4.item6')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section5.title')}</h2>
              <p>{t('section5.p1')}</p>
              <ul>
                <li>{t('section5.item1')}</li>
                <li>{t('section5.item2')}</li>
                <li>{t('section5.item3')}</li>
                <li>{t('section5.item4')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section6.title')}</h2>
              <p>{t('section6.p1')}</p>
              <p>{t('section6.p2')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section7.title')}</h2>
              <p>{t('section7.p1')}</p>
              <ul>
                <li>{t('section7.item1')}</li>
                <li>{t('section7.item2')}</li>
                <li>{t('section7.item3')}</li>
                <li>{t('section7.item4')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section8.title')}</h2>
              <p>{t('section8.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section9.title')}</h2>
              <p>{t('section9.p1')}</p>
              <ul>
                <li>{t('section9.item1')}</li>
                <li>{t('section9.item2')}</li>
                <li>{t('section9.item3')}</li>
                <li>{t('section9.item4')}</li>
                <li>{t('section9.item5')}</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section10.title')}</h2>
              <p>{t('section10.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section11.title')}</h2>
              <p>{t('section11.content')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('section12.title')}</h2>
              <p>
                {t('section12.content')}{' '}
                <a href="mailto:support@mytanks.com" className={styles.link}>support@mytanks.com</a>
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
        </div>
      </footer>
    </div>
  )
}
