import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', {
  state: () => ({
    results: [],
  }),
  actions: {
    add(item) {
      console.log(item)
      this.$state.results.push(item)
    },
  },
  persist: true,
})
