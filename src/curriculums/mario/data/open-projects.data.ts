import { tOpenProjects } from '../helpers/traductor.helper';

export const OPEN_PROJECTS_DATA = [
	{
		name: 'Keyer',
		repository: 'https://github.com/CartagoGit/Keyer/',
		npm: 'https://www.npmjs.com/package/@cartago-git/keyer',
		dependency: '@cartago-git/keyer',
		install: 'npm i @cartago-git/keyer',
		description: tOpenProjects({ key: 'DESCRIPTION', project: 'KEYER' }),
		shortDescription: tOpenProjects({
			key: 'SHORT_DESCRIPTION',
			project: 'KEYER',
		}),
	},
];
