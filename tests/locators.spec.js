const { test, expect } = require('@playwright/test');

// ============================================================
// 🔍 PRÁCTICA DE LOCATORS EN PLAYWRIGHT
// App de prueba: https://www.saucedemo.com/
// ============================================================

// ─────────────────────────────────────────────
// 📌 1. getByPlaceholder — por texto del placeholder
// ─────────────────────────────────────────────
test('Locator: getByPlaceholder', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByPlaceholder('Password').press('Enter');
    await page.waitForURL('**/inventory.html');
    // El título 'Products' en SauceDemo es un <span class='title'>, no un heading
    await expect(page.locator('.title')).toHaveText('Products');
});

// ─────────────────────────────────────────────
// 📌 2. getByTestId — por atributo data-test (configurado en playwright.config.js)
// ─────────────────────────────────────────────
test('Locator: getByTestId', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
});

// ─────────────────────────────────────────────
// 📌 3. getByRole — por rol semántico ARIA
// ─────────────────────────────────────────────
test('Locator: getByRole', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // Botón por su rol y nombre
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    // Verificar título de página (SauceDemo usa <span class='title'>, no un heading)
    await page.waitForURL('**/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});

// ─────────────────────────────────────────────
// 📌 4. getByText — por texto visible en pantalla
// ─────────────────────────────────────────────
test('Locator: getByText', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    // Encontrar producto por su texto exacto
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
});

// ─────────────────────────────────────────────
// 📌 5. locator — selector CSS clásico
// ─────────────────────────────────────────────
test('Locator: CSS selector con locator()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // Por atributo data-test
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Por clase CSS
    await expect(page.locator('.title')).toHaveText('Products');
    // Por clase del contenedor de productos
    await expect(page.locator('.inventory_list')).toBeVisible();
});

// ─────────────────────────────────────────────
// 📌 6. filter — filtrar elementos dentro de una lista
// ─────────────────────────────────────────────
test('Locator: filter()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    // Filtrar el item que contiene "Sauce Labs Backpack" y hacer clic en Add to cart
    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});

// ─────────────────────────────────────────────
// 📌 7. nth() y first() / last() — por índice en listas
// ─────────────────────────────────────────────
test('Locator: nth(), first(), last()', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    // Seleccionar el primer producto de la lista
    const productos = page.locator('.inventory_item_name');
    await expect(productos.first()).toHaveText('Sauce Labs Backpack');
    // Seleccionar el tercer producto (índice 2)
    await expect(productos.nth(2)).toBeVisible();
    // Seleccionar el último producto
    await expect(productos.last()).toBeVisible();
});

// ─────────────────────────────────────────────
// 📌 8. locator dentro de otro locator (encadenado)
// ─────────────────────────────────────────────
test('Locator: encadenado (locator dentro de locator)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    // Buscar el botón "Add to cart" DENTRO del segundo producto
    const segundoProducto = page.locator('.inventory_item').nth(1);
    await segundoProducto.getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});