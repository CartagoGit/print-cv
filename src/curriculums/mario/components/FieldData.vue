<template>
	<article
		class="field-data"
		v-for="field of fields">
		<div class="info-place">
			<div class="company font-bold">{{ field.company }}</div>
			<div
				class="sub-company font-regular"
				v-if="field.subCompany">
				{{ field.subCompany }}
			</div>
			<div class="where-date">
				<span class="where font-bold">({{ field.where }})</span>
				<span class="date font-regular">
					{{ field.date.start }} - {{ field.date.end }}
				</span>
			</div>
		</div>
		<p class="description">
			<span class="font-bold mr5">
				{{ field.place }}
			</span>
			<span
				v-if="field.description"
				class="font-regular">
				{{ field.description }}
			</span>
		</p>
	</article>
</template>

<script setup lang="ts">
import type { IFieldsData } from '@/shared/interfaces/index.interfaces';

defineProps({
	fields: Array as () => IFieldsData[],
});
</script>

<style scoped>
.info-place {
	display: flex;
	flex-direction: column;

	.company {
		white-space: pre;
	}
	.where-date {
		margin-top: 3px;
		display: grid;
		grid-template-columns: auto 60%;
		.where,
		.date {
			justify-self: end;
			display: flex;
			align-items: end;
			font-size: 13px;
		}
		.date {
			color: var(--primary);
		}
	}
}
.description {
	text-wrap: pretty;
	text-align: justify;
}
</style>
