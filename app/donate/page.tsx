'use client'

import { useEffect } from 'react'
import Header from '../components/Header'
import styles from './page.module.css'

const DISCORD_LINK = 'https://discord.gg/6BT4GxVB49'

export default function DonatePage() {
  useEffect(() => {
    // Автоматический редирект на Discord через 1 секунду
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
          <h1 className={styles.title}>Игровой магазин</h1>
          <p className={styles.subtitle}>
            Переход в Discord для покупок...
          </p>

          <div className={styles.redirectBox}>
            <div className={styles.redirectIcon}>🛒</div>
            <h2 className={styles.redirectTitle}>Магазин находится в Discord</h2>
            <p className={styles.redirectText}>
              Для покупки игровых товаров и поддержки проекта перейдите в наш Discord сервер.
            </p>
            <p className={styles.redirectSubtext}>
              Вы будете перенаправлены автоматически через несколько секунд...
            </p>
            <a 
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.discordButton}
            >
              Перейти в Discord
            </a>
          </div>
        </div>
      </main>

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
