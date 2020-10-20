describe('auth.login', () => {
    beforeEach(() => {
        cy.visit('localhost:8885/#/auth/login')
    })

    it("greets with Sign in", () => {
        cy.contains("#form-title", "Log In");
    })

    it("links to /#/auth/register", () => {
        cy.contains('Don\'t have an account? Create one here.').should("have.attr", "ui-sref", "auth.register");
    })

    it("requires username", () => {
        cy.get("form").contains("Log In").should("be.disabled");
        //cy.get("form").contains("Log In").click();
        //cy.get(".error-messages").should("contain", "email con't be blank");    // looking for CSS class .error-message
    })

    it("requires password", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("form").contains("Log In").should("be.disabled");
    })

    it("requires valid username and password", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("wrongpassword{enter}");
        cy.get(".error-messages").should("contain", "Invalid username or password");
    })

    it("navigates to /#/puzzle on successful login", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
        cy.hash().should("eq", "#/puzzle2");
    })
})