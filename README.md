# 🎭 Playwright Practice

Proyecto de práctica para aprender automatización de pruebas con [Playwright](https://playwright.dev/), usando [Sauce Demo](https://www.saucedemo.com/) como aplicación de prueba.

---

## 📋 Requisitos previos

| Herramienta | Versión mínima | Verificar instalación |
|-------------|---------------|----------------------|
| [Node.js](https://nodejs.org/) | v18 o superior | `node -v` |
| npm | v9 o superior (incluido con Node.js) | `npm -v` |
| Git | Cualquier versión reciente | `git --version` |

> [!TIP]
> Se recomienda instalar la versión **LTS** de Node.js para mayor estabilidad.

---

## 🚀 Instalación

### Opción 1: Clonar este repositorio (recomendado)

```bash
# Clonar el repositorio
git clone https://github.com/Hinalador/Playwright-Practice.git

# Entrar al directorio
cd Playwright-Practice

# Instalar dependencias del proyecto
npm install

# Instalar los navegadores de Playwright (Chromium, Firefox, WebKit)
npx playwright install
```

### Opción 2: Crear el proyecto desde cero

Si quieres inicializar tu propio proyecto de Playwright paso a paso:

```bash
# 1. Crear una carpeta para el proyecto y entrar en ella
mkdir mi-proyecto-playwright
cd mi-proyecto-playwright

# 2. Inicializar un proyecto de Node.js
npm init -y

# 3. Instalar Playwright como dependencia de desarrollo
npm install -D @playwright/test

# 4. Instalar los navegadores necesarios (Chromium, Firefox, WebKit)
npx playwright install

# 5. (Opcional) Generar la configuración y archivos de ejemplo de Playwright
npx playwright init
```

> [!NOTE]
> `npm init -y` crea el archivo `package.json` con valores por defecto.
> `npm install -D` instala el paquete como **devDependency** (solo se necesita en desarrollo, no en producción).

---

## 📂 Estructura del proyecto

```
Playwright-Practice/
├── tests/                          # Directorio de archivos de prueba
│   ├── happy_path.spec.js          # Flujo exitoso: login + carrito
│   ├── edge_case.spec.js           # Casos límite: usuario bloqueado, contraseña incorrecta
│   ├── locators.spec.js            # Práctica de diferentes tipos de locators
│   ├── asserts.spec.js             # Práctica de asserts y listas (ej. ordenar productos)
│   └── compra_completa.spec.js     # Flujo End-to-End: checkout de producto completo
├── Practices/                      # Archivos de práctica de JavaScript
│   ├── practice.js                 # Fundamentos de JS (variables, funciones, arrays, etc.)
│   ├── ejercicios.js               # Ejercicios prácticos de JS
│   ├── playwright_async.js         # Guía de async/await aplicado a Playwright
│   └── index.js                    # Punto de entrada
├── playwright.config.js            # Configuración de Playwright
├── package.json                    # Dependencias y metadata del proyecto
├── package-lock.json               # Versiones exactas de dependencias
├── .gitignore                      # Archivos ignorados por Git
└── README.md                       # Este archivo
```

### Descripción de los tests

| Archivo | Descripción | Casos que cubre |
|---------|-------------|-----------------|
| `happy_path.spec.js` | Flujo exitoso básico | Login con `standard_user` → agregar producto al carrito → validar contador |
| `compra_completa.spec.js`| Flujo E2E completo | Login → Agrega producto → Carrito → Formulario de Checkout → Finalización explícita |
| `edge_case.spec.js` | Escenarios negativos | Login con usuario bloqueado (`locked_out_user`), login con contraseña incorrecta |
| `locators.spec.js` | Práctica de locators | Uso de distintos selectores: getByTestId, getByRole, filter, CSS y encadenamiento |
| `asserts.spec.js` | Selectores y Aserciones | Interactuar con un <select> y verificar que los elementos se ordenan correctamente |

---

## ⚙️ Configuración de Playwright

El archivo `playwright.config.js` define el comportamiento de los tests. Configuración actual:

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `testDir` | `./tests` | Carpeta donde busca los archivos `.spec.js` |
| `fullyParallel` | `true` | Ejecuta tests en paralelo para mayor velocidad |
| `retries` | `0` (local) / `2` (CI) | Reintentos automáticos en caso de fallo |
| `reporter` | `html` | Genera reportes HTML interactivos |
| `trace` | `on-first-retry` | Captura trazas al reintentar un test fallido |

### Navegadores configurados

Los tests se ejecutan en **3 navegadores** por defecto:
- 🟢 **Chromium** (Chrome)
- 🟠 **Firefox**
- 🔵 **WebKit** (Safari)

> [!TIP]
> Para ejecutar solo en un navegador específico usa: `npx playwright test --project=chromium`

---

## ▶️ Comandos para ejecutar tests

### Ejecutar todos los tests
```bash
npx playwright test
```

### Ejecutar un archivo específico
```bash
npx playwright test tests/happy_path.spec.js
npx playwright test tests/edge_case.spec.js
npx playwright test tests/locators.spec.js
```

### Ejecutar un test específico por nombre
```bash
npx playwright test -g "Login con usuario bloqueado"
```

### Ejecutar solo en un navegador
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Modos de ejecución

| Comando | Descripción |
|---------|-------------|
| `npx playwright test --ui` | Abre la **interfaz visual interactiva** para ejecutar y depurar tests |
| `npx playwright test --headed` | Ejecuta los tests mostrando el **navegador visible** |
| `npx playwright test --debug` | Abre el **Playwright Inspector** paso a paso |
| `npx playwright test --trace on` | Genera **trazas detalladas** de cada test |

### Reportes
```bash
# Ver el último reporte HTML generado
npx playwright show-report
```

---

## 🔑 Credenciales de prueba (Sauce Demo)

La aplicación [Sauce Demo](https://www.saucedemo.com/) usa las siguientes credenciales:

| Usuario | Contraseña | Comportamiento |
|---------|-----------|----------------|
| `standard_user` | `secret_sauce` | ✅ Login exitoso |
| `locked_out_user` | `secret_sauce` | ❌ Usuario bloqueado |
| `problem_user` | `secret_sauce` | ⚠️ UI con errores |
| `performance_glitch_user` | `secret_sauce` | 🐌 Respuestas lentas |
| `error_user` | `secret_sauce` | 💥 Errores aleatorios |
| `visual_user` | `secret_sauce` | 🎨 UI con diferencias visuales |

---

## 📝 Comandos de Git

```bash
# Ver estado de los cambios
git status

# Agregar todos los cambios
git add .

# Crear un commit
git commit -m "descripción del cambio"

# Subir cambios al repositorio
git push

# Traer los últimos cambios del remoto
git pull
```

---

## 🔧 Solución de problemas

### Los navegadores no están instalados
```bash
npx playwright install
```

### Error: "Cannot find module '@playwright/test'"
```bash
npm install
```

### Quiero actualizar Playwright a la última versión
```bash
npm install -D @playwright/test@latest
npx playwright install
```

### Un test falla intermitentemente (flaky test)
Ejecuta con trazas para investigar:
```bash
npx playwright test --trace on
npx playwright show-report
```

---

## 📚 Recursos útiles

- 📖 [Documentación oficial de Playwright](https://playwright.dev/docs/intro)
- 🔍 [Guía de Locators](https://playwright.dev/docs/locators)
- ✅ [Guía de Assertions](https://playwright.dev/docs/test-assertions)
- ⚙️ [Configuración de tests](https://playwright.dev/docs/test-configuration)
- 🧪 [Sauce Demo (app de prueba)](https://www.saucedemo.com/)
- 🎓 [Playwright Test Generator (Codegen)](https://playwright.dev/docs/codegen-intro) — Genera tests grabando acciones en el navegador

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Playwright** | v1.59.1 | Framework de automatización de pruebas |
| **Node.js** | v18+ | Entorno de ejecución de JavaScript |
| **JavaScript** | ES2022+ | Lenguaje de programación |
