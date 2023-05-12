import CommunityDetail from "../PageObjects/CommunityDetail";
import CommunityListing from "../PageObjects/CommuntyListing";
import discover from "../PageObjects/Discover";
import PostDetail from "../PageObjects/PostDetail";
import Search from "../PageObjects/Search";
import SideMenu from "../PageObjects/SideMenu";

describe("Open Application Flows", () => {
  // PageObjects
  const ds = new discover();
  const pd = new PostDetail();
  const cl = new CommunityListing();
  const sm = new SideMenu();
  const cd = new CommunityDetail();
  const ss = new Search();
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

  it("Verify click on explore communities button", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.verify_page();
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

  // Test Cases SideMenu
  it("Verify Guest User Side Menu", () => {
    ds.swipeup_SplashScreen();
    ds.click_side_menu();
    sm.verify_guest_user_text();
  });

  it("Verify click on communities button on Side menu", () => {
    ds.swipeup_SplashScreen();
    ds.click_side_menu();
    sm.click_communities();
    cl.verify_page();
  });

  it("Verify click on Login/Signup button", () => {
    ds.swipeup_SplashScreen();
    ds.click_side_menu();
    sm.click_login_signup_button();
    sm.verify_signup_modal_sidemenu();
  });

  // Test Cases Communty Listing
  it("Verify click on join community button", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_join_communities();
    ds.verify_signup_modal_Feed();
  });

  it("Verify click on category filter", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_category_filter();
    cl.verify_category_menu();
  });

  it("Verify click on community", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_community();
    cd.verify_page();
  });

  it("Verify click on search", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_search_icon();
    ss.verify_search_page_all();
  });

  // Test Cases Search
  it("Verify Search community", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_search_icon();
    ss.verify_community_search();
    ss.verify_searched_community();
  });

  it("Verify Join community from search", () => {
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_search_icon();
    ss.verify_community_search();
    ss.click_search_page_communities();
    ss.verify_searched_community();
    ss.click_join_community();
    ds.verify_signup_modal_Feed();
  });

  it("Verify open community detail from search",()=>{
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_search_icon();
    ss.verify_community_search();
    ss.click_searched_communnity();
    cd.verify_page();
    cd.click_back_arrow();
    ss.verify_search_page_all();
  })

  // Test Cases Community Detail
  it("Veify open community redirect about",()=>{
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_community();
    cd.verify_open_about_submenu();
  })

  it.only("Verify Join community on community detail",()=>{
    ds.swipeup_SplashScreen();
    ds.click_explore_communities();
    cl.click_community();
    cd.click_join_community_button();
    ds.verify_signup_modal_Feed();
  })
});
