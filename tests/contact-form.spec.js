// Checks for the briefing form on prescient-signal.html.
const { test, expect } = require('@playwright/test');
const path = require('path');

const PAGE = 'file://' + path.resolve(__dirname, '..', 'prescient-signal.html');

test.beforeEach(async ({ page }) => {
  await page.goto(PAGE);
  await page.locator('#contact').scrollIntoViewIfNeeded();
});

test('empty submit asks for every field and focuses the first', async ({ page }) => {
  await page.getByRole('button', { name: 'Request a briefing call' }).click();
  await expect(page.locator('.form-status')).toHaveText('Please complete every field.');
  await expect(page.locator('#f-name')).toBeFocused();
});

test('invalid email is rejected and focused', async ({ page }) => {
  await page.fill('#f-name', 'Ana Ortiz');
  await page.fill('#f-company', 'Example Foods');
  await page.fill('#f-email', 'not-an-email');
  await page.fill('#f-question', 'Which of three pack designs should we launch?');
  await page.getByRole('button', { name: 'Request a briefing call' }).click();
  await expect(page.locator('.form-status')).toHaveText('That email address does not look right.');
  await expect(page.locator('#f-email')).toBeFocused();
});

test('valid submit without an endpoint reports the prototype state', async ({ page }) => {
  await page.fill('#f-name', 'Ana Ortiz');
  await page.fill('#f-company', 'Example Foods');
  await page.fill('#f-email', 'ana@example.com');
  await page.fill('#f-question', 'Which of three pack designs should we launch?');
  await page.getByRole('button', { name: 'Request a briefing call' }).click();
  await expect(page.locator('.form-status')).toContainText('no form endpoint is connected');
});

test('double submit does not send twice', async ({ page }) => {
  let posts = 0;
  await page.route('https://example.test/brief', async (route) => { posts++; await route.fulfill({ status: 200, body: '{}' }); });
  await page.evaluate(() => document.getElementById('brief-form').setAttribute('data-endpoint', 'https://example.test/brief'));
  await page.fill('#f-name', 'Ana Ortiz');
  await page.fill('#f-company', 'Example Foods');
  await page.fill('#f-email', 'ana@example.com');
  await page.fill('#f-question', 'Which of three pack designs should we launch?');
  const button = page.getByRole('button', { name: 'Request a briefing call' });
  await button.dblclick();
  await expect(page.locator('.form-status')).toContainText('Thank you');
  expect(posts).toBe(1);
});

test('very long input is accepted in every field', async ({ page }) => {
  const long = 'x'.repeat(5000);
  for (const id of ['#f-name', '#f-company', '#f-question']) await page.fill(id, long);
  await page.fill('#f-email', 'ana@example.com');
  await page.getByRole('button', { name: 'Request a briefing call' }).click();
  await expect(page.locator('.form-status')).toContainText('no form endpoint is connected');
});

test('keyboard-only path reaches every field and the button', async ({ page }) => {
  await page.locator('#f-name').focus();
  for (const id of ['#f-company', '#f-email', '#f-question']) {
    await page.keyboard.press('Tab');
    await expect(page.locator(id)).toBeFocused();
  }
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Request a briefing call' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('.form-status')).toHaveText('Please complete every field.');
});
