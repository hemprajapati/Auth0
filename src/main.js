import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import webAuth from '../auth'

createApp(App).use(webAuth).use(router).mount('#app')
