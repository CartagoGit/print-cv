<template>
	<h2 class="section-title section-title--lower-gap">
		{{ $t('MARIO.LANGUAGES.TITLE') }}
	</h2>
	<FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import FieldCourses from '../components/FieldCourses.vue';
import { LANGS_DATA } from '../data/langs.data';
const fields = LANGS_DATA;
</script>

<style scoped></style>
