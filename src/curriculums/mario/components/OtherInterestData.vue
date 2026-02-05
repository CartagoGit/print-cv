<template>
  <span v-for="(otherData, index) of otherInterestData" :key="index" class="other font-bold">
    <component :is="iconMap[otherData.icon]" class="icon icon--info"></component>
    <span>{{ otherData.name }}</span>
  </span>
</template>

<script setup lang="ts">
import { CarIcon } from '@/assets/icons/contact/contact.icons';
import cvData from '../data/cv-data.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = { CarIcon };
const otherInterestData = cvData.otherInterest;
</script>

<style scoped>
.other {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
