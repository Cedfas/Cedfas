import TrackerPage from '../../../page-objects/tracker/TrackerPage'

const twtrackers = require('../../../fixtures/tw-test-tracker.json')
const svstrackers = require('../../../fixtures/svs-test-tracker.json')

const trackerPage = new TrackerPage()


describe('Responsive Tracker - TW Test (B2C) - 8 Digits Transaction', () => {
    it(
        'should navigate to Tracker page and verify tracking of 8 digit Transaction',
        () => {
            trackerPage.navToTwTestTracker('360/snapon_ca')
            cy.wait(500)
            trackerPage.trackOrder('mparas@transactionwireless.com', 'DJ1GAY16')
            cy.contains('Order Number')
        }
    )
})


describe('Responsive Tracker - TW Test (B2B) - 12 Digits Transaction', () => {
    it(
        'should navigate to Tracker page and verify tracking of 12 digit Transaction',
        () => {
            trackerPage.navToTwTestTracker('360/snapon_ca')
            cy.wait(500)
            trackerPage.trackOrder('cvize@transactionwireless.com', '305Z634EF5C93F489')
            cy.contains('Order Number')
        }
    )
})

describe('Responsive Tracker - TW Test (API) - 12 Digits Transaction', () => {
    it(
        'should navigate to Tracker page and verify tracking of 12 digit Transaction',
        () => {
            trackerPage.navToTwTestTracker('360/snapon_ca')
            cy.wait(500)
            trackerPage.trackOrder('jane.doe@example.com', 'JTTGLD82OZ69')
            cy.contains('Order Number')
        }
    )
})

describe('Responsive Tracker - SVS Test (B2B) - Same Transaction and Order ID', () => {
    it(
        'should navigate to Tracker page and verify tracking of 12 digit Transaction',
        () => {
            trackerPage.navToSvsTestTracker('110/westjet')
            cy.wait(500)
            trackerPage.trackOrder('mferguson@transactionwireless.com', 'F1WZX2GE')
            cy.contains('Order number')
        }
    )
})


