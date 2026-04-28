import { test, expect } from './fixtures.js';

test.describe('Problem User - Bugs conocidos @problem', () => {
  test('Las imágenes del inventario están rotas (todas iguales)', async ({ inventoryPage }) => {
    await inventoryPage.goto();

    // problem_user siempre muestra la misma imagen para todos los productos
    const images = inventoryPage.page.locator('.inventory_item_img img');
    const srcs = await images.evaluateAll((imgs) => imgs.map((img) => img.src));
    const uniqueSrcs = [...new Set(srcs)];

    // Bug conocido: todos los productos tienen la misma imagen
    expect(uniqueSrcs).toHaveLength(1);
  });

  test('El sort por nombre (Z-A) no funciona correctamente', async ({ inventoryPage }) => {
    await inventoryPage.goto();
    await inventoryPage.sortBy('za');
    const firstName = await inventoryPage.getFirstItemName();

    // Con problem_user, el sort no reordena correctamente.
    // El primer item NO es el esperado "Test.allTheThings() T-Shirt (Red)"
    expect(firstName).not.toBe('Test.allTheThings() T-Shirt (Red)');
  });

  test('Agregar al carrito funciona pero la imagen no cambia', async ({ inventoryPage }) => {
    await inventoryPage.goto();
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // Verificar que la imagen del producto sigue siendo genérica (bug)
    const itemImage = inventoryPage.page
      .locator('.inventory_item')
      .filter({ hasText: 'Sauce Labs Backpack' })
      .locator('img');
    const src = await itemImage.getAttribute('src');
    expect(src).toContain('sl-404');
  });
});
