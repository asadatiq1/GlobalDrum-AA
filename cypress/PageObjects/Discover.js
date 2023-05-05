class discover {
  // Xpaths:
  splash_screen ="div[class='inner-swipe-up-wrapper'] h6";
  header = "li[class='single-tab single-tab--active'] button[class='tab-btn']";
  // Methods:
  verify_splashScreen(){
    cy.get(this.splash_screen).should('have.text','Swipe up to Start');
  }
  verify_page(){
    cy.get(this.header).should('have.text','Discover');
  }
  swipeup_SplashScreen(){
    cy.get(this.splash_screen)
   .trigger('pointerdown', { which: 1 })
   .trigger('pointermove', 'up')
   .trigger('pointerup', { force: true })
  }
}

export default discover;
