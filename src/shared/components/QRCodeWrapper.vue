<template>
  <div class="qr-code-wrapper" aria-hidden="true">
    <qrcode-vue :value="value" :size="size" level="H" />
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue';

defineProps({
  value: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 50,
  },
});
</script>

<style scoped>
.qr-code-wrapper {
  display: inline-block;
  padding: 2px;
  background-color: white; /* Ensure high contrast */
}
</style>
