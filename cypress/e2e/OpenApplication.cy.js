import discover from "../PageObjects/Discover";

describe("template spec", () => {
  const ds = new discover();
  beforeEach(() => {
    cy.clearCookies()
    cy.viewport(375,812)
    cy.visit("https://www.aa-stage.global-drum.com");
  });
  it("Landing-Guest-User", () => {
    ds.verify_page();
  });
 
});
