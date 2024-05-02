export default class LinkedInFixtures {
  
  // Page Objects:

  Googlefield = () => cy.get('#APjFqb')

  // Actions:

  clickGoogleField = () => this.Googlefield().click().type('LinkedIn Jr Soles')
  
}
