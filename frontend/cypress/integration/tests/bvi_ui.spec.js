/// <reference types="cypress" />
context('BVI UI', () => {
    it('Does open panel', () => {
        cy.visit('/login')
        cy.get('#prev-date').click();
        cy.get('#next-date').click();
    })

    it('Does close panel', () => {

    })

    it('Does change font size', () => {
        cy.request('POST', '/api/auth/login', {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }).its('body')
            .then((user) => {
                cy.visit('/', {
                    onBeforeLoad(win) {
                        win.localStorage.setItem('user', JSON.stringify(user))
                    },
                })
                cy.location('pathname').should('equal', '/')
                cy.get('#date-filter').find('option').eq(3).click();
                cy.get('#next-date').click();
                cy.get('#date-filter').get('select')
                    .select(['day', 'week', 'month', 'quarter', 'year'])
                    .invoke('val')
                    .should('deep.equal', ['day', 'week', 'month', 'quarter', 'year'])
            })
    })

    it('Does change theme color', () => {
        cy.request('POST', '/api/auth/login', {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }).its('body')
            .then((user) => {
                cy.visit('/', {
                    onBeforeLoad(win) {
                        win.localStorage.setItem('user', JSON.stringify(user))
                    },
                })
                cy.location('pathname').should('equal', '/')
                cy.get('#date-filter').find('option').eq(3).click();
                cy.get('#next-date').click();
                cy.get('#date-filter').get('select')
                    .select(['day', 'week', 'month', 'quarter', 'year'])
                    .invoke('val')
                    .should('deep.equal', ['day', 'week', 'month', 'quarter', 'year'])
            })
    })

    it('Does hide images', () => {

    })

    it('Does switch voice settings', () => {

    })
})