/**
 * Page Object Model for the Sauce Demo Inventory page.
 * Handles product listing, sorting, cart interactions, and item details.
 */
export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = page.locator('.inventory_item');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addItemToCartByName(itemName) {
    await this.inventoryItems
      .filter({ hasText: itemName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async sortBy(optionValue) {
    // optionValue puede ser: 'az', 'za', 'lohi', 'hilo'
    await this.sortDropdown.selectOption(optionValue);
  }

  async getFirstItemPrice() {
    return await this.page.locator('.inventory_item_price').first().innerText();
  }

  async getFirstItemName() {
    return await this.page.locator('.inventory_item_name').first().innerText();
  }

  async getItemCount() {
    return await this.inventoryItems.count();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
