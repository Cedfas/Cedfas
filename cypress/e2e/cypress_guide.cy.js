describe('Navigating Cypress Documentation', { testIsolation: false}, () => {
    it('Opening Cypress Guies', () => {
      cy.visit('https://docs.cypress.io/guides')
      cy.title().should('eq', 'Cypress Documentation')
    }) 
      
    it('Opening API Link', () => {
      cy.get('[href="/api/table-of-contents"]').click({ force: true })
      cy.contains('Table of Contents')
      cy.title().should('eq', 'Table of Contents | Cypress Documentation')
      cy.get('.theme-edit-this-page').scrollIntoView().should('be.visible')
    })
  
  })