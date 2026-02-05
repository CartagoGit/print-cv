<template>
	<h2 class="section-title section-title--lower-gap">
		{{ $t('MARIO.COURSES.TITLE') }}
	</h2>
	<FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import FieldCourses from '../components/FieldCourses.vue';
import { COMPLEMENTARY_EDUCATION_DATA } from '../data/complementary-education.data';

const fields = COMPLEMENTARY_EDUCATION_DATA;
</script>
