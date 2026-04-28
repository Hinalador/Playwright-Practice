import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  // Ignorar la carpeta de prácticas JS (no es código de tests)
  {
    ignores: ['Practices/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'],
  },
  js.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.js'],
  },
  {
    // Reglas para archivos de setup: no necesitan asserts
    files: ['tests/**/*.setup.js'],
    rules: {
      'playwright/expect-expect': 'off',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        confirm: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
];
