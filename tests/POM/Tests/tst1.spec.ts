import { test, expect, Page, Locator } from '@playwright/test';
import { MainPage } from '../Pages/MainPage';

test.describe('Тесты главной страницы', () => {
  let mainPage: MainPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });
  test('Проверка отображения элементов навигации хедера', async () => {
    await mainPage.checkElementVisability();
  });
  test('Проверка названия элементов навигации хедера', async () => {
    await mainPage.checkTitlesOfElements();
  });
  test('Проверка атрибутов href элементов навигации хедера', async () => {
    await mainPage.checkAttributesHref();
  });
  test('Проверка переключения light mode', async () => {
    test.step('Нажатие на иконку переключения light mode', async () => {
      await mainPage.clickLightMode();
    });
    test.step('Проверка смены атрибута', async () => {
      await mainPage.checkAttributeMode();
    });
  });
  test('Проверка отображения стиля light', async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка светлой темы', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test('Проверка отображения стиля dark', async () => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка темной темы', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
