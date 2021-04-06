/// <reference types="cypress" />
context('Login UI', () => {
    it('Does login with valid credentials', () => {
        cy.visit('/')
        cy.location('pathname').should('equal', '/login')

        // enter valid username and password
        cy.get('[name=username]').type(Cypress.env('username'))
        cy.get('[name=password]').type(Cypress.env('password'))
        cy.get('.login-form-header').find('.auth-btn').click()

        // confirm we have logged in successfully
        cy.location('pathname').should('equal', '/')
        // now we can log out
        cy.get('.fa-user-circle').click()
        cy.get('#popup_menu_profile').find( '.pi-sign-out').click()
        cy.location('pathname').should('equal', '/login')
    })

    it('Does not log in with invalid password', () => {
        cy.visit('/')
        cy.location('pathname').should('equal', '/login')

        // try logging in with invalid password
        cy.get('[name=username]').type('username')
        cy.get('[name=password]').type('wrong-password')
        cy.get('.login-form-header').find('.auth-btn').click()

        // still on /login page plus an error is displayed
        cy.location('pathname').should('equal', '/login')
        cy.get('.alert-danger').should('be.visible')
    })
})