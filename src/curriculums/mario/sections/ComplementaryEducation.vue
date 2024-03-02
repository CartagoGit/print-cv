import { IFieldCourse } from '../../../shared/interfaces/fields-data';
<template>
	<h2 class="section-title">Formación reglada</h2>
	<FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';

const fields: IFieldCourse[] = [];
</script>

<style scoped></style>
