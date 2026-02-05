<template>
  <div class="app-wrapper" :class="{ 'print-mode': isPrintMode }">
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
            <span
              @click="togglePrintMode"
              data-testid="preview-btn"
              class="sidebar-preview-btn icon--header cursor-pointer text-[10px] font-bold text-white transition-opacity duration-200"
              :class="isPrintMode ? 'opacity-100' : 'opacity-50'"
            >
              PREVIEW
            </span>
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
      <h1 v-if="actualRoute">
        {{
          $t(`${actualRoute.nameRoute.toUpperCase()}.CV.TITLE`, {
            name: actualRoute.text,
          })
        }}
      </h1>
      <div
        ref="curriculum"
        v-if="$route.name !== 'home'"
        :style="{
          transform: `scale(${Math.round(scale) / 100})`,
          transformOrigin: 'top center',
        }"
        id="curriculum"
      >
        <RouterView />
      </div>
      <button v-if="isPrintMode" @click="togglePrintMode" class="exit-preview-btn">
        EXIT PREVIEW
      </button>
    </main>
    <div class="is-loading" v-if="isLoading">Cargando</div>
  </div>
</template>

<script setup lang="ts">
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
const callGeneratePDF = async () => generatePDF(actualRoute.value?.text || 'CV');

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
  .app-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100%;

    &.print-mode {
      display: block; /* Override grid */
      overflow-y: auto;
    }
  }
  aside {
    display: none;
  }
}
@media screen and (min-width: 769px) {
  .app-wrapper {
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: var(--gray-200);
    height: 100vh;
    width: 100%;
    overflow: hidden;

    &.print-mode {
      display: block; /* Print mode is full page */
      aside {
        display: none;
      }
      main {
        padding: 40px;
        background-color: var(--gray-700); /* Dark background to contrast paper */
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
  body,
  .app-wrapper {
    display: block !important;
    height: auto !important;
    overflow: visible !important;
    background: white !important;
  }
  aside,
  header,
  .is-loading,
  .exit-preview-btn,
  h1 {
    display: none !important;
  }
  main {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: auto !important; /* Allow flow */
    overflow: visible !important;
    display: block !important;
  }
  #curriculum {
    transform: none !important; /* Disable zoom for print */
    width: 100% !important;
    max-width: 210mm !important;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 40px !important; /* Maintain side padding in print */
  }
}

/* Simulation Class */
.print-mode {
  #curriculum {
    width: 210mm;
    min-height: 297mm;
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    transform: none !important; /* Controlled by inline style usually, but force none here? */
    /* Actually inline style `transform` is managed by isPrintMode state in template now. */

    /* Ensure sections break correctly */
    page-break-after: always;
  }
}

.exit-preview-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--red-500);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.exit-preview-btn:hover {
  transform: scale(1.05);
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

  .home {
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  #curriculum {
    width: 210mm;
    min-height: 297mm;
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    margin: 20px auto;
    padding: 40px;
    transform-origin: top center;
    /* Ensure it doesn't overflow horizontally weirdly without scroll */
    flex-shrink: 0;
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
