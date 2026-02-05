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
import { tFieldsData } from '../helpers/traductor.helper';

const fields = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.professionalExperience as any[]).map((item) => ({
    ...item,
    description: tFieldsData({
      cv: 'MARIO',
      kind: item.kind,
      key: 'DESCRIPTION',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind,
      key: 'PLACE',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
  })),
);

const otherFields = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.otherExperience as any[]).map((item) => ({
    ...item,
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind,
      key: 'PLACE',
      section: 'PROFESSIONAL_EXPERIENCE',
    }),
  })),
);
</script>

<style scoped></style>
