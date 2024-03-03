<template>
	<div class="other-data">
		<h3 class="section-title">Otros datos de interés</h3>
		<span class="font-bold">Carnet V de conducir (2014)</span>
		<span class="font-bold">Disponibilidad inmediata</span>
	</div>
	<div class="techs">
		<h2 class="section-title">Conocimientos técnicos</h2>
		<div class="kind-techs">
			<div class="usual">
				<h3 class="section-title">Frecuentes</h3>
			</div>
			<span class="used">
				<h3 class="section-title">Usadas</h3>
			</span>
		</div>
	</div>
	<div class="contact font-bold">
		<span class="contact-field linkedin">
			<component
				:is="linkedin.icon"
				class="icon icon--info" />
			<span>{{ linkedin.shortValue }}</span>
		</span>
		<span class="contact-field github">
			<component
				:is="github.icon"
				class="icon icon--info" />
			<span>{{ github.shortValue }}</span>
		</span>
		<span class="contact-field phone">
			<component
				:is="phone.icon"
				class="icon icon--info" />
			<span>{{ phone.shortValue }}</span>
		</span>
		<span class="contact-field email">
			<component
				:is="email.icon"
				class="icon icon--info" />
			<span>{{ email.shortValue }}</span>
		</span>
	</div>
	<div class="skills">
		<h3 class="section-title">Habilidades</h3>
		<span class="font-bold skill-fields">
			<span>Pensamiento creativo</span>
			<span>/</span>
			<span>Pensamiento crítico</span>
			<span>/</span>
			<span>Resolución de problemas</span>
		</span>
	</div>
</template>

<script setup lang="ts">
import { infoContactObject } from '../constants/info-contact.constant';

const { email, github, linkedin, phone } = infoContactObject;

const skills = {
	environment: {
		kind: 'environment',
		name: 'Entornos',
		usual: ['Windows', 'Android'],
		used: ['Linux', 'Ubuntu'],
	},
	ide: {
		kind: 'ide',
		name: 'IDEs',
		usual: ['Visual Studio Code'],
		used: ['Visual Studio', 'Android Studio'],
	},
	languages: {
		kind: 'languages',
		name: 'Lenguajes',
		usual: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass'],
		used: ['C#', 'Dart', 'Solidity', 'PHP', 'Yaml', 'Shell script'],
	},
	frontend: {
		kind: 'frontend',
		name: 'Frontend Frameworks',
		usual: ['Angular', 'Ionic', 'React'],
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
		usual: ['Node.js'],
		used: ['Nest.js', 'Laravel'],
	},
	dependencies: {
		kind: 'dependencies',
		name: 'Gestores de dependencias',
		usual: ['Npm', 'Bun.js', 'Rxjs', 'Prettier'],
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
		usual: ['Github', 'Gitlab'],
		used: [],
	},
	terminals: {
		kind: 'terminals',
		name: 'Terminales',
		usual: ['Zsh', 'Git Bash', 'Wsl2', 'Cmd'],
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
		usual: ['Docker', 'Postman', 'ChatGpt'],
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

<style scoped lang="scss">
.other-data {
	display: flex;
	gap: 10px;
	flex-direction: column;
}

.techs {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.contact {
	position: absolute;
	bottom: 5px;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
	&-field {
		display: flex;
		gap: 5px;
	}
}

.skills {
	h3 {
		margin-bottom: 10px;
	}
	grid-column: 2 /3;
	.skill-fields {
		display: flex;
		justify-content: space-between;
	}
	margin-bottom: 5px;
}
</style>
