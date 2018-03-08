describe("Happy flow", () => {
  it("Add a friend and then an expense", () => {
    cy.visit("/");

    cy.get(".btn-primary").click();

    cy
      .get("#navigation")
      .contains("Friends")
      .click()
      .url()
      .should("include", "/friends");

    cy.get("form input").type("Marie");
    cy.get("form").submit();

    cy.get("ul li.list-group-item:last").should("contain", "Marie");

    cy
      .get("#navigation")
      .contains("Expenses")
      .click()
      .url()
      .should("include", "/expenses");

    cy.get("form input[name=reason]").type("Electricity bill");
    cy.get("form input[name=amount]").type("145.67");
    cy
      .get("form input[name=payer] + label")
      .contains("Marie")
      .click();
    cy.get("form input[name=participant]").each($el => cy.wrap($el).click());
    cy.get("form").submit();

    cy.get("ul.list-unstyled li:last").should("contain", "145.67€");

    cy
      .get("#navigation")
      .contains("Balances")
      .click()
      .url()
      .should("include", "/balances");

    cy.get("p.lead:last").should("contain", "Marie's Balance");
  });
});
