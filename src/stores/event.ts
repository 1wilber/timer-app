import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventStore = defineStore('event', {
  state: () => ({
    currentEvent: ref({
      id: '333',
      name: '3x3',
    }),
  }),
  actions: {
    change(event = '') {
      console.log({ event })
      this.$state.currentEvent = event
    },
  },
  persist: true,
})
