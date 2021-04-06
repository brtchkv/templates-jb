/// <reference types="cypress" />
import dayjs, {Dayjs} from "dayjs";

let user;

context('Network Requests', () => {

    it('Does login with valid credentials', () => {
        cy.request('POST', '/api/auth/login', {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        }).then((resp) => {
            user = resp.body;
            cy.request({
                url: '/api/auth/check',
                headers: {
                    'X-Authentication': user.token
                }
            }).its('body')
                .then((user) => {
                    expect(user).property('success').to.be.equal(true)
                })
        })
    })

    it('Does get filtered data with current date', () => {
        cy.visit('/', {
            onBeforeLoad(win) {
                win.localStorage.setItem('user', JSON.stringify(user))
            },
        })
        cy.request({
                method: 'POST',
                url: '/api/statistics',
                headers: {
                    'X-Authentication': user.token
                },
                qs: {
                    range: 'day',
                    date: dayjs().toISOString()
                }
            }
        ).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})
