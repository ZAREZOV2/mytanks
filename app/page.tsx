'use client'

import { useState } from 'react'
import Header from './components/Header'
import SnowEffect from './components/SnowEffect'
import styles from './page.module.css'

// Конфигурация - здесь можно указать URL файла игры
const GAME_DOWNLOAD_URL = process.env.NEXT_PUBLIC_GAME_URL || 
  'https://github.com/yourusername/mytanks/releases/latest/download/game.zip'
// Альтернативно можно использовать Supabase Storage:
// const GAME_DOWNLOAD_URL = 'https://your-project.supabase.co/storage/v1/object/public/game-files/mytanks.zip'

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadProgress(0)

    try {
      // Симуляция прогресса загрузки
      const progressInterval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      // Открываем ссылку на скачивание
      window.open(GAME_DOWNLOAD_URL, '_blank')
      
      // Завершаем прогресс через 2 секунды
      setTimeout(() => {
        clearInterval(progressInterval)
        setDownloadProgress(100)
        setTimeout(() => {
          setIsDownloading(false)
          setDownloadProgress(0)
        }, 500)
      }, 2000)
    } catch (error) {
      setIsDownloading(false)
      setDownloadProgress(0)
    }
  }

  return (
    <div className={styles.container}>
      <SnowEffect />
      <Header />
      
      {/* Hero Section */}
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
                  Скачивание... {downloadProgress}%
                </>
              ) : (
                'Скачать игру'
              )}
            </button>
          </div>

          {isDownloading && (
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRating}>
            <span>Rated 6+</span>
          </div>
          <div className={styles.footerCopyright}>
            © «MyTanks» 2021-2026
          </div>
          <div className={styles.footerLinks}>
            <a href="/rules" className={styles.footerLink}>Правила игры</a>
            <a href="/terms" className={styles.footerLink}>Пользовательское соглашение</a>
            <a href="/privacy" className={styles.footerLink}>Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
