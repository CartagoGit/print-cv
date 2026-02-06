<template>
  <h2 class="section-title">
    {{ $t('MARIO.PROFESSIONAL_EXPERIENCE.TITLE') }}
  </h2>
  <FieldData :fields="fields" />

  <h3 class="section-title section-title--small mt-5">Otros Trabajos</h3>
  <FieldData :fields="otherFields" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldData from '../components/FieldData.vue';
import cvData from '../data/cv-data.json';
import { tDate, tFieldsData, type IKindPROFESSIONALExperience } from '../helpers/traductor.helper';

import type { CvData } from '../data/cv-schema';

const typedCvData = cvData as unknown as CvData;

const fields = computed(() =>
  typedCvData.professionalExperience.map((item) => ({
    ...item,
    description: tFieldsData({
      cv: 'MARIO',
      kind: item.kind as IKindPROFESSIONALExperience,
      key: 'DESCRIPTION',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind as IKindPROFESSIONALExperience,
      key: 'PLACE',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
    date: {
      start: tDate(item.date.start),
      end: tDate(item.date.end),
    },
  })),
);

const otherFields = computed(() =>
  typedCvData.otherExperience.map((item) => ({
    ...item,
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind as IKindPROFESSIONALExperience,
      key: 'PLACE',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
    date: {
      start: tDate(item.date.start),
      end: tDate(item.date.end),
    },
  })),
);
</script>

<style scoped></style>
