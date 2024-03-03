<template>
	<div class="aside">
		<div class="open-projects">
			<h3 class="section-title">Proyectos abiertos</h3>
			<OpenProjects />
		</div>
		<div class="other-interest-data">
			<h3 class="section-title">Otros datos de interés</h3>
			<OtherInterestData />
		</div>
	</div>
	<div class="main">
		<div class="techs">
			<h2 class="section-title">Conocimientos tecnológicos</h2>
			<Techs />
		</div>
	</div>
	<div class="contact font-bold">
		<span
			v-for="contact of contactData"
			class="contact-field">
			<component
				:is="contact.icon"
				class="icon icon--info" />
			<span>{{ contact.shortValue }}</span>
		</span>
	</div>
</template>

<script setup lang="ts">
import OpenProjects from '../components/OpenProjects.vue';
import OtherInterestData from '../components/OtherInterestData.vue';
import Techs from '../components/Techs.vue';
import { CONTACT_DATA_OBJ } from '../data/contact.data';

const { email, linkedin, phone } = CONTACT_DATA_OBJ;
const contactData = [linkedin, email, phone];
</script>

<style scoped lang="scss">
.main {
	display: flex;
}

.other-interest-data,
.open-projects {
	display: flex;
	gap: 10px;
	flex-direction: column;
	h3 {
		margin-bottom: 5px;
	}
}

.other-interest-data {
	margin-top: 15px;
}

.techs {
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-bottom: 5px;
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
</style>
