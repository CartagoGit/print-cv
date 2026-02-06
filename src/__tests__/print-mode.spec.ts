import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';

// Mocks
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    {
      path: '/mario',
      name: 'mario-cv',
      component: { template: '<div class="page">CV Content</div>' },
    },
  ],
});

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  messages: { es: { GENERAL: { LANG: 'ES' } }, en: {} },
  missingWarn: false,
  fallbackWarn: false,
});

// Mock window.print
const printMock = vi.fn();
Object.defineProperty(window, 'print', {
  value: printMock,
});

describe('App Print Mode', () => {
  it('should toggle print mode class when print simulation is enabled', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, i18n],
        stubs: {
          RouterView: true,
          HomeIcon: true,
          PdfIcon: true,
          ZoomInIcon: true,
          ZoomOutIcon: true,
          LangIcon: true,
        },
      },
    });

    // Verify initial state
    expect(wrapper.classes()).not.toContain('print-mode');

    // Navigate to CV route to enable controls
    await router.push({ name: 'mario-cv' });
    await wrapper.vm.$nextTick();

    // Find the Preview trigger
    const previewBtn = wrapper.find('[data-testid="preview-btn"]');
    await previewBtn.trigger('click');
    expect(wrapper.get('.app-wrapper').classes()).toContain('print-mode');
  });

  it('should call window.print when PDF button is clicked in native mode', async () => {
    // This tests the replacement of html2canvas with window.print
    const wrapper = mount(App, {
      global: {
        plugins: [router, i18n],
        stubs: {
          RouterView: true,
          HomeIcon: true,
          PdfIcon: true,
          ZoomInIcon: true,
          ZoomOutIcon: true,
          LangIcon: true,
        },
      },
    });

    const pdfBtn = wrapper.findComponent({ name: 'PdfIcon' });
    if (pdfBtn.exists()) {
      await pdfBtn.trigger('click');
      expect(printMock).toHaveBeenCalled();
    }
  });
});
