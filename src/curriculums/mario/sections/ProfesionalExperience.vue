<template>
	<h2 class="section-title">Experiencia profesional</h2>
	<FieldData :fields="fields" />
</template>

<script setup lang="ts">
import FieldData from '../components/FieldData.vue';
import { PROFESIONAL_EXP_DATA } from '../data/profesional-experience.data';

const fields = PROFESIONAL_EXP_DATA;
</script>
<style scoped></style>../data/profesional-experience.data
