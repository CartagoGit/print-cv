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
	date?: ComputedRef<string>;
	description: ComputedRef<string>;
	subDescription?: ComputedRef<string>;
	time?: number;
	isOnline?: boolean;
}
