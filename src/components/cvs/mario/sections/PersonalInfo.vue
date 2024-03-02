<template>
	<article class="cv-photo">
		<div class="wrapper-img">
			<img
				src="@/assets/img/mario.png"
				alt="Photo" />
		</div>
	</article>
	<article class="info">
		<h1>Mario Cabrero Volarich</h1>
		<span
			v-for="field of fields"
			class="field">
			<component
				:is="field.icon"
				class="icon icon--info" />
			<span>
				{{ field.value }}
			</span>
		</span>
	</article>
</template>
<script setup lang="ts">
import {
	EmailIcon,
	PhoneIcon,
	GithubIcon,
	LinkedinIcon,
	BirthdayIcon,
	NpmIcon,
	WorldIcon,
	CertificatesIcon,
} from '@/assets/icons/contact/contact.icons.ts';

const phone = '627 63 39 20';

const fields = [
	{
		icon: PhoneIcon,
		value: '627 63 39 20',
	},
	{
		icon: GithubIcon,
		value: 'github.com/CartagoGit',
	},
	{
		icon: EmailIcon,
		value: 'cv2mario@gmail.com',
	},
	{
		icon: LinkedinIcon,
		value: 'linkedin.com/in/mario-cabrero-volarich',
	},
	{
		icon: WorldIcon,
		value: '41007 - Sevilla ',
	},
	{
		icon: NpmIcon,
		value: 'npmjs.com/~cartago-git',
	},
	{
		icon: BirthdayIcon,
		value: '04/07/1988',
	},
	{
		icon: CertificatesIcon,
		value: 'github.com/CartagoGit/Certificados',
	},
];
</script>

<style>
.cv-photo {
	position: relative;
	.wrapper-img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 52mm;
		height: 52mm;
		border-radius: 100%;
		border: solid 3mm var(--primary);
		box-sizing: content-box;
		img {
			position: absolute;
			object-position: 50% 50%;
			width: 100%;
			aspect-ratio: 1/1;
			clip-path: circle(50%);
		}
	}
}
.info {
	display: grid;
	grid-template-columns: 55mm 1fr;
	font-weight: bold;

	h1 {
		grid-column: 1 / 3;
	}

	.field {
		display: flex;
		gap: 10px;
		align-items: center;
	}
}
</style>
