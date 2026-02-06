<template>
  <h2 class="section-title">{{ $t('MARIO.OFICIAL_EDUCATION.TITLE') }}</h2>
  <FieldData :fields="fields" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldData from '../components/FieldData.vue';
import cvData from '../data/cv-data.json';
import { tDate, tFieldsData, type IKindOficialEducation } from '../helpers/traductor.helper';

import type { CvData } from '../data/cv-schema';

const typedCvData = cvData as unknown as CvData;

const fields = computed(() =>
  typedCvData.oficialEducation.map((item) => ({
    ...item,
    description: item.description
      ? tFieldsData({
          cv: 'MARIO',
          kind: item.kind as IKindOficialEducation,
          key: 'DESCRIPTION',
          section: 'OFICIAL_EDUCATION',
        })
      : undefined,
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind as IKindOficialEducation,
      key: 'PLACE',
      section: 'OFICIAL_EDUCATION',
    }),
    date: {
      start: tDate(item.date.start),
      end: tDate(item.date.end),
    },
  })),
);
</script>

<style scoped></style>
