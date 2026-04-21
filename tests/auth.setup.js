import { test as setup } from '@playwright/test';

const authFile = '.auth/state.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/'); // Automáticamente usa baseURL de playwright.config.js
  
  await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME);
  await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  
  // Esperar a que el login se complete exitosamente verificando la URL
  await page.waitForURL('**/inventory.html');
  
  // Guardar sessionStorage/cookies en un archivo
  await page.context().storageState({ path: authFile });
});
