# 🎭 Playwright E2E Master Suite

![Playwright Tests](https://github.com/Hinalador/Playwright-Practice/actions/workflows/playwright.yml/badge.svg)

Proyecto automatizado de pruebas E2E con [Playwright](https://playwright.dev/), usando [Sauce Demo](https://www.saucedemo.com/) como aplicación de prueba. Arquitectura escalable con Page Object Model (POM), Fixtures, multi-user projects, linting y CI/CD con GitHub Actions.

> **28 test cases** · **3 users** (standard, problem, glitch) · **3 browsers** (Chromium, Firefox, WebKit)

---

## 🛠 Tech Stack

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

---

## 🏗 Arquitectura y Patrones

| Patrón | Descripción |
|--------|-------------|
| **Page Object Model** | Selectores y lógica encapsulados en clases ES Modules (`/pages`) |
| **Custom Fixtures** | POMs inyectados vía `test.extend()` — sin `beforeEach` boilerplate |
| **Multi-User Projects** | Auth separado por usuario (`standard`, `problem`, `glitch`) con `storageState` |
| **Data-Driven & `.env`** | Credenciales y test data centralizados, sin valores hardcodeados |
| **Linting & Formatting** | ESLint (flat config) + Prettier para consistencia de código en equipo |
| **Intercepción de Red** | Bloqueo selectivo de recursos y mocking de APIs (`page.route`) |
| **Comportamientos Avanzados** | Multinavegador, alertas nativas, control de múltiples pestañas |
| **CI/CD GitHub Actions** | Pipeline con caching, lint check, artefactos HTML y ejecución en cada push/PR |

---

## 📋 Requisitos previos

| Herramienta | Versión mínima | Verificar instalación |
|-------------|---------------|----------------------|
| [Node.js](https://nodejs.org/) | v18+ | `node -v` |
| npm | v9+ | `npm -v` |

---

## 🚀 Instalación y Configuración

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hinalador/Playwright-Practice.git
cd Playwright-Practice

# 2. Instalar dependencias 
npm install

# 3. Instalar los navegadores de Playwright
npx playwright install

# 4. Configurar variables de entorno (Credenciales)
cp .env.example .env
```
> [!IMPORTANT]  
> Abre el archivo `.env` recién creado e introduce las credenciales proporcionadas para la aplicación web.

---

## 📂 Estructura del proyecto

```text
Playwright-Practice/
├── .auth/                          # (Auto-generado) Sessions por usuario
│   ├── standard.json               #   → standard_user
│   ├── problem.json                #   → problem_user
│   └── glitch.json                 #   → performance_glitch_user
├── .github/workflows/              # Pipeline CI/CD (GitHub Actions)
├── data/                           # Datos centralizados
│   ├── credentials.js              # Mapeo de credenciales (.env)
│   └── testData.js                 # Textos estáticos, assert templates
├── pages/                          # (POM) Page Object Model Classes
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
├── tests/                          # 🧪 Archivos de test (Specs)
│   ├── fixtures.js                 # Custom fixtures (test.extend)
│   ├── auth.setup.js               # Login setup: standard_user
│   ├── auth-problem.setup.js       # Login setup: problem_user
│   ├── auth-glitch.setup.js        # Login setup: performance_glitch_user
│   ├── avanzado.spec.js            # Mocking, Redes, Alertas y Pestañas
│   ├── checkout.spec.js            # Flujo de pago y validaciones
│   ├── inventory.spec.js           # Filtros y validaciones de inventario
│   ├── login.spec.js               # Casos límite de login
│   ├── problem-user.spec.js        # Bugs conocidos del problem_user
│   └── glitch-user.spec.js         # Tests de latencia (glitch_user)
├── playwright.config.js            # Configuración maestra Playwright
├── eslint.config.js                # Configuración ESLint (flat config)
├── .prettierrc                     # Configuración Prettier
├── package.json                    # NPM Scripts y Dependencias
└── .env.example                    # Ejemplo de estructura de secretos
```

---

## 🧪 Cobertura de Tests

### `login.spec.js` — Autenticación
| Test | Tag | Tipo |
|------|-----|------|
| Login con usuario bloqueado | `@edge` | Negativo |
| Login con credenciales incorrectas | `@edge` | Negativo |
| Login con campos vacíos | `@edge` | Negativo |
| Login exitoso | `@smoke` | Happy path |

### `inventory.spec.js` — Inventario
| Test | Tag | Tipo |
|------|-----|------|
| Número correcto de productos | `@inventory` | Integridad |
| Ordenar precio mayor a menor | `@inventory` | Funcional |
| Ordenar precio menor a mayor | `@inventory` | Funcional |
| Ordenar nombre Z a A | `@inventory` | Funcional |

### `checkout.spec.js` — Flujo de compra
| Test | Tag | Tipo |
|------|-----|------|
| Agregar item y completar compra | `@smoke` `@e2e` | E2E |
| Checkout sin datos obligatorios | `@edge` | Negativo |
| Checkout sin apellido | `@edge` | Negativo |
| Checkout sin código postal | `@edge` | Negativo |
| Checkout con carrito vacío | `@edge` | Negativo |

### `avanzado.spec.js` — Técnicas avanzadas
| Test | Tag | Tipo |
|------|-----|------|
| Manejo de pestañas (multi-tab) | `@avanzado` | Avanzado |
| Alertas y diálogos nativos | `@avanzado` | Avanzado |
| Bloqueo de imágenes (network) | `@avanzado` | Avanzado |
| Mocking de API REST | `@avanzado` | Avanzado |
| Flaky test para Trace Viewer | `@avanzado` | Debugging |

### `problem-user.spec.js` — Bugs del problem_user
| Test | Tag | Tipo |
|------|-----|------|
| Imágenes del inventario rotas | `@problem` | Bug conocido |
| Sort Z-A no funciona | `@problem` | Bug conocido |
| Imagen no cambia al agregar al carrito | `@problem` | Bug conocido |

### `glitch-user.spec.js` — Latencia del glitch_user
| Test | Tag | Tipo |
|------|-----|------|
| Inventario carga con latencia | `@glitch` | Performance |
| Flujo completo de compra con latencia | `@glitch` | E2E + Performance |
| Sort funciona pese a latencia | `@glitch` | Funcional |

---

## ▶️ NPM Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run test`      | Ejecuta todas las pruebas E2E en paralelo en Headless Mode. |
| `npm run test:ui`   | Abre el **UI Mode interactivo** de Playwright. |
| `npm run test:debug`| Ejecuta en modo depuración (Inspector paso a paso). |
| `npm run report`    | Muestra el último reporte HTML generado. |
| `npm run lint`      | Ejecuta ESLint en todo el proyecto. |
| `npm run lint:fix`  | Ejecuta ESLint y corrige errores automáticamente. |
| `npm run format`    | Formatea todo el código con Prettier. |
| `npm run format:check` | Verifica que el código esté formateado (usado en CI). |

### Filtrar por tag, proyecto o usuario:
```bash
# Por tag
npx playwright test --grep "@smoke"
npx playwright test --grep "@edge"

# Por proyecto/usuario
npx playwright test --project=chromium-standard
npx playwright test --project=chromium-problem
npx playwright test --project=chromium-glitch

# Por archivo
npx playwright test tests/checkout.spec.js
```

---

## ⚙️ Configuración de Playwright (`playwright.config.js`)

### Multi-User Projects

```text
setup-standard  ──→  chromium-standard  ──┐
                ──→  firefox-standard   ──┤  inventory, checkout, login, avanzado
                ──→  webkit-standard    ──┘

setup-problem   ──→  chromium-problem   ────  problem-user.spec.js

setup-glitch    ──→  chromium-glitch    ────  glitch-user.spec.js
```

- **3 setup projects** generan archivos de sesión (`standard.json`, `problem.json`, `glitch.json`)
- **Tests estándar** corren en 3 navegadores con la sesión de `standard_user`
- **Tests de usuario específico** corren en Chromium con su propia sesión
- **Tests de login** siempre parten de sesión limpia (`storageState: { cookies: [], origins: [] }`)

### Custom Fixtures (`test.extend`)

Los Page Objects se inyectan como fixtures en vez de instanciarse en `beforeEach`:

```js
// Antes ❌
let inventoryPage;
test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
});

// Después ✅
import { test, expect } from './fixtures.js';
test('mi test', async ({ inventoryPage }) => {
    await inventoryPage.goto();
});
```

### Otras configuraciones
- `baseURL`: Pre-configurado a `https://www.saucedemo.com`.
- **ES Modules**: `package.json` configurado como `"type": "module"`.
- **Trazas**: Configuradas en `on-first-retry` para grabaciones automáticas en caso de fallo.
- **ESLint**: Flat config con `eslint-plugin-playwright` para reglas específicas de testing.
- **Prettier**: Single quotes, trailing commas, 100 char width.

---

## 🔑 Credenciales de prueba (Sauce Demo)
La aplicación [Sauce Demo](https://www.saucedemo.com/) soporta múltiples usuarios. Este proyecto usa `.env` para gestionar credenciales:

| Usuario | Comportamiento |
|---------|---------------|
| `standard_user` | Flujo normal (default) |
| `problem_user` | Imágenes rotas, sorting roto |
| `performance_glitch_user` | Latencia alta en cada carga |
| `locked_out_user` | Bloqueado (usado en tests de login) |

**Password universal:** `secret_sauce`

---

## 📚 Recursos útiles
- 📖 [Documentación oficial de Playwright](https://playwright.dev/docs/intro)
- 🔧 [Playwright Fixtures](https://playwright.dev/docs/test-fixtures)
- 🧪 [Sauce Demo (App de prueba)](https://www.saucedemo.com/)
- ⚙️ [Page Object Models en Playwright](https://playwright.dev/docs/pom)

---

## 👤 Autor

Desarrollado por **[Hinalador](https://github.com/Hinalador)** — Proyecto de portfolio en QA Automation.

---
*Este proyecto refleja arquitecturas de automatización de pruebas escalables aplicables a proyectos reales.*
