import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/asana-loginpage';

test.beforeEach(async ({ page }) => {
    await page.goto('https://app.asana.com/');
    await page.waitForURL('https://app.asana.com/-/login');
})

test.describe('Verify login page', () => {

    test('Test log in functionality with valid credentials', async ({ page }) => {
        const validCredentials = ['ben+pose@workwithloop.com', 'Password123'];
        const loginPage = new LoginPage(page);

        await loginPage.enterUser(validCredentials[0]);
        await loginPage.clickContinueButton();
        await loginPage.enterPassword(validCredentials[1]);
        await loginPage.clickloginButton();

        // Expects page to have Inbox and My Tasks after logging in
        await expect(page.getByText('Inbox')).toBeVisible();
        await expect(page.getByRole('region', { name: 'My tasks' })).toBeVisible();

        // Expects page to have User Settings after logging in
        await expect(page.getByLabel('User Settings')).toBeVisible();

        // Log Out
        await loginPage.clickUserSettings();
        await page.getByText('Log out').click();
    })
})