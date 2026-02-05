<template>
  <h2 class="section-title">{{ $t('MARIO.OFICIAL_EDUCATION.TITLE') }}</h2>
  <FieldData :fields="fields" />
</template>

<script setup lang="ts">
import FieldData from '../components/FieldData.vue';
import cvData from '../data/cv-data.json';
import type { IFieldsData } from '@/shared/interfaces/fields-data.interface';

const fields = cvData.oficialEducation as unknown as IFieldsData[];
</script>

<style scoped></style>
