class discover {
  // Xpaths:
  splash_screen = ".splash-des";
  explore_communities = ".btn--large.btn--large-secondary";
  My_Feed = "li[id='hoverEffect-0'] button[class='tab-btn']";
  signup_modal = ".signUp-page-heading";
  bookmark_postcard =
    "div[id='dashboardListing-0'] div[class='community-card-footer community-card-footer--mobile'] img[class='UnFilled']";
  Guest_user_Profile_icon = ".border-radius-50";
  ten_post = "#dashboardListing-9";
  post_card = "div[id='dashboardListing-0'] div[class='SPS-inner-wrapper']";
  hamburger_icon=".menu-icon";
  // Methods:
  verify_splashScreen() {
    cy.get(this.splash_screen).should(
      "have.text",
      "Unlimited content from countless communities"
    );
  }
  verify_page() {
    cy.get(this.explore_communities).should("have.text", "Explore Communities");
  }
  swipeup_SplashScreen() {
    cy.get(".inner-swipe-up-wrapper")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 120, clientY: 300 })
      .trigger("mouseup", { force: true });
  }
  click_MyFeed() {
    cy.wait(5000);
    cy.get(this.My_Feed).click();
  }
  verify_signup_modal_Feed() {
    cy.get(this.signup_modal).should(
      "have.text",
      "Please sign up to access this feature"
    );
  }
  click_Bookmark_Postcard() {
    cy.get(this.bookmark_postcard).click();
  }
  click_guest_user_icon() {
    cy.get(this.Guest_user_Profile_icon).click();
  }
  verify_signup_modal_guser_icon() {
    cy.get(this.signup_modal).should(
      "have.text",
      "The profile feature is only available for registered users, register today to set up your profile"
    );
  }
  verify_signup_modal_post() {
    cy.get(this.signup_modal).should(
      "have.text",
      "Please sign up to view more posts"
    );
  }
  scroll_bottom_page() {
    cy.wait(9000);
    cy.get(this.ten_post).scrollIntoView();
  }
  click_postcard() {
    cy.get(this.post_card).click();
  }
  click_explore_communities() {
    cy.get(this.explore_communities).click();
    cy.wait(5000);
  }
  click_side_menu(){
    cy.get(this.hamburger_icon).click();
  }
}

export default discover;
