import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MarioCv from '@/curriculums/mario/view/MarioCv.vue';
import { createI18n } from 'vue-i18n';

describe('Layout Refactor', () => {
  const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: {
      es: { 'GENERAL.LANG': 'es' },
    },
    missingWarn: false,
    fallbackWarn: false,
  });

  it('should verify the current structure before refactor', () => {
    const wrapper = mount(MarioCv, {
      global: {
        plugins: [i18n],
      },
    });

    // Expect single fluid container
    const container = wrapper.find('.cv-container');
    expect(container.exists()).toBe(true);

    // Expect NO legacy page classes
    const pages = wrapper.findAll('.page');
    expect(pages.length).toBe(0);

    // Verify all sections are present
    expect(wrapper.find('.personal').exists()).toBe(true);
    expect(wrapper.find('.professional-experience').exists()).toBe(true);
    expect(wrapper.find('.oficial-education').exists()).toBe(true);
  });
});
