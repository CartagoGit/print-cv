import type { ComputedRef } from 'vue';
import type { IDate } from './index.interfaces';

export interface IFieldsData {
	company: string | ComputedRef<string>;
	subCompany?: string;
	where: ComputedRef<string>;
	date: IDate;
	place: ComputedRef<string>;
	description?: ComputedRef<string>;
}

export interface IFieldCourse {
	place?: string;
	date?: string;
	description: string;
	subDescription?: string;
	time?: number;
	isOnline?: boolean;
}
