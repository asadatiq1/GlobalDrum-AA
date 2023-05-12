import CommunityListing from "../PageObjects/CommuntyListing";
import discover from "../PageObjects/Discover";
import PostDetail from "../PageObjects/PostDetail";
import SideMenu from "../PageObjects/SideMenu";

describe("Open Application Flows", () => {
  // PageObjects
  const ds = new discover();
  const pd = new PostDetail();
  const cl = new CommunityListing();
  const sm = new SideMenu();
  // Runs
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport(375, 812);
    cy.visit("https://www.aa-stage.global-drum.com");
  });
  // Test Cases Dicover
  it("Landing Guest User", () => {
    ds.verify_splashScreen();
    ds.swipeup_SplashScreen();
    ds.verify_page();
  });

  it("Verify click on My Feed", () => {
    ds.swipeup_SplashScreen();
    cy.wait(5000);
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

  it("Verify 10 posts", () => {
    ds.swipeup_SplashScreen();
    ds.scroll_bottom_page();
    ds.verify_signup_modal_post();
  });

  // Test Cases Post Detail
  it("Verify click on Like button on Post Detail", () => {
    ds.swipeup_SplashScreen();
    ds.click_postcard();
    pd.click_like();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on disLike button on Post Detail", () => {
    ds.swipeup_SplashScreen();
    ds.click_postcard();
    pd.click_dislike();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on bookmark button on Post Detail", () => {
    ds.swipeup_SplashScreen();
    ds.click_postcard();
    pd.click_bookmark();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on explore communities button", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.verify_page();
  });

  it("Verify click on communities button on Side menu", () => {
    ds.swipeup_SplashScreen();
    ds.click_side_menu();
    sm.click_communities();
    cl.verify_page();
  });
});
