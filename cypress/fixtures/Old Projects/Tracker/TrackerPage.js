import {
	urlTrackerTwTest,
	urlTrackerSvsTest,
	urlTrackerTwUs,
	urlTrackerTwEu,
	urlTrackerSvsUs,
	urlTrackerSvsEu,
	url
} from '../../../config'


export default class TrackerPage {

	fieldEmail = () => cy.get('#email')
	fieldConfirmationNumber = () => cy.get('#transaction_id')
	buttonTrack = () => cy.get('#tracking_button')

	trackOrder = (email, confirmationNumber) => {
		this.fieldEmail().type(email)
		this.fieldConfirmationNumber().type(confirmationNumber)
		this.buttonTrack().click()
		cy.wait(5000)
	}

	// TEST
	navToTwTestTracker(storefront) {
		cy.visit(urlTrackerTwTest + storefront)
	}

	navToSvsTestTracker(storefront) {
		cy.visit(urlTrackerSvsTest + storefront)
	}

	// TW PROD
	navigateToTwUsTracker(storefront) {
		cy.visit(urlTrackerTwUs + storefront)
	}

	navigateToTwEuTracker(storefront) {
		cy.visit(urlTrackerTwEu + storefront)
	}

	// SVS PROD
	navigateToSvsUsTracker(storefront) {
		cy.visit(urlTrackerSvsUs + storefront)
	}

	navigateToSvsEuTracker(storefront) {
		cy.visit(urlTrackerSvsEu + storefront)
	}

	// GENERIC
	navigateToTracker(storefront) {
		cy.visit(url + storefront)
	}
}
