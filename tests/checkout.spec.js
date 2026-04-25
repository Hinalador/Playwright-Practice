import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { testData } from '../data/testData.js';

test.describe('E2E Checkout flow @checkout', () => {
    let inventoryPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
    });

    test('Debe permitir agregar un item y completar la compra @smoke @e2e', async ({ page }) => {
        // 1. Ir al inventario y agregar producto
        await inventoryPage.goto();
        await inventoryPage.addItemToCartByName(testData.products.backpack);
        await expect(inventoryPage.cartBadge).toHaveText('1');

        // 2. Ir al carrito y validar proceed
        await inventoryPage.goToCart();
        await page.waitForURL('**/cart.html');
        await cartPage.proceedToCheckout();

        // 3. Paso 1 del checkout
        await page.waitForURL('**/checkout-step-one.html');
        const info = testData.checkoutInfo;
        await checkoutPage.fillStepOne(info.firstName, info.lastName, info.postalCode);
        
        // Validar que los campos mantienen su valor antes de avanzar
        await expect(checkoutPage.firstNameInput).toHaveValue(info.firstName);
        await expect(checkoutPage.lastNameInput).toHaveValue(info.lastName);
        await checkoutPage.submitStepOne();

        // 4. Paso 2 del checkout y finalizar
        await page.waitForURL('**/checkout-step-two.html');
        await expect(checkoutPage.overviewTitle).toBeVisible();
        await checkoutPage.finishCheckout();

        // 5. Verificación final
        await page.waitForURL('**/checkout-complete.html');
        await expect(checkoutPage.completeHeader).toHaveText(testData.messages.checkoutComplete);
    });

    test('Debe mostrar error al intentar checkout sin datos obligatorios @edge', async ({ page }) => {
        // Agregar un producto y llegar al checkout
        await inventoryPage.goto();
        await inventoryPage.addItemToCartByName(testData.products.backpack);
        await inventoryPage.goToCart();
        await page.waitForURL('**/cart.html');
        await cartPage.proceedToCheckout();
        await page.waitForURL('**/checkout-step-one.html');

        // Intentar avanzar sin llenar los campos
        await checkoutPage.submitStepOne();

        // Debe mostrar mensaje de error de validación
        await expect(checkoutPage.errorMessage).toHaveText(testData.messages.checkoutFirstNameRequired);
    });
});
