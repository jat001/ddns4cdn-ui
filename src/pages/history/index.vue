<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Type
        </th>
        <th class="text-left">
          Length
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in data"
        :key="index"
      >
        <td>
          <nuxt-link :to="`/history/${entry?.id}`">
            {{ entry?.id }}
          </nuxt-link>
        </td>
        <td>{{ entry?.type }}</td>
        <td>{{ entry?.history?.length }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
import { refreshHistory } from '~/stores/history'

const { data } = await refreshHistory()
</script>
