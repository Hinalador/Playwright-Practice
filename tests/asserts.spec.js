const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/inventory.html');
});

test('Ordenar productos de mayor a menor precio', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('hilo');
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$49.99');
});

test('Ordenar productos de menor a mayor precio', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('lohi');
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});

test('Ordenar productos de Z a A', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('za');
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
});