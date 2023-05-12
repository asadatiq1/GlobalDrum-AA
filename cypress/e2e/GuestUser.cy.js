import discover from "../PageObjects/Discover";

describe("Open Application Flows", () => {
  // PageObjects
  const ds = new discover();
  // Runs
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport(375, 812);
    cy.visit("https://www.aa-stage.global-drum.com");
  });
  // Test Cases
  it("Landing Guest User", () => {
    ds.verify_splashScreen();
    ds.swipeup_SplashScreen();
    ds.verify_page();
  });

  it("Verify click on My Feed", () => {
    ds.swipeup_SplashScreen();
    ds.click_MyFeed();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on Bookmark Postcard", () => {
    ds.swipeup_SplashScreen();
    ds.click_Bookmark_Postcard();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on Guest user icon", () => {
    ds.swipeup_SplashScreen();
    ds.click_guest_user_icon();
    ds.verify_signup_modal_guser_icon();
  });

  it("Verify 10 posts",()=>{
    ds.swipeup_SplashScreen();
    ds.scroll_bottom_page();
    ds.verify_signup_modal_Feed();
  })
});
