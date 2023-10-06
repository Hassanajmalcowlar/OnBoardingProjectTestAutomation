import {LoginPage} from "../PagesObjects/LoginPage"
export default function verifyLoginWithIncorrectCredentials() {
  const login_page  = new LoginPage()
  login_page.enterUserName("aaaaaa");
  login_page.enterPassword("asdfdsdf")
  login_page.clickLoginButton()
  login_page.verifyErrorMessage('Invalid credentials')
  cy.verifyUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
}