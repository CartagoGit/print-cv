import { test, expect } from '@playwright/test';

test('CV loads and print mode toggles', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/CV/);

  // Navigate to Mario CV (link text is 'Mario Cabrero')
  await page.getByRole('link', { name: 'Mario Cabrero' }).click();

  await expect(page).toHaveURL(/.*mario/);
  await expect(page.locator('#curriculum')).toBeVisible();

  // Test Print Mode Toggle
  await page.getByTestId('preview-btn').click();
  await expect(page.locator('.app-wrapper')).toHaveClass(/print-mode/);

  // Test Theme Switcher presence
  const colorInput = page.locator('input[type="color"]');
  await expect(colorInput).toBeVisible();
});
