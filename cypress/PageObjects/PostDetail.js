class PostDetail {
  // Xpaths:
  like="img[src='/assets/like.72e355d8.svg']";
  dislike ="img[src='/assets/dislike.0a8269ff.svg']";
  bookmark=".left-side-reactions";
  // Methods:
  click_like(){
    cy.get(this.like).click();
  }
  click_dislike(){
    cy.get(this.dislike).click();
  }
  click_bookmark(){
    cy.get(this.bookmark).click();
  }
}

export default PostDetail;
