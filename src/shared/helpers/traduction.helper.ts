import { createI18n } from "vue-i18n";
import { TRADUCTIONS } from "../langs/index.langs";

export const i18nInstance = createI18n({
	locale: 'es',
	fallbackLocale: 'en',
	messages: TRADUCTIONS,
	legacy: false,
});