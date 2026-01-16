import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mytanks.online'),
  title: 'MyTanks - Танковый экшен',
  description: 'Долгожданная версия Танков 2014–2017 годов, созданная для возвращения той самой атмосферности прошлых лет',
  openGraph: {
    title: 'MyTanks - Танковый экшен',
    description: 'Долгожданная версия Танков 2014–2017 годов, созданная для возвращения той самой атмосферности прошлых лет',
    url: 'https://mytanks.online',
    siteName: 'MyTanks',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyTanks - Танковый экшен',
    description: 'Долгожданная версия Танков 2014–2017 годов, созданная для возвращения той самой атмосферности прошлых лет',
  },
  alternates: {
    canonical: 'https://mytanks.online',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

