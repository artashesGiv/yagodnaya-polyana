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
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    provider: 'none',
    dir: 'public',
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@vueuse/nuxt'],
})
