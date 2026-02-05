<template>
  <h2 class="section-title section-title--lower-gap">
    {{ $t('MARIO.COURSES.TITLE') }}
  </h2>
  <FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import FieldCourses from '../components/FieldCourses.vue';
import cvData from '../data/cv-data.json';
import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';

const fields = cvData.complementaryEducation as unknown as IFieldCourse[];
</script>
