// @ts-check
import { test, expect } from '@playwright/test';

test('Teste de Login Válido', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('felipeslobz@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Teste de Login Inválido - E-mail Vazio', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible();
});

test('Teste de Login Inválido - Senha Vazia', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('felipeslobz@gmail.com');
  await page.locator('#password').fill('');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Senha inválida.')).toBeVisible();
});