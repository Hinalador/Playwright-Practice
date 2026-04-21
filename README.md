# 🎭 Playwright E2E Master Suite

Proyecto automatizado de pruebas E2E con [Playwright](https://playwright.dev/), usando [Sauce Demo](https://www.saucedemo.com/) como aplicación de prueba. Acondicionado con una arquitectura escalable, orientado a objetos (POM) y variables de entorno para nivel de producción.

---

## 🏗 Arquitectura y Patrones (Nivel Producción)
Este repositorio fue refactorizado para implementar los siguientes patrones clave de cara a proyectos de gran envergadura:
- **Page Object Model (POM):** Encapsulación de selectores y lógica de cada página en clases de ES Modules (en `/pages`).
- **Data-Driven & `.env`:** Separación total de credenciales y *test data*. Uso de dotenv para evitar tener credenciales "hardcodeadas".
- **Fixtures & storageState global:** Login optimizado; se ejecuta una única vez en un proyecto "setup" y el estado (sesión) es inyectado y reciclado a todos los tests concurrentes mediante la carpeta `.auth/`.
- **Acciones GitHub CI/CD:** Corriente de Integración Continua validada al hacer commits con subida de artefactos (Reportes HTML).

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
├── .auth/                          # (Auto-generado) Estado de sesión guardado para saltar logins
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
│   ├── checkout.spec.js            # Flujo de pago y carrito
│   ├── inventory.spec.js           # Filtros y validaciones visuales
│   └── login.spec.js               # Casos límite de login
├── Practices/                      # Vanilla JS Practice Scripts
├── playwright.config.js            # Configuración maestra Playwright
├── package.json                    # NPM Scripts y Dependencias
└── .env.example                    # Ejemplo de estructura de secretos
```

---

## ▶️ NPM Scripts (Ejecución de Tests)

Se han configurado atajos profesionales de NPM para levantar las pruebas:

| Comando | Descripción |
|---------|-------------|
| `npm run test`      | Ejecuta todas las pruebas E2E en paralelo por todos los navegadores definidos en Headless Mode. |
| `npm run test:ui`   | Ejecuta abriendo el **UI Mode interactivo** de Playwright (Excelente para desarrollar). |
| `npm run test:debug`| Ejecuta en modo depuración (Inspector paso a paso). |
| `npm run report`    | Lanza un navegador mostrando el último reporte de tests en HTML generado. |

También puedes usar comandos nativos de Playwright según la etiqueta (*Tag*):
```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@inventory"
npx playwright test --project=firefox
```

---

## ⚙️ Configuración de Playwright (`playwright.config.js`)
- `baseURL`: Pre-configurado globalmente a `https://www.saucedemo.com`.
- **Módulos ES**: `package.json` configurado estrictamente como `"type": "module"`.
- **Setup Automático**: El proyecto "setup" pre-ejecuta `auth.setup.js` antes de Chromium/Firefox/Webkit.
- **Trazas**: Programado en `on-first-retry` para generar grabaciones automáticas en CI en caso de falla.

---

## 🔑 Credenciales de prueba (Sauce Demo)
La aplicación [Sauce Demo](https://www.saucedemo.com/) soporta múltiples usuarios. Este proyecto usa `.env` para ocultar variables. Usa estos para tu entorno local:

- **SAUCE_USERNAME:** `standard_user`
- **SAUCE_PASSWORD:** `secret_sauce`

---

## 📚 Recursos útiles
- 📖 [Docs oficiales de Playwright](https://playwright.dev/docs/intro)
- 🧪 [Sauce Demo (Demo App)](https://www.saucedemo.com/)
- ⚙️ [Documentación Page Object Models](https://playwright.dev/docs/pom)

---
*Este proyecto refleja arquitecturas de automatización de pruebas escalables aplicables a proyectos reales.*
