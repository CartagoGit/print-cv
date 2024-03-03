<template>
	<h2 class="section-title">Formación reglada</h2>
	<FieldData :fields="fields" />
</template>

<script setup lang="ts">
import FieldData from '../components/FieldData.vue';
import { OFICIAL_EDUCATION_DATA } from '../data/oficial-education.data';

const fields = OFICIAL_EDUCATION_DATA;
</script>

<style scoped></style>
