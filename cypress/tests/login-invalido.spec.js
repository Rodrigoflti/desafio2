/// <reference types="cypress" />

describe('Login com dados inválidos', () => {
  it('Login com credenciais inválidas ', () => {
    cy.invalido()
    cy.contains('email or password is invalid').should('be.visible')
  })
});