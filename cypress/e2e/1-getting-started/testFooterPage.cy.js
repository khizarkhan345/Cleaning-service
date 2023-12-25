describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should navigate to a different page when click on Book Now", () => {
    cy.findAllByText("Book Now").eq(3).click();
    cy.url().should("include", "/booknow");

    cy.go("back");

    cy.findAllByText("Home").eq(1).click();
    cy.url().should("include", "/");

    cy.go("back");

    // cy.findAllByText("About Us").eq(1).click();
    // cy.url().should("include", "/aboutus");

    // Use cy.get() to select the Grid component
  });

  it("Should navigate to a different page when click on Home", () => {
    cy.findAllByText("Home").eq(1).click();
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to a FAQ page when click on FAQs Link", () => {
    cy.findAllByText("FAQs").eq(1).click();
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to About Us page when click on About Us Link", () => {
    cy.findAllByText("FAQs").eq(1).click();
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to Twitter account when click on the Twitter link", () => {
    cy.findByText("Twitter").should("exist");
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to Instagram account when click on the Instagram link", () => {
    cy.findByText("Instagram").should("exist");
    cy.url().should("include", "/");

    cy.go("back");
  });

  it("Should navigate to Email account when click on the Email link", () => {
    cy.findByText("Email").should("exist");
    cy.url().should("include", "/");

    cy.go("back");
  });
});
