class CommunityDetail {
  // Xpaths:
  join_community_button =
    "div[class='community-profile-button'] button[class='btn--large btn--large-default']";
  back_arrow = ".menu-icon";
  about_sub_menu="li[id='hoverEffect-1'] button[class='tab-btn']";
  verify_about="div[class='gallery-title-link'] h2[class='SC-about-title']";
  post_sub_menu="li[id='hoverEffect-0'] button[class='tab-btn']";
  Posts="#communityPosts-3";
  // Methods:
  verify_page() {
    cy.get(this.join_community_button).should("have.text", "Join Community");
  }
  click_back_arrow() {
    cy.get(this.back_arrow).click();
    cy.wait(4000);
  }
  click_join_community_button(){
    cy.get(this.join_community_button).click();
  }
  verify_open_about_submenu(){
    // cy.get(this.verify_about).should("have.text","Gallery");
    cy.url().should('include', '/about');
  }
  click_post_sub_menu(){
    cy.get(this.post_sub_menu).click();
  }
  verify_four_post(){
    cy.wait(7000);
    cy.get(this.Posts).scrollIntoView();
  }
}

export default CommunityDetail;
