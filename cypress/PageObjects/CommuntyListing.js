class CommunityListing {
  // Xpaths:
  page = ".header-page-name";
  search_icon = "img[src='/assets/header-search.f3af0af4.svg']";
  category_filter = ".rc-select-selection-overflow";
  category_menu = "div[class='header-menu-dropdown'] h2";
  join_communities =
    "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)";
  community = "div[id='post-0'] div div[class='profile-community-content']";
  // Methods:
  verify_page() {
    cy.get(this.page).should("have.text", "Communities");
  }
  click_search_icon() {
    cy.get(this.search_icon).click();
    cy.wait(5000);
  }
  click_category_filter() {
    cy.wait(8000);
    cy.get(this.category_filter).click();
  }
  click_join_communities() {
    cy.get(this.join_communities).click();
  }
  verify_category_menu() {
    cy.get(this.category_menu).should("have.text", "Categories");
  }
  click_community() {
    cy.get(this.community).click();
    cy.wait(8000);
  }
}
export default CommunityListing;
