// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      TEST_ENV: process.env.TEST_ENV
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push(
        {
          name: 'login',
          path: '/login',
          file: '~/pages/auth/Login.vue'
        },
        {
          name: 'signup',
          path: '/signup',
          file: '~/pages/auth/Signup.vue'
        })
    }
  },
  modules: ["@nuxt/icon", '@nuxt/ui']
})