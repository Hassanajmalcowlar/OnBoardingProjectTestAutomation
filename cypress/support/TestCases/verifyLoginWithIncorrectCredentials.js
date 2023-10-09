import { LoginPage } from "../PagesObjects/LoginPage";
export default function verifyLoginWithIncorrectCredentials() {
  const login_page = new LoginPage();
  login_page.login("adminsss", "abc");
  cy.verifyErrorMessage(login_page.errorAlertLoc, "Invalid credentials");
  cy.verifyUrl("login");
}
