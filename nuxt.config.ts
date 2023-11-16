// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  routeRules: {
    // this page is generated at build time and cached permanently
    '/**': { prerender: true },
    // this page will be revalidated every 60 seconds, in the background
    '/*/cron': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    '/*/static': { isr: true },
    // this page will be always fresh
    '/*/dynamic': { isr: false },
    // this page is client side only
    '/*/spa': { ssr: false }
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['zh-tw', 'en-us', 'ja-jp'],
    defaultLocale: 'zh-tw', // default locale
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: {
      region: 'us'
    }
  }
})