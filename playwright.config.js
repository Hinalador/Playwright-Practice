import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Cargar variables de entorno (por defecto busca .env en la raíz)
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Configuración Base URL para POM y Tests
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test',
    // Usar 'domcontentloaded' evita timeouts por carga lenta de assets externos
    navigationTimeout: 60000,
    actionTimeout: 15000,
  },

  projects: [
    // ── Setup: autenticación por usuario ──
    {
      name: 'setup-standard',
      testMatch: /auth\.setup\.js/,
    },
    {
      name: 'setup-problem',
      testMatch: /auth-problem\.setup\.js/,
    },
    {
      name: 'setup-glitch',
      testMatch: /auth-glitch\.setup\.js/,
    },

    // ── Tests con standard_user (la mayoría) ──
    {
      name: 'chromium-standard',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup-standard'],
      testIgnore: [/problem/, /glitch/, /\.setup\.js/],
    },
    {
      name: 'firefox-standard',
      use: {
        ...devices['Desktop Firefox'],
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup-standard'],
      testIgnore: [/problem/, /glitch/, /\.setup\.js/],
    },
    {
      name: 'webkit-standard',
      use: {
        ...devices['Desktop Safari'],
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup-standard'],
      testIgnore: [/problem/, /glitch/, /\.setup\.js/],
    },

    // ── Tests con problem_user (Chromium) ──
    {
      name: 'chromium-problem',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/problem.json',
      },
      dependencies: ['setup-problem'],
      testMatch: /problem-user\.spec\.js/,
    },

    // ── Tests con performance_glitch_user (Chromium) ──
    {
      name: 'chromium-glitch',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/glitch.json',
      },
      dependencies: ['setup-glitch'],
      testMatch: /glitch-user\.spec\.js/,
    },
  ],
});
