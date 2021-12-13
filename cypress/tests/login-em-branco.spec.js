// <reference types="cypress" />

describe('Login em Branco', () => {
  it('Login com dados em branco', () => {
    cy.semDados()
    cy.contains("email can't be blank").should('be.visible')
  })
})
