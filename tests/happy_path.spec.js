const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
});

test('Validar que el contador del carrito se actualiza a 1', async ({ page }) => {
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');

    // await page.pause(); 
});

/* const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // 1. Navegar a Sauce Demo
    await page.goto('https://www.saucedemo.com/');

    // 2. Iniciar sesión (Credenciales de prueba: standard_user / secret_sauce)
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});

test('Validar que el contador del carrito se actualiza a 1', async ({ page }) => {
    // 1. Hacer clic en el botón "Add to cart" del primer producto (Sauce Labs Backpack)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    // 2. Validar que el icono del carrito arriba a la derecha muestre el número "1"
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    await page.pause();
}); */
