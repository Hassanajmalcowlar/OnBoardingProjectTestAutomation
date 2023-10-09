import { LoginPage } from "../PagesObjects/LoginPage";
export default function verifyLoginWithMissisingCredentials() {
  const login_page = new LoginPage();
  cy.get(login_page.loginButtonLoc).click();
  cy.contains(login_page.requiredMessageLoc);
  cy.verifyUrl("login");
  cy.get(login_page.userNameInputLoc).type("Admin");
  cy.get(login_page.loginButtonLoc).click();
  cy.contains(login_page.requiredMessageLoc);
  cy.verifyUrl("login");
}
