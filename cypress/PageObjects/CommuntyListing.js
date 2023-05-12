class CommunityListing {
  // Xpaths:
  page = ".header-page-name";
  // Methods:
  verify_page(){
    cy.get(this.page).should("have.text","Communities");
  }
}
export default CommunityListing;
