<template>
  <h2 class="section-title section-title--lower-gap">
    {{ $t('MARIO.COURSES.TITLE') }}
  </h2>
  <FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldCourses from '../components/FieldCourses.vue';
import cvData from '../data/cv-data.json';
import { tCourses } from '../helpers/traductor.helper';

const fields = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.complementaryEducation as any[]).map((item) => ({
    ...item,
    description: tCourses(item.kind),
  })),
);
</script>
