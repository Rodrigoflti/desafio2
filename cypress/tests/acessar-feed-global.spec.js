// <reference types="cypress" />

describe('Acessar o feed global ', () => {
  it('Acessar o feed global após logado ', () => {
    cy.loginValido()
    cy.visit('/')
    cy.contains('Global Feed').click()
  })
})
