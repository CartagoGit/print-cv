import { describe, it, expect } from 'vitest';
import { CvDataSchema } from '../curriculums/mario/data/cv-schema';
import cvData from '../curriculums/mario/data/cv-data.json';

describe('Data Validation', () => {
  it('should validate cv-data.json against Zod schema', () => {
    const result = CvDataSchema.safeParse(cvData);
    if (!result.success) {
      console.error(JSON.stringify(result.error.issues, null, 2));
    }
    expect(result.success).toBe(true);
  });
});
