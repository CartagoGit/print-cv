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

type IKindOficialEducation = 'VELAZQUEZ' | 'US' | 'SANPABLO';

type IPropsFieldsData =
	| 'COMPANY' // Opcional
	| 'WHERE'
	| 'START'
	| 'END'
	| 'PLACE'
	| 'DESCRIPTION';

type ISection = 'PROFESIONAL_EXPERIENCE' | 'OFICIAL_EDUCATION';

export const tFieldsData = (data: {
	cv: IKindTraductions;
	kind: IKindProfesionalExperience | IKindOficialEducation;
	key: IPropsFieldsData;
	section: ISection;
}) => {
	const { cv, kind, key, section } = data;
	const base = cv === 'BASE' ? '' : cv.toUpperCase();
	const translatePoint = `${base}.${section}.DATA.${kind}.${key}`;

	return computed(() => t(translatePoint));
};
