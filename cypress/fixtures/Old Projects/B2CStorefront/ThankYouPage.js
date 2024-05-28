export default class ThankYouPage {

	thankYouPageTitle = () => cy.get('.pageTitle')

	linkTrackYourOrder = () => cy.get('.receipt-tracking')

	linkBackToMerchantWebsite = () => cy.get('.store-link')

	// Buy More buttons will vary from store to store and do not have unique IDs which can be targetted universally.

	// Thank You Page Tests

	verifyPageTitle() {
		this.thankYouPageTitle().contains('Confirmation')
	}
}
