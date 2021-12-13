declare namespace Cypress {
    interface Chainable {
  
      /**
       * @example cy.loginValido()
       */
       loginValido(): void
  
      /**
       * @example cy.token()
       */
       token(): void
      
      /**
       * @example cy.invalido()
       */
       invalido(): void


       /**
       * @example cy.tokenInvalido()
       */
       tokenInvalido(): void

       
       /**
       * @example cy.semDados()
       */
        semDados(): void

       /**
       * @example cy.semFeed()
       */
        semFeed(): void

        
  
    }
  }