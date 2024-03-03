import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';
import { tLangGrade } from '../helpers/traductor.helper';

export const LANGS_DATA: IFieldCourse[] = [
	{
		description: tLangGrade({ lang: 'SPANISH', key: 'DESCRIPTION' }),
		subDescription: tLangGrade({ lang: 'SPANISH', key: 'SUBDESCRIPTION' }),
	},
	{
		place: 'BRITISH COUNCIL',
		date: 'Jul 2020',
		description: tLangGrade({ lang: 'ENGLISH', key: 'DESCRIPTION' }),
		subDescription: tLangGrade({ lang: 'ENGLISH', key: 'SUBDESCRIPTION' }),
	},
];
