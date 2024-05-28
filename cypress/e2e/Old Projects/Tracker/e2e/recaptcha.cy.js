import TrackerPage from '../../../page-objects/tracker/TrackerPage'

const twtrackers = require('../../../fixtures/tw-test-tracker.json')
const svstrackers = require('../../../fixtures/svs-test-tracker.json')

const trackerPage = new TrackerPage()


describe('Responsive Tracker - TW Test:  Check for reCaptcha on Tracker Page', () => {
    it(
        'should navigate to Tracker page and verify recaptcha on home page',
        () => {
            trackerPage.navToTwTestTracker('322/defaultcolorscheme/')
            cy.wait(500)
            cy.get('#main-recaptcha-wrapper').should('be.visible')
        }
    )
})


describe('Responsive Tracker - TW Test: Check for reCaptcha on Tracker > Contact Us Pop Up', () => {
    it(
        'should navigate to Tracker page, open Contact Us, and recaptcha', 
        () => {
            trackerPage.navToTwTestTracker('322/defaultcolorscheme/')
            cy.wait(500)
            cy.get(':nth-child(3) > .btn').click()
            cy.get('#rd-resize').click()
            cy.wait(500)
            cy.get('#recaptcha-reset').scrollIntoView().should('be.visible')
        }
   )
 })


