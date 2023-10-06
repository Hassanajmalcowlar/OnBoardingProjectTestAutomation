import {LoginPage} from "../PagesObjects/LoginPage"
export default function verifyLoginWithMissisingCredentials() {
  const login_page  = new LoginPage()
  
  login_page.clickLoginButton()
  login_page.getRequiredMessage()
  cy.verifyUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  login_page.enterUserName("Admin")
  login_page.clickLoginButton()
  login_page.getRequiredMessage()
  cy.verifyUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
  
}