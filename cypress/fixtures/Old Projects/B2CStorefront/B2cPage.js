import {
	urlB2cStdTwTest,
	urlB2cTwDev,
	urlB2cTwTest,
	urlB2cStdSvsTest,
	urlB2cSvsTest,
	urlB2cTwUs,
	urlB2cTwEu,
	urlB2cSvsUs,
	urlB2cSvsEu,
} from '../../../config'
export default class B2cPage {
	// TEST
	navigateToTwTestStdVirtualStorefront(storefront) {
		cy.visit(urlB2cStdTwTest + storefront)
	}

	navigateToTwDevVirtualStorefront(storefront) {
		cy.visit(urlB2cTwDev + storefront + '/virtual')
	}

	navigateToTwDevPlasticStorefront(storefront) {
		cy.visit(urlB2cTwDev + storefront + '/plastic')
	}

	navigateToTwTestVirtualStorefront(storefront) {
		cy.visit(urlB2cTwTest + storefront + '/virtual')
	}

	navigateToTwTestPlasticStorefront(storefront) {
		cy.visit(urlB2cTwTest + storefront + '/plastic')
	}

	navigateToSvsTestStdVirtualStorefront(storefront) {
		cy.visit(urlB2cStdSvsTest + storefront)
	}

	navigateToSvsTestVirtualStorefront(storefront) {
		cy.visit(urlB2cSvsTest + storefront + '/virtual')
	}

	navigateToSvsTestPlasticStorefront(storefront) {
		cy.visit(urlB2cSvsTest + storefront + '/plastic')
	}

	// TW PROD
	navigateToTwUsVirtualStorefront(storefront) {
		cy.visit(urlB2cTwUs + storefront + '/virtual')
	}

	navigateToTwEuVirtualStorefront(storefront) {
		cy.visit(urlB2cTwEu + storefront + '/virtual')
	}

	// SVS PROD
	navigateToSvsUsVirtualStorefront(storefront) {
		cy.visit(urlB2cSvsUs + storefront + '/virtual')
	}

	navigateToSvsEuVirtualStorefront(storefront) {
		cy.visit(urlB2cSvsEu + storefront + '/virtual')
	}

	// GENERIC
	navigateToVirtualStorefront() {
		cy.visit(Cypress.env('urlStorefront') + '/virtual')
	}

	navigateToPlasticStorefront() {
		cy.visit(Cypress.env('urlStorefront') + '/plastic')
	}
}
