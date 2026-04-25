# 🎭 Playwright E2E Master Suite

![Playwright Tests](https://github.com/Hinalador/Playwright-Practice/actions/workflows/playwright.yml/badge.svg)

Proyecto automatizado de pruebas E2E con [Playwright](https://playwright.dev/), usando [Sauce Demo](https://www.saucedemo.com/) como aplicación de prueba. Arquitectura escalable con Page Object Model (POM), variables de entorno y CI/CD con GitHub Actions.

> **16 test cases** · **3 browsers** (Chromium, Firefox, WebKit) · **46 executions** per run

---

## 🛠 Tech Stack

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

---

## 🏗 Arquitectura y Patrones

| Patrón | Descripción |
|--------|-------------|
| **Page Object Model** | Selectores y lógica encapsulados en clases ES Modules (`/pages`) |
| **Data-Driven & `.env`** | Credenciales y test data centralizados, sin valores hardcodeados |
| **Fixtures & storageState** | Login único en proyecto "setup"; sesión reciclada a todos los tests |
| **Intercepción de Red** | Bloqueo selectivo de recursos y mocking de APIs (`page.route`) |
| **Comportamientos Avanzados** | Multinavegador, alertas nativas, control de múltiples pestañas |
| **CI/CD GitHub Actions** | Pipeline con caching, artefactos HTML y ejecución en cada push/PR |

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
├── .auth/                          # (Auto-generado) Estado de sesión guardado
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
│   ├── auth.setup.js               # Script global de login
│   ├── avanzado.spec.js            # Mocking, Redes, Alertas y Pestañas
│   ├── checkout.spec.js            # Flujo de pago y validaciones
│   ├── inventory.spec.js           # Filtros y validaciones de inventario
│   └── login.spec.js               # Casos límite de login
├── playwright.config.js            # Configuración maestra Playwright
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

### `avanzado.spec.js` — Técnicas avanzadas
| Test | Tag | Tipo |
|------|-----|------|
| Manejo de pestañas (multi-tab) | `@avanzado` | Avanzado |
| Alertas y diálogos nativos | `@avanzado` | Avanzado |
| Bloqueo de imágenes (network) | `@avanzado` | Avanzado |
| Mocking de API REST | `@avanzado` | Avanzado |
| Flaky test para Trace Viewer | `@avanzado` | Debugging |

---

## ▶️ NPM Scripts (Ejecución de Tests)

| Comando | Descripción |
|---------|-------------|
| `npm run test`      | Ejecuta todas las pruebas E2E en paralelo en Headless Mode. |
| `npm run test:ui`   | Abre el **UI Mode interactivo** de Playwright. |
| `npm run test:debug`| Ejecuta en modo depuración (Inspector paso a paso). |
| `npm run report`    | Muestra el último reporte HTML generado. |

También puedes filtrar por tag o navegador:
```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@inventory"
npx playwright test --project=firefox
```

---

## ⚙️ Configuración de Playwright (`playwright.config.js`)
- `baseURL`: Pre-configurado a `https://www.saucedemo.com`.
- **ES Modules**: `package.json` configurado como `"type": "module"`.
- **Setup Automático**: El proyecto "setup" ejecuta `auth.setup.js` antes de Chromium/Firefox/WebKit.
- **Trazas**: Configuradas en `on-first-retry` para grabaciones automáticas en caso de fallo.

---

## 🔑 Credenciales de prueba (Sauce Demo)
La aplicación [Sauce Demo](https://www.saucedemo.com/) soporta múltiples usuarios. Este proyecto usa `.env` para gestionar credenciales:

- **SAUCE_USERNAME:** `standard_user`
- **SAUCE_PASSWORD:** `secret_sauce`

---

## 📚 Recursos útiles
- 📖 [Documentación oficial de Playwright](https://playwright.dev/docs/intro)
- 🧪 [Sauce Demo (App de prueba)](https://www.saucedemo.com/)
- ⚙️ [Page Object Models en Playwright](https://playwright.dev/docs/pom)

---

## 👤 Autor

Desarrollado por **[Hinalador](https://github.com/Hinalador)** — Proyecto de portfolio en QA Automation.

---
*Este proyecto refleja arquitecturas de automatización de pruebas escalables aplicables a proyectos reales.*
