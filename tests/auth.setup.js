import { test as setup } from '@playwright/test';

const authFile = '.auth/standard.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/'); // Automáticamente usa baseURL de playwright.config.js

  // LOGS DE DEPURACIÓN PARA GITHUB ACTIONS
  console.log('--- DEBUG INFO ---');
  console.log(`SAUCE_USERNAME está definido: ${!!process.env.SAUCE_USERNAME}`);
  console.log(`SAUCE_PASSWORD está definido: ${!!process.env.SAUCE_PASSWORD}`);
  console.log(`Largo del username: ${process.env.SAUCE_USERNAME ? process.env.SAUCE_USERNAME.length : 0}`);
  
  await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME || '');
  await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '');
  
  // Tomar una captura justo antes de darle click para ver qué escribió
  await page.screenshot({ path: 'test-results/debug-login-attempt.png' });
  
  await page.locator('[data-test="login-button"]').click();

  // Esperar a que el login se complete exitosamente verificando la URL
  await page.waitForURL('**/inventory.html', { timeout: 60000 });

  // Guardar sessionStorage/cookies en un archivo
  await page.context().storageState({ path: authFile });
});
