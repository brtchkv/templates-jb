/// <reference types="cypress" />
context('Dashboard UI', () => {
    it('Does open profile with valid user', () => {
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
                cy.visit('/profile')
                cy.location('pathname').should('equal', '/profile')
            })
    })

    it('Does not open profile with invalid user', () => {
        cy.visit('/profile');
        cy.location('pathname').should('equal', '/login');
    })

    it('Does show success dialog on correct file upload', () => {
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
                cy.visit('/profile');
                cy.get('[type="file"]').attachFile('fls-data.csv');
                cy.get('.p-fileupload-choose-selected').click();
                cy.server({ enable: false });
                cy.get('.p-toast-summary').contains("Success");
            })
    })

    it('Does show error dialog on incorrect file upload', () => {
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
                cy.visit('/profile');
                cy.server({ method:'POST' });
                cy.get('[type="file"]').attachFile('example.json');
                cy.get('.p-fileupload-choose-selected').click();
                cy.server({ enable: false });
                cy.get('.p-toast-summary').contains("Error");
            })
    })
})