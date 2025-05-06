
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',     
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
});
