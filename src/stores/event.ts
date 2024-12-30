import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventStore = defineStore('event', () => {
  const currentEvent = ref({
    id: '333',
    name: '3x3',
  })
  function setCurrentEvent(event: Event) {
    currentEvent.value = event
  }

  return {
    currentEvent,
    setCurrentEvent,
  }
})
