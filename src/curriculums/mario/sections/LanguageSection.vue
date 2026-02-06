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
import { tDate, tLangGrade, type ILanguages } from '../helpers/traductor.helper';
import type { CvData } from '../data/cv-schema';

const typedCvData = cvData as unknown as CvData;

const fields = computed(() =>
  typedCvData.languages.map((item) => ({
    ...item,
    description: tLangGrade({ lang: item.kind as ILanguages, key: 'DESCRIPTION' }),
    subDescription: tLangGrade({ lang: item.kind as ILanguages, key: 'SUBDESCRIPTION' }),
    date: tDate(item.date),
  })),
);
</script>

<style scoped></style>
