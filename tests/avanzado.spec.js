import { test, expect } from '@playwright/test';

test.describe('Técnicas Avanzadas de QA @avanzado', () => {

    test('1. Manejo de Pestañas (Nuevas ventanas de contexto)', async ({ context, page }) => {
        // En lugar de ir a SauceDemo, vamos a usar the-internet herokuapp o podemos forzar
        // abrir un link de red social localmente si vamos a inventory.
        await page.goto('/inventory.html'); // Requiere el login global

        // Preparar a Playwright para esperar una nueva página/pestaña antes de hacer click
        const pagePromise = context.waitForEvent('page');
        
        // Clic en un enlace que abre en otra pestaña (target="_blank")
        await page.locator('.social_twitter a').click();

        // Esperamos a que la nueva pestaña cargue
        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        // Validamos que efectivamente Playwright está controlando la nueva pestaña
        expect(newPage.url()).toContain('x.com');
        
        // Cerramos la pestaña nueva para no dejar basura
        await newPage.close();
    });

    test('2. Manejo de Alertas y Diálogos Nativos', async ({ page }) => {
        await page.goto('/inventory.html');

        // Configurar un 'listener' que esté atento a cualquier diálogo que aparezca
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('¿Estás seguro de querer borrar esto?');
            await dialog.accept(); // Automáticamente da click en "Aceptar"
            // await dialog.dismiss(); // O "Cancelar"
        });

        // Sauce Demo no tiene alertas de forma nativa, así que en vez de buscar una página pública,
        // Inyectamos y disparamos una alerta de navegador simulando acciones JS desde el backend/frontend
        await page.evaluate(() => {
            confirm('¿Estás seguro de querer borrar esto?');
        });
    });

    test('3. Intercepción de Red (Bloqueo de Imágenes)', async ({ page }) => {
        // Bloquear todas las peticiones a archivos con extensión de imagen
        await page.route('**/*.{png,jpg,jpeg}', route => route.abort());

        // Al navegar no se cargarán imágenes, acelerando los tests o probando estados rotos.
        await page.goto('/inventory.html');

        // Nos aseguramos de estar en la URL correcta pese a bloquear elementos visuales
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('4. Intercepción de Red (Mocking de APIs Públicas)', async ({ page }) => {
        // Navegamos a una página de API pública real como reqres
        await page.goto('https://reqres.in/');

        // Interceptamos su llamada a '/api/users?page=2' y la sobrescribimos (Mocking)
        // Para que el frontend en lugar de recibir los usuarios reales, reciba data falsa.
        await page.route('**/api/users?page=2', async route => {
            const json = {
                data: [{
                    id: 999,
                    email: "mocked@qa.com",
                    first_name: "QA",
                    last_name: "Mocking",
                    avatar: "https://reqres.in/img/faces/1-image.jpg"
                }]
            };
            await route.fulfill({ json });
        });

        // Buscamos y presionamos el botón de la página de ReqRes que ejecuta esa llamada Fetch en el Front
        await page.locator('[data-id="users"]').click();
        
        // Validamos que en la pantalla el Frontend pinta la data que TÚ le inyectaste
        await expect(page.locator('.response')).toContainText('mocked@qa.com');
    });

    test('5. Debugging y Trace Viewer (Flaky test provocado)', async ({ page }) => {
        // Para fines de validación en entrevistas o con el Trace Viewer, creamos un test que falle.
        // Solo quitale el .skip si quieres ver estallar este test localmente y jugar con el "npm run test:debug".
        test.skip();
        
        await page.goto('/inventory.html');
        // Estamos buscando un elemento que NO existe para provocar el error en 500ms y arrogar el Trace Viewer.
        await expect(page.locator('#elemento-fantasma-para-flaky-test')).toBeVisible({ timeout: 500 });
    });
});
