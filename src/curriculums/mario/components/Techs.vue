<template>
	<div class="kind-tech usual">
		<div class="field environments">
			<span class="name font-bold">{{ techs.environments.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.environments.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
		<div class="field ides">
			<span class="name font-bold">{{ techs.ides.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.ides.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field languages">
			<span class="name font-bold">{{ techs.languages.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.languages.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field frontend">
			<span class="name font-bold">{{ techs.frontend.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.frontend.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field backend">
			<span class="name font-bold">{{ techs.backend.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.backend.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field dependencies">
			<span class="name font-bold">{{ techs.dependencies.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.dependencies.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>

		<div class="field repositories">
			<span class="name font-bold">{{ techs.repositories.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.repositories.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
		<div class="field terminals">
			<span class="name font-bold">{{ techs.terminals.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.terminals.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
		<div class="field others">
			<span class="name font-bold">{{ techs.others.name.value }}:</span>
			<div class="techs">
				<span
					v-for="tech in techs.others.usual"
					:key="tech.name"
					class="tech">
					<component
						:is="tech.icon"
						class="icon icon--tech" />
					<span class="font-regular">{{ tech.name }}</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { TECHS_DATA } from '../data/techs.data';
const techs = TECHS_DATA;
</script>

<style scoped>
.icon {
	width: 20px;
	height: 20px;
}
.kind-tech {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.group-fields {
	display: grid;
	gap: 5px;
	grid-template-columns: 55% 45%;
}
.field {
	display: grid;
	grid-template-columns: 100px 1fr;
	align-items: center;
	flex-grow: 0;
	gap: 8px;
}
.techs {
	display: fleX;
	gap: 10px;
	width: 100%;
}
.tech {
	flex-grow: 0;
	display: flex;
	align-items: center;
	gap: 3px;
}
</style>
