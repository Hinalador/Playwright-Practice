const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/inventory.html');
});

test('Compra completa', async ({ page }) => {
    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    await page.getByTestId('shopping-cart-link').click();
    await page.waitForURL('**/cart.html');
    await page.getByTestId('checkout').click();
    await page.waitForURL('**/checkout-step-one.html');
    await page.getByTestId('firstName').fill('John');
    await page.getByTestId('lastName').fill('Doe');
    await page.getByTestId('postalCode').fill('12345');
    await page.getByTestId('continue').click();
    await page.waitForURL('**/checkout-step-two.html');
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await page.getByTestId('finish').click();
    await page.waitForURL('**/checkout-complete.html');
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await page.pause();
});