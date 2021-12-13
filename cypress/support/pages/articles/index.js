
const el = require('./elements').ELEMENTS
const articleName = 'Artigos sobre Cypress' + new Date().getTime()

class Articles {
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo sobre Cypress ')
    cy.get(el.inputBody).type('Corpo do artigo sobre Cypress e testes')
    cy.get(el.inputTag).type('cypress')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeOArtigoFoiCriado () {
    cy.contains(articleName).should('be.visible')
  }
}

export default new Articles()
