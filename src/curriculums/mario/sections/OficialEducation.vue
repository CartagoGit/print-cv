<template>
  <h2 class="section-title">{{ $t('MARIO.OFICIAL_EDUCATION.TITLE') }}</h2>
  <FieldData :fields="fields" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldData from '../components/FieldData.vue';
import cvData from '../data/cv-data.json';
import { tDate, tFieldsData } from '../helpers/traductor.helper';

const fields = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.oficialEducation as any[]).map((item) => ({
    ...item,
    description: item.description
      ? tFieldsData({
          cv: 'MARIO',
          kind: item.kind,
          key: 'DESCRIPTION',
          section: 'OFICIAL_EDUCATION',
        })
      : undefined,
    place: tFieldsData({
      cv: 'MARIO',
      kind: item.kind,
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
