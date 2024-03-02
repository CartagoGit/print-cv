<template>
	<article
		class="field-data"
		v-for="field of fields">
		<div class="info-place">
			<span class="company font-bold">{{ field.place }}</span>
			<span class="badges">
				<span
					class="font-regular time badge badge--blue"
					v-if="field.time">
					{{ field.time }} h
				</span>
				<span
					v-if="field.isOnline"
					class="font-regular online badge badge--green">
					online
				</span>
			</span>
			<span class="date font-regular">
				{{ field.date }}
			</span>
		</div>
		<div class="description">
			<span class="font-bold">
				{{ field.description }}
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
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 60px 56px;
	gap: 2px;
	.date {
		color: var(--primary);
		justify-self: end;
		display: flex;
		align-items: center;
		font-size: 13px;
	}
	.badges {
		display: flex;
		gap: 1px;
		align-items: center;
	}
	.time {
		min-width: 20px;
		margin-right: auto;
	}
	.online {
		margin-left: auto;
	}
}
</style>
