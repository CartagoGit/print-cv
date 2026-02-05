import type { IFieldsData } from '@/shared/interfaces/index.interfaces';
import { tFieldsData, tPlace } from '../helpers/traductor.helper';

export const OFICIAL_EDUCATION_DATA: IFieldsData[] = [
	{
		company: 'I.E.S. VELÁZQUEZ',
		where: tPlace('SEVILLE'),
		date: {
			start: '2010',
			end: '2013',
		},
		place: tFieldsData({
			cv: 'MARIO',
			section: 'OFICIAL_EDUCATION',
			kind: 'VELAZQUEZ',
			key: 'PLACE',
		}),
	},
	{
		company: 'Universidad de Sevilla',
		where: tPlace('SEVILLE'),
		date: {
			start: '2006',
			end: '2009',
		},
		place: tFieldsData({
			cv: 'MARIO',
			section: 'OFICIAL_EDUCATION',
			kind: 'US',
			key: 'PLACE',
		}),
		description: tFieldsData({
			cv: 'MARIO',
			section: 'OFICIAL_EDUCATION',
			kind: 'US',
			key: 'DESCRIPTION',
		}),
	},
	{
		company: 'I.E.S. SAN PABLO',
		where: tPlace('SEVILLE'),
		date: {
			start: '2004',
			end: '2006',
		},
		place: tFieldsData({
			cv: 'MARIO',
			section: 'OFICIAL_EDUCATION',
			kind: 'SANPABLO',
			key: 'PLACE',
		}),
	},
];
