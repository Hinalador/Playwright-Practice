import { test as setup } from '@playwright/test';

const authFile = '.auth/glitch.json';

setup('authenticate as performance_glitch_user', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Este usuario tiene latencia alta, damos timeout generoso
  await page.waitForURL('**/inventory.html', { timeout: 60000 });

  await page.context().storageState({ path: authFile });
});
