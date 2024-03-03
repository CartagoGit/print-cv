import { NpmIcon, GithubIcon } from '@/assets/icons/contact/contact.icons';
import {
	WindowsIcon,
	AndroidIcon,
	VisualStudioCodeIcon,
	JavascriptIcon,
	TypescriptIcon,
	HtmlIcon,
	CssIcon,
	SassIcon,
	AngularIcon,
	IonicIcon,
	ReactIcon,
	VueIcon,
	NodeIcon,
	NestIcon,
	BunIcon,
	RxjsIcon,
	PrettierIcon,
	GitlabIcon,
	TerminalIcon,
	GitIcon,
	WslIcon,
	CmdIcon,
	DockerIcon,
	PostmanIcon,
	ChatgptIcon,
} from '@/assets/icons/techs/techs.icons';
import type { IKindTech, ITech } from '@/shared/interfaces/index.interfaces';
import { tTechSkills } from '../helpers/traductor.helper';

export const TECHS_DATA: Record<IKindTech, ITech> = {
	environments: {
		kind: 'environments',
		name: tTechSkills('ENVIRONMENTS'),
		usual: [
			{ name: 'Windows', icon: WindowsIcon },
			{ name: 'Android', icon: AndroidIcon },
		],
		used: ['Linux', 'Ubuntu'],
	},
	ides: {
		kind: 'ides',
		name: tTechSkills('IDES'),
		usual: [{ name: 'Visual Studio Code', icon: VisualStudioCodeIcon }],
		used: ['Visual Studio', 'Android Studio'],
	},
	languages: {
		kind: 'languages',
		name: tTechSkills('LANGUAGES'),
		usual: [
			{ name: 'JavaScript', icon: JavascriptIcon },
			{ name: 'TypeScript', icon: TypescriptIcon },
			{ name: 'HTML', icon: HtmlIcon },
			{ name: 'CSS', icon: CssIcon },
			{ name: 'Sass', icon: SassIcon },
		],
		used: ['C#', 'Dart', 'Solidity', 'PHP', 'Yaml', 'Shell script'],
	},
	frontend: {
		kind: 'frontend',
		name: tTechSkills('FRONTEND'),
		usual: [
			{ name: 'Angular', icon: AngularIcon },
			{ name: 'Ionic', icon: IonicIcon },
			{ name: 'ReactJs', icon: ReactIcon },
			{ name: 'VueJs', icon: VueIcon },
		],
		used: [
			'Flutter',
			'JQuery',
			'Vite',
			'Svelte',
			'Livewire',
			'Tailwind',
			'Bootstrap',
		],
	},
	backend: {
		kind: 'backend',
		name: tTechSkills('BACKEND'),
		usual: [
			{ name: 'Node.js', icon: NodeIcon },
			{ name: 'Nest.js', icon: NestIcon },
		],
		used: ['Laravel'],
	},
	dependencies: {
		kind: 'dependencies',
		name: tTechSkills('DEPENDENCIES'),
		usual: [
			{ name: 'Npm', icon: NpmIcon },
			{ name: 'Bun.js', icon: BunIcon },
			{ name: 'Rxjs', icon: RxjsIcon },
			{ name: 'Prettier', icon: PrettierIcon },
		],
		used: [
			'Yarn',
			'Express.js',
			'Chart.js',
			'Redux',
			'Web3',
			'Electron',
			'Nodemon',
			'ts-node',
			'tsx',
			'nx',
			'quasar',
			'gradle',
			'jest',
			'.env',
			'cordova',
			'storybook',
		],
	},
	repositories: {
		kind: 'repositories',
		name: tTechSkills('REPOSITORIES'),
		usual: [
			{ name: 'Github', icon: GithubIcon },
			{ name: 'Gitlab', icon: GitlabIcon },
		],
		used: [],
	},
	terminals: {
		kind: 'terminals',
		name: tTechSkills('TERMINALS'),
		usual: [
			{ name: 'Zsh', icon: TerminalIcon },
			{ name: 'Git Bash', icon: GitIcon },
			{ name: 'Wsl2', icon: WslIcon },
			{ name: 'Cmd', icon: CmdIcon },
		],
		used: ['Powershell', 'Bash'],
	},
	databases: {
		kind: 'databases',
		name: tTechSkills('DATABASES'),
		usual: [],
		used: ['MongoDB', 'MySql', 'Postgres', 'MariaDB'],
	},
	cloud: {
		kind: 'cloud',
		name: tTechSkills('CLOUD'),
		usual: [],
		used: ['Netlify', 'Heroku', 'Railway'],
	},
	others: {
		kind: 'others',
		name: tTechSkills('OTHERS'),
		usual: [
			{ name: 'Docker', icon: DockerIcon },
			{ name: 'Postman', icon: PostmanIcon },
			{ name: 'ChatGpt', icon: ChatgptIcon },
		],
		used: [
			'Markdown',
			'Office',
			'LibreOffice',
			'Tor',
			'Unity',
			'Slack',
			'Discord',
		],
	},
};
