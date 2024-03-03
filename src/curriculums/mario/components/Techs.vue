<template>
	<div class="kind-tech usual">
		<div class="field environments">
			<span class="name font-bold">{{ techs.environments.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.environments.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field languages">
			<span class="name font-bold">{{ techs.languages.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.languages.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field frontend">
			<span class="name font-bold">{{ techs.frontend.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.frontend.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field backend">
			<span class="name font-bold">{{ techs.backend.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.backend.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field dependencies">
			<span class="name font-bold">{{ techs.dependencies.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.dependencies.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field repositories">
			<span class="name font-bold">{{ techs.repositories.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.repositories.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
		<div class="field terminals">
			<span class="name font-bold">{{ techs.terminals.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.terminals.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
		<div class="field others">
			<span class="name font-bold">{{ techs.others.name }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.others.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
	</div>
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
	NestIcon,
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
	VueIcon,
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
		name: 'Frontend',
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
		name: 'Backend',
		usual: [
			{ name: 'Node.js', icon: NodeIcon },
			{ name: 'Nest.js', icon: NestIcon },
		],
		used: ['Laravel'],
	},
	dependencies: {
		kind: 'dependencies',
		name: 'Dependencias',
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

<style scoped>
.icon {
	width: 20px;
	height: 20px;
}
.kind-tech {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	gap: 10px;
}
.group-fields {
	display: grid;
	gap: 5px;
	grid-template-columns: 55% 45%;
}
.field {
	display: grid;
	grid-template-columns: 100px 1fr;
	align-items: center;
	flex-grow: 0;
	gap: 8px;
}
.techs {
	display: fleX;
	gap: 10px;
	width: 100%;
}
.tech {
	flex-grow: 0;
	display: flex;
	align-items: center;
	gap: 3px;
}
</style>
