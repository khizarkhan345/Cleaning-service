describe("FAQs", () => {
  beforeEach(() => {
    cy.viewport(1200, 850);
    cy.visit("http://localhost:3000/faq");
  });

  it("has an h1 heading in the page", () => {
    cy.get("h1").should("exist");
  });

  it("has a first question as paragraph in the page", () => {
    cy.findByText(/How often should i schedule/i).should("exist");
  });

  it("has a second question as paragraph in the page", () => {
    cy.findByText(/What tasks are included/i).should("exist");
  });

  it("has a third question as a paragraph in the page", () => {
    cy.findByText(/Do i need to provide/i).should("exist");
  });

  it("has a fourth question as a paragraph in the page", () => {
    cy.findByText(/Can i customise the cleaning/i).should("exist");
  });

  it("has a fifth question as a paragraph in the page", () => {
    cy.findByText(/How do i pay for/i).should("exist");
  });

  it("Should render the first answer when arrow is clicked", () => {
    cy.findByText(/It depends on your personal preferences and needs./i).should(
      "not.exist"
    );

    cy.findByRole("button", { name: "Arrow 1" }).should("exist").click();

    cy.findByText(/It depends on your personal preferences and needs./i).should(
      "exist"
    );
    cy.findByRole("button", { name: "Arrow 1" }).should("exist").click();
  });

  it("Should render the second answer when arrow is clicked", () => {
    cy.findByText(/A typical house cleaning service includes/i).should(
      "not.exist"
    );

    cy.findByRole("button", { name: "Arrow 2" }).should("exist").click();

    cy.findByText(/A typical house cleaning service includes/i).should("exist");

    cy.findByRole("button", { name: "Arrow 2" }).should("exist").click();
  });

  it("Should render the third answer when arrow is clicked", () => {
    cy.findByText(/It depends on the service you choose./i).should("not.exist");

    cy.findByRole("button", { name: "Arrow 3" }).should("exist").click();

    cy.findByText(/It depends on the service you choose./i).should("exist");

    cy.findByRole("button", { name: "Arrow 3" }).should("exist").click();
  });

  it("Should render the fourth answer when arrow is clicked", () => {
    cy.findByText(
      /Yes, we will allow you to customise the cleaning tasks/i
    ).should("not.exist");

    cy.findByRole("button", { name: "Arrow 4" }).should("exist").click();

    cy.findByText(
      /Yes, we will allow you to customise the cleaning tasks/i
    ).should("exist");

    cy.findByRole("button", { name: "Arrow 4" }).should("exist").click();
  });

  it("Should render the fifth answer when arrow is clicked", () => {
    cy.findByText(/We offer online payment options/i).should("not.exist");

    cy.findByRole("button", { name: "Arrow 5" }).should("exist").click();

    cy.findByText(/We offer online payment options/i).should("exist");

    cy.findByRole("button", { name: "Arrow 5" }).should("exist").click();
  });
});
