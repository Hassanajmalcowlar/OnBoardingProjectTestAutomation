export class LoginPage {
  //locators
  userNameInputLoc = "[name='username']";
  passwordInputLoc = "[name='password']";
  loginButtonLoc = "[type='submit']";
  errorAlertLoc = ".oxd-alert-content > .oxd-text";
  requiredMessageLoc = "Required";
  //Actions

  login = (userName, password) => {
    cy.get(this.userNameInputLoc).type(userName);
    cy.get(this.passwordInputLoc).type(password);
    cy.get(this.loginButtonLoc).click();
  };
}
