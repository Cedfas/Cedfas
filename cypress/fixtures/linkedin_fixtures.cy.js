export default class LinkedInFixtures {
  
  // Page Objects:

  Googlefield = () => cy.get('#APjFqb')

  JrSolesName = () => cy.get('#ember42 > h1')

  // Actions:

  clickGoogleField = () => this.Googlefield().click().type('LinkedIn Jr Soles')
  
}
