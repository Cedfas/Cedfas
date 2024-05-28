import {
	urlDevMarketplace,
	userMarketplace,
	pwdMarketplace,
} from '../../../../config'
import MarketplaceCatalogPage from '../../../page-objects/tw-marketplace/MarketplaceCatalogPage'

const marketplaceCatalogPage = new MarketplaceCatalogPage()

	beforeEach(() => {
		cy.eyesOpen({
			appName: 'Marketplace - TW Dev',
			batchName: 'Marketplace - Visual',
		})
	})

	afterEach(() => {
		cy.eyesClose()
	})

describe('Verifying Login', { testIsolation: false }, () => {

	before('Logging into Marketplace',() => {
		marketplaceCatalogPage.loginNoMfa(urlDevMarketplace, userMarketplace, pwdMarketplace)
	})

	it('Confirming Login Portal works.', () => {
		cy.wait(20000)
		cy.eyesCheckWindow('Catalog Page')
	})
})

describe('Virtual Purchase - "Send to myself" Flow', { testIsolation: false }, () => {

	it('Virtual - Card Selection', () => {
		cy.wait(5000)
		marketplaceCatalogPage.clickCardTarget()
		cy.contains('By Email')
		marketplaceCatalogPage.clickButtonByEmail()
		cy.contains('Delivery')
	})

	it('Virtual - Card Details Page', () => {
		// marketplaceCatalogPage.clickButtonSendToMyself()
		marketplaceCatalogPage.fieldEmail().should('be.visible')
		cy.eyesCheckWindow('Virtual - Card Details')
		marketplaceCatalogPage.clickButtonDetailsCheckout()
		cy.contains('Order Summary')
	})

	it('Virtual - Card Checkout Page', () => {
		marketplaceCatalogPage.clickButtonTCandPPEmail()
		marketplaceCatalogPage.buttonTCandPPEmail().should('be.checked')
		cy.wait(500)
		cy.eyesCheckWindow('Virtual - Checkout')
	})
})

describe('Plastic Purchase Flow', { testIsolation: false }, () => {

	it('Plastic - Card Selection', () => {
		cy.wait(5000)
		marketplaceCatalogPage.clickBreadCrumbCardSelection()
		cy.wait(5000)
		marketplaceCatalogPage.clickCardVenue1()
		cy.contains('By Mail')
		cy.wait(500)
		marketplaceCatalogPage.clickButtonByMail()
		cy.contains('Delivery')
	})

	it('Plastic - Card Details Page', () => {
		cy.wait(500)
		marketplaceCatalogPage.clickButtonDetailsCheckout()
		cy.wait(500)
		cy.eyesCheckWindow('Plastic - Card Details')
		marketplaceCatalogPage.typeFieldShippingFirstName('QA')
		marketplaceCatalogPage.typeFieldShippingLastName('Gyft')
		marketplaceCatalogPage.typeFieldShippingAddress1('9444 Waples Rd')
		marketplaceCatalogPage.typeFieldShippingAddress2('Apt 405')
		marketplaceCatalogPage.typeFieldShippingPhoneNumber('7703297523')
		marketplaceCatalogPage.typeFieldShippingCity('San Diego')
		marketplaceCatalogPage.clickFieldRecipientShippingState('[data-value="CA"]')
		marketplaceCatalogPage.typeFieldShippingZip('92121')
		marketplaceCatalogPage.clickButtonDetailsCheckout()
		cy.contains('Order Summary')
	})


	it('Plastic - Card Checkout Page', () => {
		cy.wait(500)
		cy.eyesCheckWindow('Plastic - Card Checkout Page')
		marketplaceCatalogPage.clickButtonUSPS()
		marketplaceCatalogPage.clickButtonTCandPPPlastic()
		marketplaceCatalogPage.buttonTCandPPPlastic().should('be.checked')
		cy.wait(500)
		cy.eyesCheckWindow('Plastic - Checkout')
	})
})

