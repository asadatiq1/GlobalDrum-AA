class CommunityDetail {
  // Xpaths:
  join_community_button =
    "div[class='community-profile-button'] button[class='btn--large btn--large-default']";
  back_arrow = ".menu-icon";
  // Methods:
  verify_page() {
    cy.get(this.join_community_button).should("have.text", "Join Community");
  }
  click_back_arrow() {
    cy.get(this.back_arrow).click();
    cy.wait(4000);
  }
}

export default CommunityDetail;
