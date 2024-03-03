import type { ComputedRef } from 'vue';

export interface IDate {
	start: ComputedRef<string>;
	end: ComputedRef<string | 'now' | undefined>;
}
