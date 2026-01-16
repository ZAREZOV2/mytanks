'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchStartTime = useRef<number | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartX.current = touch.clientX
      touchStartY.current = touch.clientY
      touchStartTime.current = Date.now()
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return
      
      const touch = e.touches[0]
      const deltaX = touch.clientX - touchStartX.current
      const deltaY = touch.clientY - touchStartY.current
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null || touchStartTime.current === null) {
        touchStartX.current = null
        touchStartY.current = null
        touchStartTime.current = null
        return
      }

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartX.current
      const deltaY = touch.clientY - touchStartY.current
      const deltaTime = Date.now() - touchStartTime.current
      const windowWidth = window.innerWidth
      const startX = touchStartX.current
      const minSwipeDistance = 50
      const maxSwipeTime = 500
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > Math.abs(deltaY) * 1.5

      // Свайп справа налево для открытия (меню закрыто, свайп влево)
      if (!isMenuOpen && isHorizontalSwipe && deltaX < -minSwipeDistance && deltaTime < maxSwipeTime) {
        openMenu()
      }
      
      // Свайп слева направо для закрытия (меню открыто, свайп вправо)
      if (isMenuOpen && isHorizontalSwipe && deltaX > minSwipeDistance && deltaTime < maxSwipeTime) {
        closeMenu()
      }

      touchStartX.current = null
      touchStartY.current = null
      touchStartTime.current = null
    }

    // Добавляем обработчики на всех устройствах с поддержкой touch
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true })
      document.addEventListener('touchmove', handleTouchMove, { passive: true })
      document.addEventListener('touchend', handleTouchEnd, { passive: true })

      return () => {
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Overlay для закрытия меню - вне header для избежания проблем с DOM */}
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        />
      )}
      
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <img
              src="/assets/logo_mt.png"
              alt="MyTanks"
              className={styles.logo}
            />
          </Link>
          
          {/* Гамбургер-меню для мобильных */}
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Десктопная навигация */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Главная</Link>
            <Link href="/donate" className={`${styles.navLink} ${styles.shopLink}`}>
              <span className={styles.shopText}>Магазин</span>
              <div className={styles.snowflakes}>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
              </div>
            </Link>
            <Link href="/rules" className={styles.navLink}>Правила игры</Link>
            <a 
              href="https://discord.gg/Htu5XPhmqt" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Дискорд
            </a>
          </nav>

          {/* Мобильное меню */}
          <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              Главная
            </Link>
            <Link href="/donate" className={`${styles.mobileNavLink} ${styles.mobileShopLink}`} onClick={closeMenu}>
              Магазин
            </Link>
            <Link href="/rules" className={styles.mobileNavLink} onClick={closeMenu}>
              Правила игры
            </Link>
            <a 
              href="https://discord.gg/Htu5XPhmqt" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Дискорд
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
