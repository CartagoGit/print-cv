import './assets/scss/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.routes'

const app = createApp(App)
// const i18n = create{
    // 
// }

app.use(router)

app.mount('#app')
