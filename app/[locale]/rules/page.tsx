'use client'

import { useTranslations, useLocale } from 'next-intl'
import Header from '../components/Header'
import LangSwitcher from '../components/LangSwitcher'
import styles from './page.module.css'

export default function RulesPage() {
  const t = useTranslations('rules')
  const tFooter = useTranslations('footer')
  const locale = useLocale()

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <div className={styles.rulesContent}>
            <div className={styles.intro}>
              <p className={styles.introText}>{t('introText')}</p>
            </div>
            <div className={styles.warningBox}>
              <ul className={styles.warningList}>
                <li>{t('warning1')}</li>
                <li>{t('warning2')}</li>
                <li>{t('warning3')}</li>
                <li>{t('warning4')}</li>
              </ul>
            </div>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>⚠️</span>
                {t('restrictionsTitle')}
              </h2>
              <ul className={styles.list}>
                <li>{t('restriction1')}</li>
                <li>{t('restriction2')}</li>
                <li>{t('restriction3')}</li>
                <li>{t('restriction4')}</li>
              </ul>
              <p className={styles.note}>{t('restrictionsNote1')}</p>
              <p className={styles.note}>{t('restrictionsNote2')}</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📋</span>
                {t('generalTitle')}
              </h2>
              <ol className={styles.numberedList}>
                <li>{t('general1')}</li>
                <li>{t('general2')}</li>
                <li>{t('general3')}</li>
                <li>{t('general4')}</li>
                <li>{t('general5')}</li>
                <li>{t('general6')}</li>
                <li>{t('general7')}</li>
                <li>{t('general8')}</li>
                <li>{t('general9')}</li>
                <li>{t('general10')}</li>
              </ol>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🎮</span>
                {t('gameplayTitle')}
              </h2>
              <ol className={styles.numberedList}>
                <li>{t('gameplay1')}</li>
                <li>{t('gameplay2')}</li>
                <li>{t('gameplay3')}</li>
                <li>{t('gameplay4')}</li>
                <li>{t('gameplay5')}</li>
                <li>{t('gameplay6')}</li>
              </ol>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>💬</span>
                {t('communicationTitle')}
              </h2>
              <ol className={styles.numberedList}>
                <li>{t('comm1')}</li>
                <li>{t('comm2')}</li>
                <li>{t('comm3')}</li>
                <li>{t('comm4')}</li>
                <li>{t('comm5')}</li>
                <li>{t('comm6')}</li>
                <li>{t('comm7')}</li>
                <li>{t('comm8')}</li>
                <li>{t('comm9')}</li>
              </ol>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📌</span>
                {t('otherTitle')}
              </h2>
              <ol className={styles.numberedList}>
                <li>{t('other1')}</li>
                <li>{t('other2')}</li>
                <li>
                  {t('other3intro')}
                  <ul className={styles.sublist}>
                    <li>{t('other3a')}</li>
                    <li>{t('other3b')}</li>
                  </ul>
                </li>
                <li>{t('other4')}</li>
                <li>{t('other5')}</li>
                <li>{t('other6')}</li>
                <li>{t('other7')}</li>
                <li>{t('other8')}</li>
              </ol>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>ℹ️</span>
                {t('infoTitle')}
              </h2>
              <ul className={styles.list}>
                <li>{t('info1')}</li>
                <li>{t('info2')}</li>
              </ul>
            </section>
            <div className={styles.footerNote}>
              <p>{t('footerNote')}</p>
            </div>
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
