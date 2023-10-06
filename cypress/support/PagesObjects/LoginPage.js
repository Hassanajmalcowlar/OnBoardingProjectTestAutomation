export class LoginPage {
  //locators
  #userNameInputlLoc = "[name='username']";
  #passwordInputLoc = "[name='password']";
  #loginButtonLoc = "[type='submit']";
  //Actions
  enterUserName = (userName) => {
    cy.get(this.#userNameInputlLoc).type(userName);
  };
  enterPassword = (password) => {
    cy.get(this.#passwordInputLoc).type(password);
  };
  clickLoginButton = () => {
    cy.get(this.#loginButtonLoc).click();
  };
}
