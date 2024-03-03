import type { IFieldsData } from '@/shared/interfaces/index.interfaces';

export const OFICIAL_EDUCATION_DATA: IFieldsData[] = [
	{
		company: 'I.E.S. VELÁZQUEZ',
		where: 'Sevilla',
		date: {
			start: '2010',
			end: '2013',
		},
		place: 'Grado Superior : Técnico Superior en Desarrollo  de Aplicaciones Informáticas.',
	},
	{
		company: 'Universidad de Sevilla',
		where: 'Sevilla',
		date: {
			start: '2006',
			end: '2009',
		},
		place: 'Cursado parcial: Ingeniería Técnica en Informática de Sistemas.',
		description:
			'No finalizado por cambio en la orientación de los estudios.',
	},
	{
		company: 'I.E.S. SAN PABLO',
		where: 'Sevilla',
		date: {
			start: '2004',
			end: '2006',
		},
		place: 'Bachillerato Tecnológico.',
	},
];
