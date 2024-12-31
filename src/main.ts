import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')

const timerWrapper = document.querySelector('.wrapper')

const focusWrapper = (activeEl) => {
  console.log('[focus-wrapper]', activeEl)
  if (activeEl === timerWrapper) {
    return
  } else {
    timerWrapper.focus()
  }
}

window.addEventListener('focusin', focusWrapper)

window.addEventListener('focusout', focusWrapper)
