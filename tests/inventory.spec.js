import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { testData } from '../data/testData.js';

test.describe('Inventory features @inventory', () => {
    let inventoryPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        await inventoryPage.goto();
    });

    test('Ordenar productos de mayor a menor precio', async ({ page }) => {
        await inventoryPage.sortBy('hilo'); // Price (high to low)
        const firstPrice = await inventoryPage.getFirstItemPrice();
        expect(firstPrice).toBe('$49.99');
    });

    test('Ordenar productos de menor a mayor precio', async ({ page }) => {
        await inventoryPage.sortBy('lohi'); // Price (low to high)
        const firstPrice = await inventoryPage.getFirstItemPrice();
        expect(firstPrice).toBe('$7.99');
    });

    test('Ordenar productos de Z a A', async ({ page }) => {
        await inventoryPage.sortBy('za'); // Name (Z to A)
        const firstName = await inventoryPage.getFirstItemName();
        expect(firstName).toBe(testData.products.tShirtRed);
    });
});
