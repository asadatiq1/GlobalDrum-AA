class Search {
  // Xpaths:
  search_page_all = "li[id='hoverEffect-0'] button[class='tab-btn']";
  input_search = "input[placeholder='Search..']";
  searched_community = ".community-name";
  search_page_communities = "li[id='hoverEffect-1'] button[class='tab-btn']";
  join_community = ".circle-btn-action.circle-btn-action--add";
  community=".community-inner-content";
  // Methods:
  verify_search_page_all() {
    cy.get(this.search_page_all).should("have.text", "All");
  }
  verify_community_search() {
    cy.get(this.input_search).type("big");
  }
  verify_searched_community() {
    cy.wait(5000);
    cy.get(this.searched_community).should("have.text", "Big Bang Theory");
  }
  click_search_page_communities() {
    cy.get(this.search_page_communities).click();
  }
  click_join_community() {
    cy.get(this.join_community).click();
    cy.wait(2000);
  }
  click_searched_communnity(){
    cy.get(this.community).click();
    cy.wait(8000);
  }
}

export default Search;
