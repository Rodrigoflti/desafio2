// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginValido', () => {
  cy.token().then(response => {
    console.log(response.body.user.token)

    window.localStorage.setItem('jwtToken', response.body.user.token)
  })
})

Cypress.Commands.add('token', () => {
  cy.request({
    url: 'https://api.realworld.io/api/users/login',
    method: 'Post',
    body: {
      user: {
        email: 'chapterv12345@mail.com',
        password: '12345'
      }
    }
  })
})

Cypress.Commands.add('invalido', () => {
  cy.visit('/login')
  cy.get('[placeholder=Email]').type('teste@teste.com')
  cy.get('[placeholder=Password]').type('123')
  cy.get('.btn').click()
})

Cypress.Commands.add('semDados', () => {
  cy.visit('/login')
  cy.get('[placeholder=Email]').type(' ')
  cy.get('[placeholder=Password]').type(' ')
  cy.get('.btn').click()
})

Cypress.Commands.add('semFeed', () => {
  cy.visit('/login')
  cy.get('[placeholder=Email]').type('testedados@gmail.com')
  cy.get('[placeholder=Password]').type('123456')
  cy.get('.btn').click()
})
