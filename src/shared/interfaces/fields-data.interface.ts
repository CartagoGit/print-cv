import type { ComputedRef } from 'vue';
import type { IDate } from './index.interfaces';

export interface IFieldsData {
	company: string | ComputedRef<string>;
	subCompany?: string;
	where: string | ComputedRef<string>;
	date: IDate;
	place: string | ComputedRef<string>;
	description?: string | ComputedRef<string>;
}

export interface IFieldCourse {
	place?: string;
	date?: string;
	description: string;
	subDescription?: string;
	time?: number;
	isOnline?: boolean;
}
