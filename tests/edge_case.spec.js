const { test, expect } = require('@playwright/test');

test('Login con usuario bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('locked_out_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('error')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('Login con contraseña incorrecta', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('wrong_password');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in the system');
});