import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', {
  state: () => ({
    results: [],
    status: "ready",
    interval: null,
    currentTimeMs: 0,
  }),
  actions: {
    start() {
      if (this.status === "stopped") {
        this.status = "ready"
        return
      }

      this.currentTimeMs = 0
      this.status = "running"
      this.interval = setInterval(() => {
        this.currentTimeMs += 100
      }, 100)
    },

    stop() {
      if(this.status === "running") {
        clearInterval(this.interval)
        this.status = "stopped"
        console.log('stop')
      }
    }
  },
  persist: {
    pick: ["results"]
  },
})
