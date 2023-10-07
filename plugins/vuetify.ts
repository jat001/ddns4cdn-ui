import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
