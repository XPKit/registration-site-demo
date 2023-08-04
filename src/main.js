import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Config from './config.json'

const app = createApp(App)
app.config.globalProperties.appSettings = Config

app.use(router)

app.mount('#app')
