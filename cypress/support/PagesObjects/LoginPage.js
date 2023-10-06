export class LoginPage {
  //locators
  #userNameInputlLoc = "[name='username']";
  #passwordInputLoc = "[name='password']";
  #loginButtonLoc = "[type='submit']";
  #errorAlertLoc = '.oxd-alert-content > .oxd-text'
  #requiredMessageLoc = 'Required'
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
  verifyErrorMessage = (text)=>{
    cy.get(this.#errorAlertLoc).invoke("text").should("eql",text)
  }
  getRequiredMessage = ()=>{
    cy.contains(this.#requiredMessageLoc)
  }
}
