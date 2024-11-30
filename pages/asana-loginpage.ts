//asana-loginpage.js
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByLabel('Email address');
        this.passwordField = page.getByLabel('Password', { name: 'p', exact: true });
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.loginButton = page.getByRole('button', { name: 'Log in', exact: true });
        this.userSettingsButton = page.getByLabel('User Settings');
        this.logoutButton = page.getByLabel('Log out');
    }

    async fillUsername(username) {
        const usernameField = this.usernameField;
        await usernameField.fill(username);
    }

    async fillPassword(password) {
        const passwordField = this.passwordField;
        await passwordField.fill(password);
    }

    async enterUser(username) {
        await this.fillUsername(username);
    }

    async clickContinueButton() {
        const continueButton = this.continueButton;
        await continueButton.click();
    }

    async enterPassword(password) {
        await this.fillPassword(password);
    }

    async clickloginButton() {
        const loginButton = this.loginButton;
        await loginButton.click();
    }

    async clickUserSettings() {
        const userSettingsButton = this.userSettingsButton;
        await userSettingsButton.click();
    }

    async clickLogOutButton() {
        const logoutButton = this.logoutButton;
        await logoutButton.click();
    }
}