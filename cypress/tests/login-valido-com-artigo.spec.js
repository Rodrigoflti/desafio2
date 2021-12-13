// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Logins com artigo publicado', () => {
  it('Login valido com artigo publicado', () => {
    cy.loginValido()
    cy.visit('/')

    cy.contains('Read more...').should('be.visible')
  })
})
