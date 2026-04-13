/**
 * ASINCRONISMO EN PLAYWRIGHT
 * 
 * Playwright es una herramienta para automatizar navegadores. Cuando interactúas con un
 * navegador (hacer clic, ir a una URL, esperar que un elemento aparezca), estas acciones
 * no suceden instantáneamente. Toman tiempo debido a la red, el renderizado de la página, etc.
 * 
 * Por esta razón, casi TODAS las operaciones en Playwright son asíncronas.
 * 
 * Aquí están los conceptos clave que debes dominar:
 */

// ============================================================================
// 1. Promesas (Promises)
// ============================================================================
// Una Promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
// Las funciones de Playwright devuelven Promesas.
// No necesitas crearlas frecuentemente en Playwright, pero debes saber que existen.

// ============================================================================
// 2. async / await (La forma estándar de Playwright)
// ============================================================================
// Para trabajar con Promesas de forma más legible, usamos async/await.
// - 'async' se pone antes de la función para indicar que es asíncrona.
// - 'await' se usa delante de una función que devuelve una promesa para "pausar"
//   la ejecución de esa función hasta que la promesa se resuelva (termine la acción).

// Ejemplo simulado de una prueba en Playwright:
async function ejemploPlaywright() {
    console.log("1. Iniciando navegador...");
    // await pausa la ejecución hasta que la página cargue por completo
    // await page.goto('https://example.com'); 
    console.log("2. Página cargada.");

    // await espera hasta que el elemento sea clickeable y luego hace clic
    // await page.locator('button#submit').click();
    console.log("3. Clic realizado.");
}

// ============================================================================
// 3. ¿Qué pasa si olvidas el 'await'?
// ============================================================================
// ERROR MUY COMÚN: Si olvidas el 'await', el código no esperará a que la acción termine
// y saltará a la siguiente línea instantáneamente. Esto causará que tu prueba falle
// porque intentará hacer algo antes de que el navegador esté listo.

async function errorComun() {
    // CORRECTO:
    // await page.getByText('Login').click();
    
    // INCORRECTO (Falta await):
    // page.getByText('Login').click(); 
    // ^ Esta línea no esperará al clic, devolverá una Promesa Pendiente y el código seguirá.
}

// ============================================================================
// 4. Aserciones asíncronas (Async Assertions)
// ============================================================================
// En Playwright, incluso las comprobaciones (aserciones) suelen ser asíncronas
// porque tienen "auto-retrying" (reintentan hasta que se cumple la condición o hay timeout).

async function aserciones() {
    // playwight usa la librería 'expect'
    // Como requiere consultar el DOM del navegador repetidamente, necesita 'await'
    // await expect(page.locator('.mensaje-exito')).toBeVisible();
}

// ============================================================================
// 5. Ejecutar operaciones en paralelo (Promise.all)
// ============================================================================
// A veces quieres hacer múltiples cosas a la vez para que tu prueba sea más rápida,
// o porque una acción desencadena otra evento (como un clic que abre una nueva pestaña).

async function accionesParalelas() {
    // Ejemplo: Hacer clic en un botón Y esperar a que la navegación termine.
    // Si haces await en el clic, podrías perderte el evento de navegación si ocurre muy rápido.
    // Usamos Promise.all para esperar ambas cosas simultáneamente.
    
    /*
    await Promise.all([
        page.waitForNavigation(), // Espera a que la URL cambie
        page.locator('a.siguiente-pagina').click() // Acción que causa el cambio de URL
    ]);
    */
    console.log("Se hizo clic y se navegó al mismo tiempo.");
}

// ============================================================================
// RESUMEN DE REGLAS DE ORO PARA PLAYWRIGHT:
// ============================================================================
// 1. Todas tus funciones de test deben empezar con 'async' (ej: test('...", async ({ page }) => { ... })
// 2. Pon 'await' delante de CUALQUIER acción del navegador (goto, click, fill, press).
// 3. Pon 'await' delante de CUALQUIER aserción web (expect(locator).toBe...).
// 4. Los localizadores (ej: const boton = page.locator('button')) NO llevan await al crearse, 
//    solo llevan await cuando interactúas con ellos (ej: await boton.click()).
