import type { GetHistoryQuery } from '#gql'

export const historyStore = defineStore('history', {
  state: () => ({
    data: [] as GetHistoryQuery['history'],
  }),
  actions: {
    async getHistory() {
      const { data, error, pending, refresh } = await useAsyncGql('GetHistory')
      if (error.value === null) {
        this.data = data.value.history
      } else {
        console.error(error.value)
      }
      return { data, error, pending, refresh }
    },
  },
})

export async function refreshHistory() {
  if (historyStore().data?.length === 0) {
    await historyStore().getHistory()
  }

  return historyStore()
}
