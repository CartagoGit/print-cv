import esLang from './es.lang.json';
import enLang from './en.lang.json';
import { MARIO_TRADUCTIONS } from '../../curriculums/mario/langs/mario.langs';
import type { IKindLanguages } from '../interfaces/traduction.interface';

export const TRADUCTIONS: Record<IKindLanguages, {}> = {
	es: {
		...esLang,
		MARIO: MARIO_TRADUCTIONS.es,
	},
	en: {
		...enLang,
		MARIO: MARIO_TRADUCTIONS.en,
	},
};
