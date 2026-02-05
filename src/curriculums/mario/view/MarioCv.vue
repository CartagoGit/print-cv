<template>
  <div class="cv-container">
    <section class="personal">
      <PersonalInfo />
    </section>
    <section class="professional-experience">
      <ProfessionalExperience />
    </section>
    <section class="oficial-education">
      <OficialEducation />
    </section>
    <section class="complementary-education lower-gap">
      <ComplementaryEducation />
    </section>
    <section class="lang lower-gap">
      <LanguageSection />
    </section>
    <section class="other-data">
      <OtherData />
    </section>
    <span class="cv-expedition">{{ cvDate }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import PersonalInfo from '../sections/PersonalInfo.vue';
import ProfessionalExperience from '../sections/ProfessionalExperience.vue';
import OficialEducation from '../sections/OficialEducation.vue';
import ComplementaryEducation from '../sections/ComplementaryEducation.vue';
import LanguageSection from '../sections/LanguageSection.vue';
import OtherData from '../sections/OtherData.vue';
import '../styles/global.mario.scss';
import { CURRICULUM_DATE } from '../data/curriculum.data';
import cvData from '../data/cv-data.json';

const cvDate = CURRICULUM_DATE;

onMounted(() => {
  const jobTitle = cvData.professionalExperience[0]?.place || 'Software Developer';
  // Attempt to find location and email/phone from contact if available
  // Since cvData.contact is typed as explicit generic in usage, we access safely or use defaults

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mario Cabrero Volarich',
    jobTitle: jobTitle,
    url: window.location.href,
    sameAs: ['https://github.com/CartagoGit', 'https://linkedin.com/in/mario-cabrero-volarich'],
    knowsAbout: [
      ...cvData.techs.languages.usual.map((t) => t.name),
      ...cvData.techs.frontend.usual.map((t) => t.name),
      ...cvData.techs.backend.usual.map((t) => t.name),
    ],
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'cv-json-ld';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
});

onUnmounted(() => {
  const script = document.getElementById('cv-json-ld');
  if (script) script.remove();
});
</script>

<style scoped>
.cv-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* Ensure padding or margins are handled by the parent or global styles */
}

section {
  display: grid;
  grid-template-columns: 220px 1fr;
  row-gap: 15px;
  column-gap: 10px;
}

.lower-gap {
  row-gap: 6px;
}

.personal {
  /* height: 50mm; Remove fixed height to allow fluidity if content changes */
  min-height: 50mm;
}

.cv-expedition {
  text-align: right;
  font-size: 10px;
  margin-top: 20px;
  color: var(--tertiary);
}

.other-data {
  position: relative;
  /* height: 100%; Remove fixed height */
  margin-bottom: 5px;
}
</style>
../sections/ProfessionalExperience.vue
