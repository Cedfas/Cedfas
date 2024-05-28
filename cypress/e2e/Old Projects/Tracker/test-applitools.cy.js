import TrackerPage from '../../../page-objects/tracker/TrackerPage'

const twtrackers = require('../../../fixtures/tw-test-tracker.json')
const svstrackers = require('../../../fixtures/svs-test-tracker.json')

const trackerPage = new TrackerPage()

beforeEach(() => {
	cy.eyesOpen({
		appName: 'Responsive Tracker - TEST',
		batchName: 'Responsive Tracker - TEST',
	})
})

afterEach(() => {
	cy.eyesClose()
})

describe('Responsive Tracker - TW Test (B2C)', () => {
	twtrackers.forEach(storefronts => {
		it(
			'should navigate to Tracker page for ' + storefronts + ' and collect screenshots',
			() => {
				trackerPage.navToTwTestTracker(storefronts)
				cy.wait(500)
				cy.eyesCheckWindow('Default View')
				// The order used in the next step will need to be updated on 2/11/2024.  You can update the VData on the Virtual Queued Card (Vdata: "delivery_date") and rebuild it to extend the date on the card.
				trackerPage.trackOrder('gsoles@transactionwireless.com', '2HTGDA6KVA71')
				cy.eyesCheckWindow('Tracked Order View')
			}
		)
	})
})

describe('Responsive Tracker - TW Test (B2B)', () => {
	twtrackers.forEach(storefronts => {
		it(
			'should navigate to Tracker page for ' + storefronts + ' and collect TW Test B2B Order screenshots',
			() => {
				trackerPage.navToTwTestTracker(storefronts)
				cy.wait(500)
				cy.eyesCheckWindow('Default View')
				trackerPage.trackOrder('cvize@transactionwireless.com', '305Z634EF5C93F489')
				cy.eyesCheckWindow('Tracked Order View')
			}
		)
	})
})


describe('Responsive Tracker - SVS Test', () => {
	svstrackers.forEach(storefronts => {
		it(
			'should navigate to Tracker page for ' + storefronts + ' and collect screenshots',
			() => {
				trackerPage.navToSvsTestTracker(storefronts)
				cy.wait(500)
				cy.eyesCheckWindow('Default View')
				// The order used in the next step will need to be updated on 2/11/2024.  You can update the VData on the Virtual Queued Card (Vdata: "delivery_date") and rebuild it to extend the date on the card.
				trackerPage.trackOrder('gsoles@transactionwireless.com', 'A5KHVA79')
				cy.eyesCheckWindow('Tracked Order View')
			}
		)
	})
})

describe('Responsive Tracker - SVS Test (B2B)', () => {
	svstrackers.forEach(storefronts => {
		it(
			'should navigate to Tracker page for ' + storefronts + ' and collect SVS Test B2B Order screenshots',
			() => {
				trackerPage.navToSvsTestTracker(storefronts)
				cy.wait(500)
				cy.eyesCheckWindow('Default View')
				trackerPage.trackOrder('mferguson@transactionwireless.com', 'F1WZX2GE')
				cy.eyesCheckWindow('Tracked Order View')
			}
		)
	})
})


