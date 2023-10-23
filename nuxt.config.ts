export default defineNuxtConfig({
  telemetry: false,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  srcDir: 'src/',

  modules: [
    '@pinia/nuxt',
    'nuxt-graphql-client',
    'vuetify-nuxt-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          default: 'http://localhost:8080/graphql',
        },
      },
    },
  },

  css: ['~/assets/css/main.css'],
})
