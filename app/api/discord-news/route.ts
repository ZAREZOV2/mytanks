import { NextResponse } from 'next/server'

// Типы для Discord API
interface DiscordMessage {
  id: string
  content: string
  timestamp: string
  author: {
    id: string
    username: string
    discriminator: string
    avatar: string | null
  }
  embeds?: Array<{
    title?: string
    description?: string
    url?: string
    timestamp?: string
  }>
  attachments?: Array<{
    id: string
    filename: string
    url: string
  }>
}

// Кеш для новостей
let cachedNews: Array<{
  id: string
  title: string
  date: string
  preview: string
  text?: string
  author?: string
}> | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 минут

export async function GET() {
  try {
    const botToken = process.env.DISCORD_BOT_TOKEN
    const channelId = process.env.DISCORD_CHANNEL_ID

    if (!botToken || !channelId) {
      return NextResponse.json({
        news: [],
        error: 'Discord credentials not configured'
      })
    }

    // Проверяем кеш
    const now = Date.now()
    if (cachedNews && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({ news: cachedNews, cached: true })
    }

    // Получаем сообщения из Discord канала
    // Discord API требует авторизацию через Bot Token
    const messagesUrl = `https://discord.com/api/v10/channels/${channelId}/messages?limit=10`
    
    try {
      const response = await fetch(messagesUrl, {
        headers: {
          'Authorization': `Bot ${botToken}`,
          'Content-Type': 'application/json'
        },
        next: { revalidate: 300 } // Revalidate каждые 5 минут
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Discord API error: ${response.status} ${errorText}`)
      }

      const messages: DiscordMessage[] = await response.json()

      // Парсим сообщения в формат новостей
      const news = messages
        .filter(message => {
          // Фильтруем только сообщения с контентом или эмбедами
          return message.content || (message.embeds && message.embeds.length > 0)
        })
        .map(message => {
          // Приоритет: embed title/description > content
          let title = ''
          let text = ''
          
          if (message.embeds && message.embeds.length > 0) {
            const embed = message.embeds[0]
            title = embed.title || ''
            text = embed.description || message.content || ''
          } else {
            text = message.content || ''
            // Берем первую строку как заголовок
            const lines = text.split('\n')
            title = lines[0] || 'Новость'
            text = lines.slice(1).join('\n') || text
          }

          // Очищаем от markdown и форматирования
          title = title.replace(/[#*_`~]/g, '').trim()
          text = text.replace(/[#*_`~]/g, '').trim()

          // Если заголовок пустой, берем первые слова из текста
          if (!title && text) {
            title = text.substring(0, 60).split('\n')[0].trim()
          }

          // Форматируем дату
          const date = new Date(message.timestamp)
          const formattedDate = date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })

          return {
            id: message.id,
            title: title.length > 60 ? title.substring(0, 60) + '...' : title || 'Новость',
            date: formattedDate,
            preview: text.length > 150 ? text.substring(0, 150) + '...' : text,
            text: text,
            author: message.author.username
          }
        })
        .slice(0, 6) // Берем последние 6 новостей

      // Обновляем кеш
      cachedNews = news
      cacheTimestamp = now

      return NextResponse.json({ news, cached: false })
    } catch (error) {
      console.error('Error fetching Discord news:', error)
      
      // Если есть кеш, возвращаем его даже если он устарел
      if (cachedNews) {
        return NextResponse.json({ news: cachedNews, cached: true, error: 'Using stale cache' })
      }

      return NextResponse.json({ 
        news: [], 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error in discord-news API:', error)
    return NextResponse.json({ 
      news: [], 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}
