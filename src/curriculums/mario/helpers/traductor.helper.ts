import type { IKindTraductions } from '@/shared/interfaces/traduction.interface';
import { computed } from 'vue';

import { i18nInstance } from '@/shared/helpers/traduction.helper';
const { t } = i18nInstance.global;

type IKindProfesionalExperience =
	| 'BEATEAM'
	| 'INDEPENDIENT2'
	| 'EXCELLENCE'
	| 'HISPATEL'
	| 'INDEPENDIENT1'
	| 'EVERTEL'
	| 'GUADALTEL'
	| 'PUBLIBICI';

type IPropsProfesionalExperience =
    | 'COMPANY' // Opcional
	| 'WHERE'
	| 'START'
	| 'END'
	| 'PLACE'
	| 'DESCRIPTION';

export const tFieldsData = (data: {
	cv: IKindTraductions;
	kind: IKindProfesionalExperience;
	key: IPropsProfesionalExperience;
}) => {
	const { cv, kind, key } = data;
	const base = cv === 'BASE' ? '' : cv.toUpperCase();
	const translatePoint = `${base}.PROFESIONAL_EXPERIENCE.DATA.${kind}.${key}`;

	return computed(() => t(translatePoint));
};
