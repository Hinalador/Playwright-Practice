import { test, expect } from './fixtures.js';
import { credentials } from '../data/credentials.js';
import { testData } from '../data/testData.js';

// Evitamos usar el storageState global guardado (porque queremos probar el login desde cero)
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login functionality @login', () => {
  test('Login con usuario bloqueado @edge', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.lockedUser, credentials.password);
    await expect(loginPage.errorMessage).toHaveText(testData.messages.lockedLoginError);
  });

  test('Login con credenciales incorrectas @edge', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');
    await expect(loginPage.errorMessage).toHaveText(testData.messages.invalidLoginError);
  });

  test('Login con campos vacíos @edge', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toHaveText(testData.messages.emptyUsernameError);
  });

  test('Login exitoso @smoke', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(credentials.standardUser, credentials.password);
    await page.waitForURL('**/inventory.html');
    // Validamos que hemos entrado comprobando un elemento del DOM
    await expect(page.locator('.title')).toHaveText('Products');
  });
});
