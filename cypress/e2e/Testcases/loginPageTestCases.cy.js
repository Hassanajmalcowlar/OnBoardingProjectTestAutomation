import verifyLoginWithCorrectCredentials from "../../support/TestCases/verifyLogin.js";
import verifyLoginWithIncorrectCredentials from "../../support/TestCases/verifyLoginWithIncorrectCredentials.js";
import verifyLoginWithMissisingCredentials from "../../support/TestCases/VerifyLoginWithMissingCredentials.js";
describe("Test Case Automated: Verfiy login functionality works correctly ", () => {
  it("Verify login with correct credentials", () => {
    verifyLoginWithCorrectCredentials();
  });

  it("verify user should not be able to login with incorrect credentials", () => {
    verifyLoginWithIncorrectCredentials();
  });

  it("Verify user should not be able to login with missing credentials", () => {
    verifyLoginWithMissisingCredentials();
  });
});
