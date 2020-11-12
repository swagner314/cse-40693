describe('auth.login', () => {

    beforeEach(() => {
        cy.visit('localhost:8885/#/puzzle2')
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
    })

    it("Denies incorrect input", () => {
        cy.get("#submit2").click({force: true});
        cy.hash().should("eq", "#/puzzle2");
    })

    it("accepts correct input and redirects", () => {
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Watermelon-down').click();
        cy.get('#Apple-up').click();
        cy.get('#Apple-up').click();
        cy.get('#Apple-up').click();
        cy.get('#Banana-up').click();
        cy.get('#Banana-up').click();
        cy.get('#Banana-up').click();
        cy.get('#Banana-up').click();
        cy.get('#Banana-up').click();
        cy.get('#Blueberry-up').click();
        cy.get('#Blueberry-up').click();
        cy.get('#Blueberry-up').click();
        cy.get('#Cherry-up').click();
        cy.get('#Cherry-up').click();
        cy.get('#Cherry-up').click();
        cy.get('#Mango-up').click();
        cy.get("#submit2").click({force: true});
        cy.hash().should("eq", "#/snake");
    })
})