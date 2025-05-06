export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/ui'],
  tailwindcss: { cssPath: '~/assets/css/tailwind.css' },
  nitro: { compatibilityDate: '2025-05-06' },
  devtools: { enabled: true }
})