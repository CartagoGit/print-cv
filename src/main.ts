import './assets/scss/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.routes';

import { i18nInstance } from './shared/helpers/traduction.helper';

const app = createApp(App);
const i18n = i18nInstance;

app.use(router);
app.use(i18n);
app.mount('#app');
