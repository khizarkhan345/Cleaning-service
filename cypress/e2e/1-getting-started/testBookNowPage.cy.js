describe("Book Now", () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
    cy.visit("http://localhost:3000/booknow");
  });

  it("has a first text as p on the top of page", () => {
    cy.findByText("1. Cleaning Information").should("exist");
  });

  it("should render correct no of bedrooms when plus and minus buttons are clicked", () => {
    cy.findAllByAltText("plus").eq(0).should("exist").click();
    cy.findAllByAltText("plus").eq(0).should("exist").click();
    cy.get("p").eq(1).should("exist").contains("2");

    cy.findAllByAltText("minus").eq(0).should("exist").click();
    cy.get("p").eq(1).should("exist").contains("1");
  });

  it("should render correct no of bathrooms when plus and minus buttons are clicked", () => {
    cy.findAllByAltText("plus").eq(1).should("exist").click();
    cy.findAllByAltText("plus").eq(1).should("exist").click();
    cy.get("p").eq(3).should("exist").contains("2");

    cy.findAllByAltText("minus").eq(1).should("exist").click();
    cy.get("p").eq(3).should("exist").contains("1");
  });

  it("should render correct no of livingrooms when plus and minus buttons are clicked", () => {
    cy.findAllByAltText("plus").eq(2).should("exist").click();
    cy.findAllByAltText("plus").eq(2).should("exist").click();
    cy.get("p").eq(5).should("exist").contains("2");

    cy.findAllByAltText("minus").eq(2).should("exist").click();
    cy.get("p").eq(5).should("exist").contains("1");
  });

  it("should render correct no of kitchens when plus and minus buttons are clicked", () => {
    cy.findAllByAltText("plus").eq(3).should("exist").click();
    cy.findAllByAltText("plus").eq(3).should("exist").click();
    cy.get("p").eq(7).should("exist").contains("2");

    cy.findAllByAltText("minus").eq(3).should("exist").click();
    cy.get("p").eq(7).should("exist").contains("1");
  });

  it("should have a date input", () => {
    cy.get('[placeholder="MM/DD/YYYY"]').should("exist").type("05/01/2023");

    cy.get('[placeholder="MM/DD/YYYY"]').should("have.value", "05/01/2023");
  });

  it("should have a time input", () => {
    cy.get('[placeholder="hh:mm aa"]').should("exist").type("04:15 PM");

    cy.get('[placeholder="hh:mm aa"]').should("have.value", "04:15 PM");
  });

  it("Should render the correct price", () => {
    cy.findByText("Estimated Price:").should("exist");

    cy.findAllByAltText("plus").eq(1).should("exist").click();
    cy.findAllByAltText("plus").eq(1).should("exist").click();

    cy.get("h3").contains("$80");
  });

  it("Should navigate to other personal information when next is clicked", () => {
    cy.findAllByAltText("plus").eq(0).should("exist").click();
    cy.findAllByAltText("plus").eq(0).should("exist").click();

    cy.findByText("Next").should("exist").click();

    cy.findByText("2. Personal Information").should("exist");

    cy.get("input").eq(0).should("exist").type("Khizar");
    //cy.wait(1000);
    cy.get("input").eq(1).should("exist").type("Khan");
    cy.get("input").eq(2).should("exist").type("Khizar@test.com");
    cy.get("input").eq(3).should("exist").type("123 main building");
    cy.get("input").eq(4).should("exist").type("Brooklyn");
    //cy.get("input").eq(5).should("exist").click().select("VA");

    //cy.findByTestId("ArrowDropDownIcon").should("exist").click();
    cy.get("input").eq(6).should("exist").type(12345);
    cy.get("input").eq(7).should("exist").type(5712228888);

    cy.findByText("Next").click();

    cy.findByText("3. Review & Book").should("exist");

    cy.findByText("Personal Information").should("exist");
    cy.findByText("First Name").should("exist");
    cy.findByText("Khizar").should("exist");
    cy.findByText("Last Name").should("exist");
    cy.findByText("Khan").should("exist");
    cy.findAllByText("Email").eq(0).should("exist");
    cy.findByText("Khizar@test.com").should("exist");
    cy.findByText("Phone No").should("exist");
    cy.findByText("5712228888").should("exist");
    cy.findByText("Address").should("exist");
    cy.findByText("123 main building Brooklyn 12345").should("exist");
    cy.findByText("Cleaning Information").should("exist");
    cy.findByText("2 bedroom/bedrooms to be cleaned").should("exist");
    cy.findByText("Date and Time").should("exist");
    cy.findByText("04/01/2023 12:04:PM").should("exist");
    cy.findByText("Total Amount:").should("exist");
    cy.findByText("$80").should("exist");

    cy.findByText("Previous").should("exist");
    cy.findByText("Submit").should("exist");
  });
});
