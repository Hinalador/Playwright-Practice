const { test, expect } = require('@playwright/test');

// El beforeEach hace el login antes de cada test
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/inventory.html');
});

test('Ordenar productos de mayor a menor precio', async ({ page }) => {
    // Seleccionar la opción del dropdown
    await page.locator('.product_sort_container').selectOption('hilo'); // hilo = Price (high to low)

    // El primer precio visible debe ser el más alto ($49.99)
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$49.99');
});

test('Ordenar productos de menor a mayor precio', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('lohi'); // lohi = Price (low to high)

    // El primer precio visible debe ser el más bajo ($7.99)
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});

test('Ordenar productos de Z a A', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('za'); // za = Name (Z to A)

    // El primer producto debe empezar con la última letra del abecedario
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
});