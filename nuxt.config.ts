// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/animations.css',
  ],
  nitro: { preset: 'static' },
  // app: { baseURL: '/' },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@vueuse/nuxt'],
})
