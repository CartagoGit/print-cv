<template>
  <h2 class="section-title">
    {{ $t('MARIO.PROFESSIONAL_EXPERIENCE.TITLE') }}
  </h2>
  <FieldData :fields="fields" />

  <h3 class="section-title section-title--small mt-5">Otros Trabajos</h3>
  <FieldData :fields="otherFields" />
</template>

<script setup lang="ts">
import FieldData from '../components/FieldData.vue';
import cvData from '../data/cv-data.json';
import type { IFieldsData } from '@/shared/interfaces/fields-data.interface';

const fields = cvData.professionalExperience as IFieldsData[];
const otherFields = cvData.otherExperience as IFieldsData[];
</script>
<style scoped></style>
