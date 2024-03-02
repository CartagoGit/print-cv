<template>
	<h2 class="section-title">Formación reglada</h2>
</template>

<script setup lang="ts">
import type { IFieldsData } from '@/shared/interfaces/index.interfaces';


const fields : IFieldsData[] = [
    {
        company: 'Universidad de Sevilla',
        where: 'Sevilla',
        date: {
            start: '2006',
            end: '2009'
        },
        place: 'Cursado parcial: Ingeniería Técnica en Informática de Sistemas.',
        description: 'No finalizado por cambio en la orientación de los estudios.'
    }
]
</script>

<style scoped></style>
