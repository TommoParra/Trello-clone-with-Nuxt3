
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt', 
    '@vueuse/nuxt'    
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
});
