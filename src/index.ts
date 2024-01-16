import { createApp } from 'vue'
import App from '@/App.vue'
// 注入 router
import router from '@/router'
import '@/styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
