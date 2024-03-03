import type { ComputedRef } from 'vue';

export type IKindContact =
	| 'email'
	| 'phone'
	| 'github'
	| 'npm'
	| 'linkedin'
	| 'location'
	| 'birthday'
	| 'certificates';

export interface IInfoContact {
	kind: IKindContact;
	value: string | ComputedRef<string>;
	shortValue: string | ComputedRef<string>;
	icon: string;
}
