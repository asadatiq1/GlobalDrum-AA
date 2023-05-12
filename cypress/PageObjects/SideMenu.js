class SideMenu{
    // Xpaths:
    communities="body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)";
    // Methods:
    click_communities(){
        cy.get(this.communities).click();
    }
}

export default SideMenu;