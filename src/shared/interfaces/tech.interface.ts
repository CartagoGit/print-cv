import type { ComputedRef } from 'vue';

export type IKindTech =
	| 'environments'
	| 'ides'
	| 'languages'
	| 'frontend'
	| 'backend'
	| 'dependencies'
	| 'repositories'
	| 'terminals'
	| 'databases'
	| 'cloud'
	| 'others';

interface IUsualTech {
	name: string;
	icon: string;
}

export interface ITech {
	kind: IKindTech;
	name: ComputedRef<string>;
	usual: IUsualTech[];
	used: string[];
}
