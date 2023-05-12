class SideMenu {
  // Xpaths:
  communities =
    "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)";
  guest_user_text =
    "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)";
  signup_login = "body div div div div ul li span";
  signup_modal = ".signUp-page-heading";
  // Methods:
  click_communities() {
    cy.get(this.communities).click();
  }
  verify_guest_user_text() {
    cy.get(this.guest_user_text).should("have.text", "Guest User");
  }
  click_login_signup_button() {
    cy.get(this.signup_login).click();
  }
  verify_signup_modal_sidemenu(){
    cy.get(this.signup_modal).should("have.text","Get access to a wide range of content by logging in, or sign up if you do not have an account");
  }
}

export default SideMenu;
