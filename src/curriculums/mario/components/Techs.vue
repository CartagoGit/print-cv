<template>
	<div class="usual">
		<h3 class="section-title">Frecuentes</h3>
	</div>
	<span class="used">
		<h3 class="section-title">Usadas</h3>
	</span>
</template>

<script lang="ts" setup>
import {
	AndroidIcon,
	AngularIcon,
	BunIcon,
	ChatgptIcon,
	CmdIcon,
	CssIcon,
	DockerIcon,
	GitIcon,
	GithubIcon,
	GitlabIcon,
	HtmlIcon,
	IonicIcon,
	JavascriptIcon,
	NodeIcon,
	NpmIcon,
	PostmanIcon,
	PrettierIcon,
	ReactIcon,
	RxjsIcon,
	SassIcon,
	TerminalIcon,
	TypescriptIcon,
	VisualStudioCodeIcon,
	WindowsIcon,
	WslIcon,
} from '@/assets/icons/techs/techs.icons';
import type { IKindTech, ITech } from '@/shared/interfaces/index.interfaces';
const techs: Record<IKindTech, ITech> = {
	environments: {
		kind: 'environments',
		name: 'Entornos',
		usual: [
			{ name: 'Windows', icon: WindowsIcon },
			{ name: 'Android', icon: AndroidIcon },
		],
		used: ['Linux', 'Ubuntu'],
	},
	ides: {
		kind: 'ides',
		name: 'IDEs',
		usual: [{ name: 'Visual Studio Code', icon: VisualStudioCodeIcon }],
		used: ['Visual Studio', 'Android Studio'],
	},
	languages: {
		kind: 'languages',
		name: 'Lenguajes',
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
		name: 'Frontend Frameworks',
		usual: [
			{ name: 'Angular', icon: AngularIcon },
			{ name: 'Ionic', icon: IonicIcon },
			{ name: 'React', icon: ReactIcon },
		],
		used: [
			'Vue',
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
		name: 'Backend Frameworks',
		usual: [{ name: 'Node.js', icon: NodeIcon }],
		used: ['Nest.js', 'Laravel'],
	},
	dependencies: {
		kind: 'dependencies',
		name: 'Gestores de dependencias',
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
		name: 'Repositorios',
		usual: [
			{ name: 'Github', icon: GithubIcon },
			{ name: 'Gitlab', icon: GitlabIcon },
		],
		used: [],
	},
	terminals: {
		kind: 'terminals',
		name: 'Terminales',
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
		name: 'Bases de datos',
		usual: [],
		used: ['MongoDB', 'MySql', 'Postgres', 'MariaDB'],
	},
	cloud: {
		kind: 'cloud',
		name: 'Cloud',
		usual: [],
		used: ['Netlify', 'Heroku', 'Railway'],
	},
	others: {
		kind: 'others',
		name: 'Otros',
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
</script>

<style scoped></style>
