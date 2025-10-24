import { test, expect } from '@playwright/test';

test('Google title check', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('Мой второй тест', async ({ page }) => {
  await page.goto('https://auto.ru/');
  await page.locator('#confirm-button').click();
  await page.getByRole('link', { name: 'Lada (ВАЗ)' }).nth(1).click();
});
