'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import styles from './Header.module.css'

export default function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const fullPath = usePathname()
  const pathSuffix = (fullPath?.replace(/^\/(ru|en)/, '') || '') || ''
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchStartTime = useRef<number | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const openMenu = () => setIsMenuOpen(true)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartX.current = touch.clientX
      touchStartY.current = touch.clientY
      touchStartTime.current = Date.now()
    }

    const handleTouchMove = (_e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return
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
      const minSwipeDistance = 50
      const maxSwipeTime = 500
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > Math.abs(deltaY) * 1.5
      if (!isMenuOpen && isHorizontalSwipe && deltaX < -minSwipeDistance && deltaTime < maxSwipeTime) openMenu()
      if (isMenuOpen && isHorizontalSwipe && deltaX > minSwipeDistance && deltaTime < maxSwipeTime) closeMenu()
      touchStartX.current = null
      touchStartY.current = null
      touchStartTime.current = null
    }
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
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href={`/${locale}`} className={styles.logoLink} onClick={closeMenu}>
            <img src="/assets/logo_mt.png" alt="MyTanks" className={styles.logo} />
          </Link>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={t('toggleMenu')}
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav className={styles.nav}>
            <Link href={`/${locale}`} className={styles.navLink}>{t('main')}</Link>
            <Link href={`/${locale}/donate`} className={`${styles.navLink} ${styles.shopLink}`}>
              <span className={styles.shopText}>{t('shop')}</span>
              <div className={styles.snowflakes}>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
                <span className={styles.snowflake}>❄</span>
              </div>
            </Link>
            <Link href={`/${locale}/rules`} className={styles.navLink}>{t('rules')}</Link>
            <a href="https://discord.gg/Htu5XPhmqt" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              {t('discord')}
            </a>
            <div className={styles.langSwitcher}>
              <a href={`/ru${pathSuffix}`} className={locale === 'ru' ? styles.langActive : undefined}>RU</a>
              <span className={styles.langSep}>|</span>
              <a href={`/en${pathSuffix}`} className={locale === 'en' ? styles.langActive : undefined}>EN</a>
            </div>
          </nav>
          <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
            <Link href={`/${locale}`} className={styles.mobileNavLink} onClick={closeMenu}>{t('main')}</Link>
            <Link href={`/${locale}/donate`} className={`${styles.mobileNavLink} ${styles.mobileShopLink}`} onClick={closeMenu}>{t('shop')}</Link>
            <Link href={`/${locale}/rules`} className={styles.mobileNavLink} onClick={closeMenu}>{t('rules')}</Link>
            <a href="https://discord.gg/Htu5XPhmqt" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('discord')}
            </a>
            <div className={styles.mobileLangSwitcher}>
              <a href={`/ru${pathSuffix}`} className={locale === 'ru' ? styles.langActive : undefined} onClick={closeMenu}>RU</a>
              <span className={styles.langSep}>|</span>
              <a href={`/en${pathSuffix}`} className={locale === 'en' ? styles.langActive : undefined} onClick={closeMenu}>EN</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
