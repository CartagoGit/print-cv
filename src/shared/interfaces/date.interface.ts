import type { ComputedRef } from 'vue';

export interface IDate {
	start: string | ComputedRef<string>;
	end: string | 'now' | undefined | ComputedRef<string | 'now' | undefined>;
}
