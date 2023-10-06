import {LoginPage} from "../PagesObjects/LoginPage"
export default function verifyLoginWithCorrectCredentials() {
  const login_page  = new LoginPage()
  login_page.enterUserName("Admin");
  login_page.enterPassword("admin123")
  login_page.clickLoginButton()
  cy.verifyUrl("dashboard")
  
}
