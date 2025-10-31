import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
  use: {
    browserName: 'chromium', // браузер по умолчанию
    headless: false, // показывать окно браузера
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list']],
});
