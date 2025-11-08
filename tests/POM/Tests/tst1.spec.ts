import { test, expect } from '../../fixtures/mainPage';
import { MainPage } from '../Pages/MainPage';

test('Проверка отображения элементов навигации хедера', async ({ mainPage }) => {
  await mainPage.checkElementVisability();
});
test('Проверка названия элементов навигации хедера', async ({ mainPage }) => {
  await mainPage.checkTitlesOfElements();
});
test('Проверка атрибутов href элементов навигации хедера', async ({ mainPage }) => {
  await mainPage.checkAttributesHref();
});
test('Проверка переключения light mode', async ({ mainPage }) => {
  test.step('Нажатие на иконку переключения light mode', async () => {
    await mainPage.clickLightMode();
  });
  test.step('Проверка смены атрибута', async () => {
    await mainPage.checkAttributeMode();
  });
});
test('Проверка отображения стиля light', async ({ mainPage }) => {
  await test.step('Установка светлой темы', async () => {
    await mainPage.setLightMode();
  });
  await test.step('Скриншотная проверка светлой темы', async () => {
    await mainPage.checkLayoutWithLightMode();
  });
});
test('Проверка отображения стиля dark', async ({ mainPage }) => {
  await test.step('Установка темной темы', async () => {
    await mainPage.setDarkMode();
  });
  await test.step('Скриншотная проверка темной темы', async () => {
    await mainPage.checkLayoutWithDarkMode();
  });
});
