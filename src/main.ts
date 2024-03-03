import './assets/scss/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.routes'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: {
        
    }
    
})

app.use(router)

app.mount('#app')
