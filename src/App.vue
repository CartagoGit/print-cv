<template>
  <aside>
    <header>
      <section class="logo">
        <HomeIcon class="icon icon--header icon--logo" @click="$router.push({ name: 'home' })" />
      </section>
      <section>
        <span class="group-icons">
          <LangIcon class="icon icon--header" @click="changeLang" />
          <span class="float">
            {{ $t('GENERAL.LANG') }}
          </span>
        </span>
      </section>
      <section>
        <span class="group-icons" :class="{ disabled: !curriculum }">
          <ZoomOutIcon class="icon icon--header" @click="zoomOut" />
          <ZoomInIcon class="icon icon--header" @click="zoomIn" />
          <span class="float">{{ scale }}%</span>
        </span>
      </section>
      <section>
        <span class="group-icons" :class="{ disabled: !curriculum }">
          <PdfIcon class="icon icon--header" @click="callGeneratePDF()" />
        </span>
      </section>
    </header>
    <nav>
      <h3>Cvs Vitae</h3>
      <span
        v-for="(route, index) in routesData"
        :key="index"
        @click="$router.push({ name: route.nameRoute })"
        class="link btn"
      >
        {{ route.text }}
      </span>
    </nav>
  </aside>
  <main :key="reRender">
    <RouterView v-if="$route.name === 'home'" class="home" />
    <div
      ref="curriculum"
      v-else
      :style="{
        transform: `scale(${Math.round(scale) / 100})`,
      }"
      id="curriculum"
    >
      <h1 v-if="actualRoute">
        {{
          $t(`${actualRoute.nameRoute.toUpperCase()}.CV.TITLE`, {
            name: actualRoute.text,
          })
        }}
      </h1>
      <RouterView />
    </div>
  </main>
  <div class="is-loading" v-if="isLoading">Cargando</div>
</template>

import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import {
  HomeIcon,
  PdfIcon,
  ZoomInIcon,
  ZoomOutIcon,
  LangIcon,
} from '@/assets/icons/header/header.icons.ts';
import { ref } from 'vue';
import { generatePDF } from './shared/helpers/file.helper';
import { CURRICULUMS_ROUTES_DATA } from './shared/data/curriculums.data';
import { useI18n } from 'vue-i18n';
import router from './router/index.routes';
const { locale: lang } = useI18n();

const route = useRoute();

const curriculum = ref<HTMLElement | null>(null);
const scale = ref(100);
const isLoading = ref(false);
const reRender = ref(0);
const routesData = CURRICULUMS_ROUTES_DATA;
const actualRoute = ref(routesData.find((routeData) => routeData.nameRoute === route.name)!);
const isPrintMode = ref(false);

router.beforeEach((_to, _from, next) => {
  scale.value = 100;
  next();
});

watch(route, () => {
  actualRoute.value = routesData.find((routeData) => routeData.nameRoute === route.name)!;
});

const zoomIn = () => {
  if (scale.value >= 260 || !curriculum?.value) return;
  scale.value += 20;
  scale.value = Math.round(scale.value);
  reRender.value++;
};
const zoomOut = () => {
  if (scale.value <= 20 || !curriculum?.value) return;
  scale.value -= 20;
  scale.value = Math.round(scale.value);
  reRender.value++;
};
const callGeneratePDF = async () =>
  generatePDF({
    curriculum,
    isLoading,
    scale,
    actualRoute,
  });

const togglePrintMode = () => {
  isPrintMode.value = !isPrintMode.value;
  // Adjust scale for A4 preview if needed, or keep user scale
  if (isPrintMode.value) {
    // Optional: Reset scale to fit screen or specific preview scale
    // scale.value = 100; 
  }
};

const changeLang = () => (lang.value = lang.value === 'es' ? 'en' : 'es');
</script>

<style>
@media screen and (max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
    &.print-mode {
      display: block; // Override grid
    }
  }
  aside {
    display: none;
  }
}
@media screen and (min-width: 769px) {
  #app {
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: var(--gray-200);
    height: 100vh;
    width: 100%;
    overflow: hidden;

    &.print-mode {
      display: block; // Print mode is full page
      grid-template-columns: 1fr;
      aside {
        display: none;
      }
      main {
        padding: 0;
        background-color: white; // Simulate paper background environment
        display: flex;
        justify-content: center;
        align-items: start;
        height: 100%;
        overflow-y: auto;
      }
    }
  }
  aside {
    display: flex;
  }
}

/* Print Styles & Simulation */
@media print {
  #app {
    display: block !important;
    height: auto !important;
    overflow: visible !important;
    background: white !important;
  }
  aside, header, .is-loading {
    display: none !important;
  }
  main {
    padding: 0 !important;
    margin: 0 !important;
    width: 210mm !important; // A4 width
    height: auto !important; // Allow flow
    overflow: visible !important;
  }
  #curriculum {
    transform: none !important; // Disable zoom for print
    width: 100% !important;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Simulation Class */
.print-mode {
  #curriculum {
     // A4 Aspect Ratio Simulation if needed, or just let CSS print rules take over via shared class?
     // Actually, we want to simulate EXACTLY what @media print does but on screen.
     // So we mimic the @media print rules here.
     
     // Note: #curriculum already handles content.
     
     // We need to ensure the container feels like a paper.
     width: 210mm;
     min-height: 297mm;
     background: white;
     box-shadow: 0 0 10px rgba(0,0,0,0.5);
     margin: 20px auto;
  }
}
</style>
<style scoped>
main,
aside {
  width: 100%;
  height: 100%;
  overflow: auto;
}

aside {
  background-color: var(--gray-700);
  color: var(--gray-100);
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 0 black;
  header {
    box-shadow: 0 0 2px 0 black;
    gap: 20px;
    padding: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--gray-800);

    section {
      display: flex;
      justify-content: center;
      &.logo {
        grid-column: 1 / 4;
      }
    }
    .group-icons {
      position: relative;
      border-radius: 30px;
      background-color: var(--gray-900);
      border: 1px solid var(--gray-600);
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      .float {
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        color: var(--gray-400);
      }
    }
  }
  nav {
    padding: 20px;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
}
main {
  justify-content: center;
  color: var(--gray-700);
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .home,
  #curriculum {
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    transform-origin: top left;
  }
}

.is-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: var(--gray-100);
  transition: 300ms ease all;
}
</style>
