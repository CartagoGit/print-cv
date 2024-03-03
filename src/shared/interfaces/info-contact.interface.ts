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
	value: string;
    shortValue: string;
	icon: string;
}
