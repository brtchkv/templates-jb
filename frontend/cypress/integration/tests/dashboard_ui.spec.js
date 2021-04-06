/// <reference types="cypress" />
context('Dashboard UI', () => {
    it('Does switch dates', () => {
        cy.request('POST', '/api/auth/login', {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }).its('body')
            .then((user) => {
                cy.visit('/', {
                    onBeforeLoad(win) {
                        win.localStorage.setItem('user', JSON.stringify(user))
                    },
                });
                cy.location('pathname').should('equal', '/');
                cy.get('#prev-date').click();
                cy.get('#next-date').click();
            });
    })

    it('Does have all select ranges', () => {
        cy.request('POST', '/api/auth/login', {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }).its('body')
            .then((user) => {
                cy.visit('/', {
                    onBeforeLoad(win) {
                        win.localStorage.setItem('user', JSON.stringify(user))
                    },
                });
                cy.location('pathname').should('equal', '/');
                cy.get('.date-filter').find("select option").then(options => {
                    const actual = [...options].map(o => o.value)
                    expect(actual).to.deep.eq(['day', 'week', 'month', 'quarter', 'year'])
                })
            })
    })
})