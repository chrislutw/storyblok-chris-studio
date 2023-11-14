// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@storyblok/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: {
      region: 'us'
    }
  }
})
