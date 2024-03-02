<template>
	<article
		class="field-data"
		v-for="field of fields">
		<div class="info-place">
			<span class="company font-bold">{{ field.place }}</span>
			<span class="date font-regular">
				{{ field.date }}
			</span>
		</div>
		<div class="description">
			<span class="font-bold mr5">
				{{ field.description }}
			</span>
			<span
				class="font-regular"
				v-if="field.time">
				({{ field.time }} h)
			</span>
			<span
				v-if="field.isOnline"
				class="font-regular">
				(online)
			</span>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';
import { defineProps } from 'vue';

defineProps({
	fields: Array as () => IFieldCourse[],
});
</script>

<style scoped>
.info-place {
	display: flex;
	.date {
		color: var(--primary);
	}
}
.description {
	display: flex;
	gap: 5px;
}
</style>
