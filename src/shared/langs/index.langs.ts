import esLang from './es.lang.json';
import enLang from './en.lang.json';
import { MARIO_TRADUCTIONS } from '../../curriculums/mario/langs/mario.langs';
import type { IKindTraductions } from '../interfaces/traduction.interface';

export const TRADUCTIONS: Record<IKindTraductions, { es: {}; en: {} }> = {
	BASE: {
		es: esLang,
		en: enLang,
	},
	MARIO: MARIO_TRADUCTIONS,
};

export const getPackTraductions = (
	kind: IKindTraductions | undefined | null
) => {
	if (kind === 'BASE' || !kind) {
		return TRADUCTIONS.BASE;
	}
	return {
		...TRADUCTIONS.BASE,
		...TRADUCTIONS[kind],
	};
};
