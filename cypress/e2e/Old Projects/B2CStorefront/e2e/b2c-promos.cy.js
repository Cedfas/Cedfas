import CartPage from '../../../page-objects/b2cstorefront/CartPage'
import ChoosePage from '../../../page-objects/b2cstorefront/ChoosePage'
import PersonalizePage from '../../../page-objects/b2cstorefront/PersonalizePage'
import CheckoutPage from '../../../page-objects/b2cstorefront/CheckoutPage'

const choose = new ChoosePage()
const personalize = new PersonalizePage()
const cart = new CartPage()
const checkout = new CheckoutPage()

// B2C Storefront Link Tests

describe('Percent Discount Promo Test Cases', () => {
	it('Percent Discount (QAPercent1) - Meets Min Cart Value ($50), Does Not Exceed Max Discount', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QAPercent1')
		cart.clickApplyButton()
		cart.discountAmount().should('contain.text', '-$5.00')
		cart.totalAmount().should('contain.text', '$45.00')
	})
})

describe('Dollar Promo Test Cases', () => {
	it('Dollar Discount (QADollar1) - Meets $50 Value, Dollar Discount = $10', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QADollar1')
		cart.clickApplyButton()
		cart.discountAmount().should('contain.text', '-$10.00')
		cart.totalAmount().should('contain.text', '$40.00')
	})
})

describe('Bonus Promotion Test Cases', () => {
	it('Bonus Promo (QABonus2)- Meets $50 Value, Virtual Bonus = $10', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus2')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$50.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cy.contains('$10.00').should('be.visible')
	})

	it('Double Bonus (QABonus3) - Meets $50 Value, 2 Bonus Cards Issued', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus3')
		cart.clickApplyButton()
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemHeading(3).contains('Bonus Card').should('be.visible')
	})

	it('Bonus Split Promo (QABonus1)- $100 Value, Virtual Bonus per $50, 2 X $10 Bonus Cards', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(100)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus1')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$100.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemHeading(3).contains('Bonus Card').should('be.visible')
	})

	it('Bonus Triple Tier Promo (QABonus4) - Bonus card issued at $50, $75, and $100 Cart Value', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus4')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$50.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemValue(2).contains('$10.00').should('be.visible')
		cart.clickButtonEditCartItem(1)
		choose.clickNextStepButton()
		personalize.clickAmountButton(75)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.totalAmount().should('contain.text', '$75.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemValue(2).contains('$15.00').should('be.visible')
		cart.clickButtonEditCartItem(1)
		choose.clickNextStepButton()
		personalize.clickAmountButton(100)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.totalAmount().should('contain.text', '$100.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemValue(2).contains('$20.00').should('be.visible')
	})

	it('Mixed Bonus Cards (V&P) can advance to checkout page - Old Cart (QABonus5)', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(25)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cy.wait(5000)
		cart.fillPromoCode('QABonus5')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$25.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemValue(2).contains('$1.00').should('be.visible')
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/plastic'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(25)
		personalize.clickThisIsForMeButton()
		personalize.fillShippingFirstName('Bruce')
		personalize.fillShippingLastName('Wayne')
		personalize.fillShippingPhone('9993335454')
		personalize.fillShippingAddress1('9444 Waples St')
		personalize.fillShippingCity('San Diego')
		personalize.selectShippingState('California')
		personalize.fillShippingZip('92121')
		personalize.clickAddToCartButton()
		cart.totalAmount().should('contain.text', '$52.00') 
		//^^There's a $2.00 card fee on the card.^^
		cart.cartItemHeading(3).contains('Bonus Card').should('be.visible')
		cart.cartItemHeading(4).contains('Bonus Card').should('be.visible')
		cy.wait(2000)
		cart.fillFieldSpecifyEmail('test@test.com')
		cy.wait(4000)
		cart.clickButtonSpecifyAddressBonusOption1().click({force: true})
		cart.fillFieldSpecifyAddressShipFirstName('QA')
		cart.fillFieldSpecifyAddressShipLastName('Tester')
		cart.fillFieldSpecifyAddressShipPhone('9995551234')
		cart.fillFieldSpecifyAddressShipAddress1('9444 Waples St')
		cart.fillFieldSpecifyAddressShipCity('San Diego')
		cart.fillFieldSpecifyAddressShipState('CA')
		cart.fillFieldSpecifyAddressShipZip('92121')
		cy.wait(2000)
		cart.clickCheckoutButton()
		cy.wait(4000)
		checkout.verifyCheckoutPageTitle()
	})

	it('Mixed Bonus Cards (V&P) can advance to checkout page - Merged Cart (QABonus5)', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/merged_cart/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(25)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus5')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$25.00')
		cart.cartItemHeadingMerged(2).contains('Bonus Card').should('be.visible')
		cart.cartItemvalueMerged(2).contains('$1.00').should('be.visible')
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/merged_cart/plastic'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(25)
		personalize.clickThisIsForMeButton()
		personalize.fillShippingFirstName('Bruce')
		personalize.fillShippingLastName('Wayne')
		personalize.fillShippingPhone('9993335454')
		personalize.fillShippingAddress1('9444 Waples St')
		personalize.fillShippingCity('San Diego')
		personalize.selectShippingState('California')
		personalize.fillShippingZip('92121')
		personalize.clickAddToCartButton()
		cart.totalAmount().should('contain.text', '$52.00')
		//^^There's a $2.00 card fee on the card.^^
		cart.fillFieldSpecifyEmailMerged('test@test.com')
		cart.clickButtonSaveBonusEmail()
		cy.wait(2000)
		cart.clickButtonSpecifyAddressBonusOption1().click({force: true})
		cart.fillFieldSpecifyAddressShipFirstName('QA')
		cart.fillFieldSpecifyAddressShipLastName('Tester')
		cart.fillFieldSpecifyAddressShipPhone('9995551234')
		cart.fillFieldSpecifyAddressShipAddress1('9444 Waples St')
		cart.fillFieldSpecifyAddressShipCity('San Diego')
		cart.fillFieldSpecifyAddressShipState('CA')
		cart.fillFieldSpecifyAddressShipZip('92121')
		cart.clickButtonSaveBonusAddress()
		cart.cartItemBonusNameMerged(3).contains('Plastic').should('be.visible')
		cart.cartItemBonusNameMerged(4).contains('Virtual').should('be.visible')
		cy.wait(2000)
		cart.clickCheckoutButton()
		checkout.verifyCheckoutPageTitle()
	})

	it('Apply per card (QABonus6) - Bonus card ($10) issued at $100 card value', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(100)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QABonus6')
		cart.clickApplyButton()
		cart.totalAmount().should('contain.text', '$100.00')
		cart.cartItemHeading(2).contains('Bonus Card').should('be.visible')
		cart.cartItemValue(2).contains('$10.00').should('be.visible')
		})

	it('Apply per card (QABonus6) - Bonus card ($10) is not issued for total cart value of $100', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.totalAmount().should('contain.text', '$100.00')
		cy.log('No bonus card should be given since no individual card = $100')
		cart.cartItemHeading(3).should('not.exist')
	})
})

describe('Combo (Percentage + Coupon) Promo Test Cases', () => {
	it('Combo Discount (QACombo1) - Meets $50 Value, Percentage Discount - 10% and Coupon', () => {
		cy.clearAllCookies()
		cy.visit(
			'https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual'
		)
		choose.clickNextStepButton()
		personalize.clickAmountButton(50)
		personalize.clickThisIsForMeButton()
		personalize.clickAddToCartButton()
		cart.fillPromoCode('QACombo1')
		cart.clickApplyButton()
		cart.discountAmount().should('contain.text', '-$5.00')
		cart.totalAmount().should('contain.text', '$45.00')
		cart.cartItemHeading(2).contains('Coupon').should('be.visible')
		cart.cartItemValue(2).contains('$0.10').should('be.visible')
	})
})
