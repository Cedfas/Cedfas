import B2cPage from '../../../page-objects/b2cstorefront/B2cPage'
import CartPage from '../../../page-objects/b2cstorefront/CartPage'
import CheckoutPage from '../../../page-objects/b2cstorefront/CheckoutPage'
import ChoosePage from '../../../page-objects/b2cstorefront/ChoosePage'
import PersonalizePage from '../../../page-objects/b2cstorefront/PersonalizePage'

const b2cpage = new B2cPage()
const choose = new ChoosePage()
const personalize = new PersonalizePage()
const cart = new CartPage()
const checkout = new CheckoutPage()

// This test is used to collect screenshots for a single B2C Resp store.  This is ideal for updates we do the storefront to confirm there are no overall layout changes.

describe('B2C Virtual Purchase flow - Storefront: DCS', () => {
	it('should navigate from Virtual Choose design to Checkout', () => {
		cy.eyesOpen({
			appName: 'B2C Single Storefront Screenshot',
			batchName: 'Single Storefront Screenshot',
			browser: [
				{ width: 1366, height: 768, name: 'chrome' },
				{ width: 1366, height: 768, name: 'safari' },
				// { width: 1366, height: 768, name: 'firefox' },
				// { width: 360, height: 740, name: 'chrome' }

			],
		})
		b2cpage.navigateToVirtualStorefront()
		cy.wait(500)
		cy.eyesCheckWindow({
			tag: 'Choose',
			target: 'window',
			fully: true,
		})
		choose.clickNextStepButton()
		cy.eyesCheckWindow({
			tag: 'Personalize',
			target: 'window',
			fully: true,
		})
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cy.eyesCheckWindow({
			tag: 'Cart',
			target: 'window', 
			fully: true,
		})
		cart.clickCheckoutButton()
		cy.wait(500)
		cy.eyesCheckWindow({
			tag: 'Checkout',
			target: 'window',
			fully: true,
		})
		checkout.verifyCheckoutPageTitle()
		cy.eyesClose()
	})
})

describe('B2C Plastic Purchase flow - TW Test', () => {
	it('should navigate from Plastic Choose design to Checkout', () => {
		cy.eyesOpen({
			appName: 'B2C Single Storefront Screenshot',
			batchName: 'Single Storefront Screenshot',
			browser: [
				{ width: 1366, height: 768, name: 'chrome' },
					{ width: 1366, height: 768, name: 'safari' },
					// { width: 1366, height: 768, name: 'firefox' },
					// { width: 360, height: 740, name: 'chrome' }

				],
			})
			b2cpage.navigateToPlasticStorefront()
			cy.wait(500)
			cy.eyesCheckWindow({
				tag: 'Choose',
				target: 'window',
				fully: true,
			})
			choose.clickNextStepButton()
			cy.eyesCheckWindow({
				tag: 'Personalize',
				target: 'window',
				fully: true,
			})
			personalize.clickThisIsForMeButton()
			personalize.fillShippingFirstName('QA')
			personalize.fillShippingLastName('Team')
			personalize.fillShippingPhone('(858)555-5555')
			personalize.fillShippingAddress1('9444 Waples St')
			personalize.fillShippingCity('San Diego')
			personalize.selectShippingState('CA')
			personalize.fillShippingZip('92121')
			personalize.clickAddToCartButton()
			cy.eyesCheckWindow({
				tag: 'Cart',
				target: 'window', 
				fully: true,
			})
			cart.clickCheckoutButton()
			cy.wait(500)
			cy.eyesCheckWindow({
				tag: 'Checkout',
				target: 'window',
				fully: true,
			})
			checkout.verifyCheckoutPageTitle()
		cy.eyesClose()
	})
})