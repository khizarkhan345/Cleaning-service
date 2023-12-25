describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a logo on the page", () => {
    cy.findAllByText("CLEANING WITH LOVE").eq(0).should("exist");
  });

  it("Should navigate to a different page when click on Book Now", () => {
    cy.findAllByText("Book Now").eq(0).click();
    cy.url().should("include", "/booknow");

    cy.go("back");
  });

  it("Should navigate to a different page when click on Home", () => {
    cy.findAllByText("Home").eq(0).click();
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to a FAQ page when click on FAQs Link", () => {
    cy.findAllByText("FAQs").eq(0).click();
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to About Us page when click on About Us Link", () => {
    cy.findAllByText("FAQs").eq(0).click();
    cy.url().should("include", "/");

    cy.go("back");
  });
});
