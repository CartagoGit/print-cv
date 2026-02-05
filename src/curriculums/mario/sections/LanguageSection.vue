<template>
  <h2 class="section-title section-title--lower-gap">
    {{ $t('MARIO.LANGUAGES.TITLE') }}
  </h2>
  <FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldCourses from '../components/FieldCourses.vue';
import cvData from '../data/cv-data.json';
import { tLangGrade } from '../helpers/traductor.helper';

const fields = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.languages as any[]).map((item) => ({
    ...item,
    description: tLangGrade({ lang: item.kind, key: 'DESCRIPTION' }),
    subDescription: tLangGrade({ lang: item.kind, key: 'SUBDESCRIPTION' }),
  })),
);
</script>

<style scoped></style>
