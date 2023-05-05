import discover from "../PageObjects/Discover";

describe("Guest User Flows", () => {
  // PageObjects
  const ds = new discover();
  // Runs
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport(375, 812);
    cy.visit("https://www.aa-stage.global-drum.com");
  });
  //   Test Cases
  it("Landing-Page", () => {
    ds.verify_page();
  });
  it ("")
});
