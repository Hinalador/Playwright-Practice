import { test as setup } from '@playwright/test';

const authFile = '.auth/problem.json';

setup('authenticate as problem_user', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL('**/inventory.html', { timeout: 60000 });

  await page.context().storageState({ path: authFile });
});
