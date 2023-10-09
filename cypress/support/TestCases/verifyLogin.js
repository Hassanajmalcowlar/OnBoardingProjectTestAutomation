import { LoginPage } from "../PagesObjects/LoginPage";
export default function verifyLoginWithCorrectCredentials() {
  const login_page = new LoginPage();
  login_page.login("Admin", "admin123");
  cy.verifyUrl("dashboard");
}
