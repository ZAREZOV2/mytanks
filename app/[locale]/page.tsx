'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Header from './components/Header'
import SnowEffect from './components/SnowEffect'
import styles from './page.module.css'

const GAME_DOWNLOAD_URL = process.env.NEXT_PUBLIC_GAME_URL ||
  'https://github.com/yourusername/mytanks/releases/latest/download/game.zip'

export default function Home() {
  const t = useTranslations('home')
  const tFooter = useTranslations('footer')
  const locale = useLocale()
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadProgress(0)
    try {
      const progressInterval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)
      window.open(GAME_DOWNLOAD_URL, '_blank')
      setTimeout(() => {
        clearInterval(progressInterval)
        setDownloadProgress(100)
        setTimeout(() => {
          setIsDownloading(false)
          setDownloadProgress(0)
        }, 500)
      }, 2000)
    } catch {
      setIsDownloading(false)
      setDownloadProgress(0)
    }
  }

  return (
    <div className={styles.container}>
      <SnowEffect />
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>MyTanks</h1>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={styles.downloadButton}
            >
              {isDownloading ? (
                <>
                  <span className={styles.spinner}></span>
                  {t('downloading', { percent: downloadProgress })}
                </>
              ) : (
                t('downloadButton')
              )}
            </button>
          </div>
          {isDownloading && (
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
          )}
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRating}>
            <span>{tFooter('rated')}</span>
          </div>
          <div className={styles.footerCopyright}>
            {tFooter('copyright')}
          </div>
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
