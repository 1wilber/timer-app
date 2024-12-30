import { randomScrambleForEvent } from 'cubing/scramble'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResultStore = defineStore(
  'result',
  () => {
    const results = ref<[] | Result[]>([])
    const status = ref('ready')
    const interval = ref<null>(null)
    const currentTimeMs = ref(0)
    const currentScramble = ref('')

    async function generateScramble() {
      currentScramble.value = ''
      const scramble = (await randomScrambleForEvent('333')).toString()
      currentScramble.value = scramble
      console.log('[scramble generated]', scramble)
    }

    function start() {
      if (status.value === 'stopped') {
        status.value = 'ready'
        return
      }

      currentTimeMs.value = 0
      status.value = 'running'
      interval.value = setInterval(() => {
        currentTimeMs.value += 10
      }, 10)
    }

    function stop() {
      if (status.value === 'running') {
        clearInterval(interval)
        status.value = 'stopped'
        const newResult: Result = {
          ms: currentTimeMs.value,
          scramble: currentScramble.value,
          createdAt: Date.now(),
        }

        results.value = [newResult, ...results.value]

        generateScramble()
      }
    }

    generateScramble()

    return {
      status,
      currentTimeMs,
      interval,
      currentScramble,
      start,
      stop,
      results,
    }
  },
  {
    persist: {
      pick: ['results'],
    },
  },
)
