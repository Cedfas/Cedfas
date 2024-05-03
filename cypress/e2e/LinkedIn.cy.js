import LinkedInFixtures from '../fixtures/linkedin_fixtures.cy'

const LinkedIn = new LinkedInFixtures()

describe('Opening LinkedIn Profile', () => {
  it('Finding Profile Via Google', () => {
    cy.visit('https://www.google.com')
    LinkedIn.clickGoogleField()
    cy.get('#jZ2SBf > .wM6W7d > span').click()
    cy.contains('Glenn Soles Jr').click()
    cy.origin('https://www.linkedin.com', () => {
      cy.get('#public_profile_contextual-sign-in > div > section > button > icon > svg').click()
    })
    LinkedIn.JrSolesName().should('be.visible')
  })

  it('Checking Response Code for LinkedIn Profile', () => {
    cy.request({
      url:'https://www.linkedin.com/in/jrsoles/',
      failOnStatusCode: false,
    }).then((res) => {
      if (res.status == 999) {
        cy.log(JSON.stringify(res.body)) //prints the response body
        cy.log(res.body.name) //prints name
        cy.log(res.body.message) //prints message
      } 
      if (res.status == 200) {
        cy.log(JSON.stringify(res.body)) //prints the response body
        cy.log(res.body.name) //prints name
        cy.log(res.body.message) //prints message
      }
    })
  })

})
