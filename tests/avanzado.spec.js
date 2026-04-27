import { test, expect } from '@playwright/test';

test.describe('Técnicas Avanzadas de QA @avanzado', () => {

    test('1. Manejo de Pestañas (Nuevas ventanas de contexto)', async ({ context, page, browserName }) => {
        // Firefox y WebKit no abren nueva pestaña con target="_blank" de forma consistente
        test.skip(browserName !== 'chromium', 'Solo Chromium maneja target="_blank" de forma confiable');
        test.slow(); // Timeout extendido: navegamos a un sitio externo (X/Twitter)

        // En lugar de ir a SauceDemo, vamos a usar the-internet herokuapp o podemos forzar
        // abrir un link de red social localmente si vamos a inventory.
        await page.goto('/inventory.html'); // Requiere el login global

        // Preparar a Playwright para esperar una nueva página/pestaña antes de hacer click
        const pagePromise = context.waitForEvent('page');
        
        // Clic en un enlace que abre en otra pestaña (target="_blank")
        await page.locator('.social_twitter a').click();

        // Esperamos a que la nueva pestaña cargue
        const newPage = await pagePromise;
        await newPage.waitForLoadState('domcontentloaded');

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

    test('4. Intercepción de Red (Mocking de API REST)', async ({ page }) => {
        await page.goto('/inventory.html');

        // Interceptamos cualquier llamada a la API pública de JSONPlaceholder
        // y la sobrescribimos con data falsa (Mocking).
        await page.route('**/jsonplaceholder.typicode.com/users/1', async route => {
            const mockedUser = {
                id: 1,
                name: 'QA Tester Mockeado',
                email: 'mocked@qa-automation.com',
                company: { name: 'Playwright Corp' }
            };
            await route.fulfill({ json: mockedUser });
        });

        // Ejecutamos un fetch real desde el navegador hacia la API pública.
        // Gracias al mock, Playwright intercepta la request y devuelve NUESTRA data.
        const userData = await page.evaluate(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            return res.json();
        });

        // Verificamos que la respuesta recibida es la data mockeada, no la real
        expect(userData.name).toBe('QA Tester Mockeado');
        expect(userData.email).toBe('mocked@qa-automation.com');
        expect(userData.company.name).toBe('Playwright Corp');
    });

    test('5. Debugging y Trace Viewer (Flaky test provocado)', async ({ page }) => {
        // Para fines de validación en entrevistas o con el Trace Viewer, creamos un test que falle.
        // Solo quitale el .skip si quieres ver estallar este test localmente y jugar con el "npm run test:debug".
        test.skip();
        
        await page.goto('/inventory.html');
        // Estamos buscando un elemento que NO existe para provocar el error en 500ms y arrojar el Trace Viewer.
        await expect(page.locator('#elemento-fantasma-para-flaky-test')).toBeVisible({ timeout: 500 });
    });
});
