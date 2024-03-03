<template>
	<h2 class="section-title">
		{{ $t('MARIO.PROFESSIONAL_EXPERIENCE.TITLE') }}
	</h2>
	<FieldData :fields="fields" />
</template>

<script setup lang="ts">
import FieldData from '../components/FieldData.vue';
import { PROFESSIONAL_EXP_DATA } from '../data/professional-experience.data';

const fields = PROFESSIONAL_EXP_DATA;
</script>
<style scoped></style>
