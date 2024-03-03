<template>
	<span
		v-for="otherData of otherInterestData"
		class="other font-bold">
		<component
			:is="otherData.icon"
			class="icon icon--info"></component>
		<span>{{ otherData.name }}</span>
	</span>
</template>

<script setup lang="ts">
import { OTHER_INTEREST_DATA } from '../data/other-interest.data';
const otherInterestData = OTHER_INTEREST_DATA;
</script>

<style scoped>
.other {
	display: flex;
	gap: 5px;
	align-items: center;
}
</style>
