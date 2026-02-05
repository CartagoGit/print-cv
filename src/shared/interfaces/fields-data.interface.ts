import type { ComputedRef } from 'vue';
import type { IDate } from './index.interfaces';

export interface IFieldsData {
  company: string | ComputedRef<string>;
  subCompany?: string;
  where: string | ComputedRef<string>;
  date: IDate | { start: string | ComputedRef<string>; end?: string | ComputedRef<string> };
  place: string | ComputedRef<string>;
  description?: string | ComputedRef<string>;
}

export interface IFieldCourse {
  place?: string;
  date?: string | ComputedRef<string>;
  description: string | ComputedRef<string>;
  subDescription?: string | ComputedRef<string>;
  time?: number;
  isOnline?: boolean;
}
