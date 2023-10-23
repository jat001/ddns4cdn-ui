<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Success
        </th>
        <th class="text-left">
          End Time
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in tdata?.history"
        :key="index"
      >
        <td>{{ entry?.success }}</td>
        <td>{{ entry?.end_time }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
import { refreshHistory } from '~/stores/history'

const { data } = await refreshHistory()

const route = useRoute()

const tdata = data?.find((entry) => entry?.id === route.params.id)
</script>
