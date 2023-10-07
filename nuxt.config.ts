import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        const { plugins } = config
        if (plugins === undefined) return
        plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
