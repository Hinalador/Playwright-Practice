const { test, expect } = require('@playwright/test');

test('Locator: getByPlaceholder', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByPlaceholder('Password').press('Enter');
    await page.waitForURL('**/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Locator: getByTestId', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
});

test('Locator: getByRole', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Locator: getByText', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
});

test('Locator: CSS selector con locator()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Locator: filter()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});

test('Locator: nth(), first(), last()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    const productos = page.locator('.inventory_item_name');
    await expect(productos.first()).toHaveText('Sauce Labs Backpack');
    await expect(productos.nth(2)).toBeVisible();
    await expect(productos.last()).toBeVisible();
});

test('Locator: encadenado (locator dentro de locator)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    const segundoProducto = page.locator('.inventory_item').nth(1);
    await segundoProducto.getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});