import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
  async waitUnitPageLoaded() {
    await this.waitForElement("//h2[normalize-space(text())='Login']");
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }
  async inputUsername(username: string): Promise<void> {
    await this.fill("#username", username);
  }
  async inputPassword(password: string): Promise<void> {
    await this.fill("#password", password);
  }
}

//    async fill (selector: string, value: string): Promise<void> {
//         await this.page.locator(selector).fill(value);
//     }

//     async isVisible(selector: string): Promise<boolean> {
//         return this.page.locator(selector).isVisible();
//     }
//     async waitForElement(selector: string): Promise<void> {
//         await this.page.locator(selector).waitFor({ state: "visible" });
//     }
// }
//     {
