import { test, expect } from './fixtures.js';
import { testData } from '../data/testData.js';

test.describe('E2E Checkout flow @checkout', () => {
  test('Debe permitir agregar un item y completar la compra @smoke @e2e', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
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

  test('Debe mostrar error al intentar checkout sin datos obligatorios @edge', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
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

  test('Debe mostrar error cuando falta el apellido @edge', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    await inventoryPage.goto();
    await inventoryPage.addItemToCartByName(testData.products.backpack);
    await inventoryPage.goToCart();
    await page.waitForURL('**/cart.html');
    await cartPage.proceedToCheckout();
    await page.waitForURL('**/checkout-step-one.html');

    // Solo llenar el firstName, dejar lastName vacío
    await checkoutPage.fillStepOne(testData.checkoutInfo.firstName, '', '');
    await checkoutPage.submitStepOne();

    await expect(checkoutPage.errorMessage).toHaveText(testData.messages.checkoutLastNameRequired);
  });

  test('Debe mostrar error cuando falta el código postal @edge', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    await inventoryPage.goto();
    await inventoryPage.addItemToCartByName(testData.products.backpack);
    await inventoryPage.goToCart();
    await page.waitForURL('**/cart.html');
    await cartPage.proceedToCheckout();
    await page.waitForURL('**/checkout-step-one.html');

    // Llenar firstName y lastName, dejar postalCode vacío
    await checkoutPage.fillStepOne(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      '',
    );
    await checkoutPage.submitStepOne();

    await expect(checkoutPage.errorMessage).toHaveText(
      testData.messages.checkoutPostalCodeRequired,
    );
  });

  test('Checkout con carrito vacío muestra carrito sin items @edge', async ({ cartPage, page }) => {
    // Ir directo al carrito sin agregar productos
    await cartPage.goto();
    await page.waitForURL('**/cart.html');

    // Verificar que no hay items en el carrito
    await expect(cartPage.cartItems).toHaveCount(0);

    // Intentar proceder al checkout con carrito vacío
    await cartPage.proceedToCheckout();
    await page.waitForURL('**/checkout-step-one.html');

    // SauceDemo permite avanzar con carrito vacío, verificamos que llegamos al step one
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });
});
