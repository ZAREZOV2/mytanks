import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'en', 'hy', 'zh', 'ja'],
  defaultLocale: 'ru',
  localePrefix: 'always',
})
