import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('https://ya.ru/');
});

test('Мой первый тест', async ({ page }) => {
  await page.locator('.search3__input.mini-suggest__input').fill('Hello, world!');
  await page.getByRole('button', { name: 'Найти' }).click();
  await expect(page).toHaveURL(/search/);
  await expect(page).toHaveURL(/text=Hello.*world/);
});
