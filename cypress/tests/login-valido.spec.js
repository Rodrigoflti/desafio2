/// <reference types="cypress" />

describe('Logins validos sem artigos no feed', () => {
  it('Login valido sem artigos no feed', () => {
    cy.semFeed()
    cy.contains('No articles are here... yet.').should('be.visible')
  })
})
