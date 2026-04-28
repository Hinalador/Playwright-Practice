import { test, expect } from './fixtures.js';
import { testData } from '../data/testData.js';

test.describe('Performance Glitch User - Latencia @glitch', () => {
  test('La página de inventario carga correctamente (con latencia)', async ({ inventoryPage }) => {
    const startTime = Date.now();
    await inventoryPage.goto();
    const loadTime = Date.now() - startTime;

    // Verificar que la página cargó correctamente
    await expect(inventoryPage.pageTitle).toHaveText('Products');

    // Documentar que este usuario tiene latencia mayor a la normal
    // performance_glitch_user suele tardar > 2 segundos en cargar
    expect(loadTime).toBeGreaterThan(1000);
  });

  test('El flujo completo de compra funciona pese a la latencia', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    // 1. Inventario
    await inventoryPage.goto();
    await inventoryPage.addItemToCartByName(testData.products.backpack);
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // 2. Carrito
    await inventoryPage.goToCart();
    await page.waitForURL('**/cart.html');
    await cartPage.proceedToCheckout();

    // 3. Checkout step 1
    await page.waitForURL('**/checkout-step-one.html');
    const info = testData.checkoutInfo;
    await checkoutPage.fillStepOne(info.firstName, info.lastName, info.postalCode);
    await checkoutPage.submitStepOne();

    // 4. Checkout step 2
    await page.waitForURL('**/checkout-step-two.html');
    await expect(checkoutPage.overviewTitle).toBeVisible();
    await checkoutPage.finishCheckout();

    // 5. Verificación final
    await page.waitForURL('**/checkout-complete.html');
    await expect(checkoutPage.completeHeader).toHaveText(testData.messages.checkoutComplete);
  });

  test('El sort de productos funciona correctamente pese a latencia', async ({ inventoryPage }) => {
    await inventoryPage.goto();
    await inventoryPage.sortBy('lohi');
    const firstPrice = await inventoryPage.getFirstItemPrice();
    expect(firstPrice).toBe('$7.99');
  });
});
