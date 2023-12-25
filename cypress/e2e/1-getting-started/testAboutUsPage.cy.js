describe("About Us", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/aboutus");
  });

  it("has an h2 in the page", () => {
    cy.findAllByText("About Us").eq(1).should("exist");
  });

  it("has a p in the page", () => {
    cy.findByText(
      /Welcome to our Cleaning With Love cleaning service in Lorton, VA!/i
    ).should("exist");
  });

  it("has an image in the page", () => {
    cy.get("img").should("exist");
  });
});
