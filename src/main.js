import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import auth from '../auth'

console.log(auth)
createApp(App).use(router).mount('#app')
// app.use(auth)
// app.use(router)

// app.mount('#app')
