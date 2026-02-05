
import { describe, it, expect } from 'vitest';

import cvData from '@/curriculums/mario/data/cv-data.json';

describe('Data Layer Refactor', () => {
  it('should load the CV data JSON', () => {
    expect(cvData).toBeDefined();
    expect(cvData.professionalExperience).toBeDefined();
    expect(Array.isArray(cvData.professionalExperience)).toBe(true);
  });

  it('should have valid professional experience entries', () => {
    const job = cvData.professionalExperience[0];
    expect(job).toHaveProperty('company');
    expect(job).toHaveProperty('date');
    expect(job.date).toHaveProperty('start');
    expect(job.date).toHaveProperty('end');
    // Ensure we are using translation keys (strings) not function results
    expect(typeof job.description).toBe('string');
  });

  it('should have valid tech skills structure', () => {
    expect(cvData.techs).toBeDefined();
    expect(cvData.techs).toHaveProperty('languages');
    const lang = cvData.techs.languages;
    expect(Array.isArray(lang.usual)).toBe(true);
    // Icons should be strings in JSON
    if (lang.usual.length > 0) {
      expect(typeof lang.usual[0].icon).toBe('string');
    }
  });
});
