import discover from "../PageObjects/Discover";

describe("Open Application Flows", () => {
  // PageObjects
  const ds = new discover();
  // Runs
  beforeEach(() => {
    cy.clearCookies()
    cy.viewport(375,812)
    cy.visit("https://www.aa-stage.global-drum.com");
  });
  // Test Cases
  it("Landing-Guest-User", () => {
    ds.verify_splashScreen();
    ds.swipeup_SplashScreen();
    ds.verify_page();
  });
 
});
