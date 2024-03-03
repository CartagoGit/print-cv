import './assets/scss/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.routes';
import { createI18n } from 'vue-i18n';
import { TRADUCTIONS } from './shared/langs/index.langs';

const app = createApp(App);
const i18n = createI18n({
	locale: 'es',
	fallbackLocale: 'en',
	messages: TRADUCTIONS,
	legacy: false,
});

app.use(router);
app.use(i18n);
app.mount('#app');
