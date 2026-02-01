'use client'

import { useEffect, useState } from 'react'
import styles from './SnowEffect.module.css'

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number
    left: number
    delay: number
    duration: number
    drift: number
  }>>([])

  useEffect(() => {
    // Создаем меньше снежинок на мобильных для производительности
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const flakeCount = isMobile ? 25 : 50
    
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20, // 10-30 секунд
      drift: (Math.random() - 0.5) * 100 // Дрейф влево-вправо
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className={styles.snowContainer}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={styles.snowflake}
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            '--drift': `${flake.drift}px`
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
