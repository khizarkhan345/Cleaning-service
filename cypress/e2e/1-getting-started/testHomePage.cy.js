context("Test the Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has h1 on the page", () => {
    cy.get("h1").should("exist");
  });

  it("has a paragraph on the top of the page", () => {
    cy.findByText(/Improve your mental health with our/i).should("exist");
  });

  it("has a button on the top of the page", () => {
    cy.findAllByRole("button").first().should("exist");
  });

  it("has an image on the top of the page", () => {
    cy.findAllByRole("img").first().should("exist");
  });

  it("has h2 in the page", () => {
    cy.get("h2").should("exist");
  });

  it("has an image in the middle of the page", () => {
    cy.findAllByRole("img").eq(1).should("exist");
  });

  it("has a text in the middile of the page", () => {
    cy.findAllByText(
      /Studies have shown that a clean and organized environment can have/i
    ).should("exist");
  });

  it("has a people in the middile of the page", () => {
    cy.findByAltText("People").should("exist");
  });

  it("has an h2 in the middle of the page", () => {
    cy.findByText("Experienced").should("exist");
  });

  it("has an h3 in the middle of the page", () => {
    cy.findByText("Cleaners").should("exist");
  });

  it("has a p in the middle of the page", () => {
    cy.findByText(
      /Our professional house cleaning team has the experience/i
    ).should("exist");
  });

  it("has a service image in the middile of the page", () => {
    cy.findByAltText("Service").should("exist");
  });

  it("has an h2 in the middle of the page", () => {
    cy.findByText("Great").should("exist");
  });

  it("has an h3 in the middle of the page", () => {
    cy.findByText("Service").should("exist");
  });

  it("has a p in the middle of the page", () => {
    cy.findByText(/Our top priority is providing excellent service/i).should(
      "exist"
    );
  });

  it("has a Cost image in the middile of the page", () => {
    cy.findByAltText("Cost").should("exist");
  });

  it("has an h2 in the middle of the page", () => {
    cy.findByText("Cost").should("exist");
  });

  it("has an h3 in the middle of the page", () => {
    cy.findByText("Effective").should("exist");
  });

  it("has a p in the middle of the page", () => {
    cy.findByText(/We offer competitive pricing and flexible/i).should("exist");
  });

  it("has a Cleaning person image in the middile of the page", () => {
    cy.findAllByAltText("Cleaning person").eq(1).should("exist");
  });

  it("has another h1 in the middile of the page", () => {
    cy.findByText("Cleaning With Love House Service").should("exist");
  });

  it("has a mark icon in the middile of the page", () => {
    cy.findAllByAltText("mark").eq(0).should("exist");
  });

  it("has a p in the middile of the page", () => {
    cy.findByText("All cleaning supplies covered").should("exist");
  });

  it("has a p in the middile of the page", () => {
    cy.findByText("Organization Service offered").should("exist");
  });

  it("has a p in the middile of the page", () => {
    cy.findByText("Professional cleaners").should("exist");
  });

  it("has a p in the middile of the page", () => {
    cy.findByText("Stress free").should("exist");
  });

  it("has a button in the middle of the page", () => {
    cy.findAllByRole("button").last().should("exist");
  });
});
