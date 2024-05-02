import LinkedInFixtures from '../fixtures'

const LinkedIn = new LinkedInFixtures()

describe('Opening LinkedIn Profile', () => {
  it('Finding Profile Via Google', () => {
    cy.visit('https://www.google.com')
    LinkedInFixtures.clickGoogleField()
    cy.get('#jZ2SBf > .wM6W7d > span').click()
    cy.contains('Glenn Soles Jr').click()
    cy.origin('https://www.linkedin.com', () => {
      cy.get('#public_profile_contextual-sign-in > div > section > button > icon > svg').click()
    })
  })

  it('Opening LinkedIn Profile Directly', () => {
    cy.visit('https://www.linkedin.com/in/jrsoles/')
    cy.origin('https://www.linkedin.com', () => {
        cy.get('#public_profile_contextual-sign-in > div > section > button > icon > svg').click()
    })
  })
   
})