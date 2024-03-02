import type { IDate } from './index.interfaces';

export interface IFieldsData {
	company: string;
	subCompany?: string;
	where: string;
	date: IDate;
	place: string;
	description?: string;
}

export interface IFieldCourse {
	place: string;
	date: string;
	description: string;
	time: number;
	isOnline?: boolean;
}
