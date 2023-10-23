<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar" />

    <v-navigation-drawer>
      <v-list
        density="compact"
        nav
      >
        <v-list-item
          prepend-icon="mdi-folder"
          title="Home"
          to="/"
        />
        <v-list-item
          prepend-icon="mdi-star"
          title="History"
          to="/history"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <nuxt-page />
    </v-main>
  </v-layout>
</template>
