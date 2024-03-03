<template>
	<div class="other-data">
		<h3 class="section-title">Otros datos de interés</h3>
		<span
			v-for="otherData of otherInterestData"
			class="font-bold">
			{{ otherData }}
		</span>
	</div>
	<div class="techs">
		<h2 class="section-title">Conocimientos tecnológicos</h2>
		<Techs />
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
	<!-- <div class="skills">
		<h3 class="section-title">Habilidades</h3>
		<span class="font-bold skill-fields">
			<span>Pensamiento creativo</span>
			<span>/</span>
			<span>Pensamiento crítico</span>
			<span>/</span>
			<span>Resolución de problemas</span>
		</span>
	</div> -->
</template>

<script setup lang="ts">
import Techs from '../components/Techs.vue';
import { CONTACT_DATA_OBJ } from '../data/contact.data';
import { OTHER_INTEREST_DATA } from '../data/other-interest.data';

const { email, github, linkedin, phone } = CONTACT_DATA_OBJ;
const otherInterestData = OTHER_INTEREST_DATA;
</script>

<style scoped lang="scss">
.other-data {
	display: flex;
	gap: 10px;
	flex-direction: column;
	h3 {
		margin-bottom: 5px;
	}
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
../constants/contact.constant../data/info-contact.constant
