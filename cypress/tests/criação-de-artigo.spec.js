/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
// HOOK - Trechos que devem ser executados antes ou depois do teste
  beforeEach(() => {
    cy.loginValido()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarOFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarSeOArtigoFoiCriado()
  })
})
