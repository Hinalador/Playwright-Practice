const { test, expect } = require('@playwright/test');

test('Locators - Opción 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
});