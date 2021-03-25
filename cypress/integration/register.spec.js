describe('auth.login', () => {
    beforeEach(() => {
        cy.visit('localhost:8885/#/auth/register')
    })

    it("greets with Create Account", () => {
        cy.contains("#form-title", "Create Account");
    })

    it("links to /#/auth/login", () => {
        cy.contains('Already have an account? Log in here.').should("have.attr", "ui-sref", "auth.login");
    })

    it("requires username", () => {
        cy.get("[name=\"email\"]").type("test@test.com{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
        cy.get("form").contains("Create Account").should("be.disabled");
    })

    it("requires email", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
        cy.get("form").contains("Create Account").should("be.disabled");
    })

    it("requires password", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"email\"]").type("test@test.com{enter}");
        cy.get("form").contains("Create Account").should("be.disabled");
    })

    it("requires valid email", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
        cy.get("[name=\"email\"]").type("invalidemail{enter}");
        cy.get("form").contains("Create Account").should("be.disabled");
    })

    it("prevents duplicate user registration", () => {
        cy.get("[name=\"username\"]").type("test{enter}");
        cy.get("[name=\"password\"]").type("test{enter}");
        cy.get("[name=\"email\"]").type("test@test.com{enter}");
        cy.get(".error-messages").should("contain", "Could not create account");
    })
})