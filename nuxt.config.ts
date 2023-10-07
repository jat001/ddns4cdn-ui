import { defineNuxtConfig } from 'nuxt/config'

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
  modules: ['vuetify-nuxt-module', '@pinia/nuxt', '@nuxtjs/eslint-module'],
})
