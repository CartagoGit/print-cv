<template>
  <div class="aside">
    <div class="open-projects">
      <h3 class="section-title">
        {{ $t('MARIO.OTHER_DATA.OPEN_PROJECTS.TITLE') }}
      </h3>
      <OpenProjects />
    </div>
    <div class="other-interest-data">
      <h3 class="section-title">
        {{ $t('MARIO.OTHER_DATA.OTHER_INTEREST_DATA.TITLE') }}
      </h3>
      <OtherInterestData />
    </div>
  </div>
  <div class="main">
    <div class="techs">
      <h2 class="section-title">
        {{ $t('MARIO.OTHER_DATA.TECH_SKILLS.TITLE') }}
      </h2>
      <TechSkills />
    </div>
  </div>
</template>

<script setup lang="ts">
import OpenProjects from '../components/OpenProjects.vue';
import OtherInterestData from '../components/OtherInterestData.vue';
import TechSkills from '../components/TechSkills.vue';
</script>

<style scoped lang="scss">
.main {
  display: flex;
}

.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.other-interest-data,
.open-projects {
  display: flex;
  gap: 5px;
  flex-direction: column;
  h3 {
    margin-bottom: 5px;
  }
}

.other-interest-data {
  margin-top: 15px;
}

.techs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact {
  position: absolute;
  bottom: 5px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  &-field {
    display: flex;
    gap: 5px;
  }
}
</style>
