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
import { tCourses, tDate, type ICourses } from '../helpers/traductor.helper';
import type { CvData } from '../data/cv-schema';

const typedCvData = cvData as unknown as CvData;

const fields = computed(() =>
  typedCvData.complementaryEducation.map((item) => ({
    ...item,
    description: tCourses(item.kind as ICourses),
    date: tDate(item.date),
  })),
);
</script>
