import { test, expect } from '@playwright/test';

test('CV loads and print mode toggles', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/CV/);

  // Navigate to Mario CV (link text is 'Mario Cabrero')
  await page.getByRole('link', { name: 'Mario Cabrero' }).click();

  await expect(page).toHaveURL(/.*mario/);
  await expect(page.locator('#curriculum')).toBeVisible();

  // Test Print Mode Toggle
  await page.getByRole('button', { name: 'Toggle Print Preview Mode' }).click();
  await expect(page.locator('.app-wrapper')).toHaveClass(/print-mode/);

  // Test Theme Switcher presence
  const colorInput = page.locator('input[type="color"]');
  await expect(colorInput).toBeVisible();

  // Test Dark Mode Toggle
  await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
  // Using page.locator('html') to check class on root
  await expect(page.locator('html')).toHaveClass(/dark/);
});
