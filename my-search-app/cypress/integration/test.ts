describe("testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
      })
    it("Load page check", () => {
        cy.url().should("eq", "http://localhost:3000/");
    });
    it("Check search", () => {
        cy.get("input[id=country-select-demo]").type("Norway")
        cy.should("have.value","Norway")
        cy.get("button[id=popupButton]").click({force: true})
        cy.get("div[id=simple-popover]")
        cy.should("contain", "Norway")
    });

    it("Check results", () => {
        cy.get("div[id=result_table]").should("contain", "Finland")
        cy.get("button[id=results]").click()
        cy.get("div[id=result_table]")
          .should("contain", "Israel")
    })


})