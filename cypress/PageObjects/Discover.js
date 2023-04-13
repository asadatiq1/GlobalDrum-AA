class discover {
  // Xpaths:
  header = "li[class='single-tab single-tab--active'] button[class='tab-btn']";
  // Methods:
  verify_page(){
    cy.get(this.header).should('have.text','Discover');
  }
}

export default discover;
