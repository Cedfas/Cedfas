export default class CartPage {

	titleCartPage = () => cy.get('.pageTitle')

	// Empty Cart Page Objects
	// These aren't going to work for stores which don't have both virtual and plastic.  Need to get ids added to these buttons.
	buttonBuyVirtual = () => cy.get('.menu > :nth-child(1)')
	buttonBuyPlastic = () => cy.get('.menu > :nth-child(2)')

	// Classic Cart Page Objects
	buttonEditCartItem = (n) => cy.get('#btnCartEdit' + n)
	buttonRemoveCartItem = (n) => cy.get('#btnCartDelete' + n)
	cartItemHeading = (n) => cy.get(':nth-child(' + (n + 3) + ') > .section-details > .subTitle')
	cartItemHeadingMerged = (n) => cy.get('.col-sm-6 > :nth-child(' + (n - 1) + ')')
	cartItemValue = (n) => cy.get(':nth-child(' + (n + 1) + ') > table > tbody > :nth-child(1) > :nth-child(2)')
	cartItemvalueMerged = (n) => cy.get('#bonus-cart-items-section > .section-item > .col-sm-7 > .row > :nth-child(' + (n + 1) + ')')
	linkBuyMoreVirtualSummary = () => cy.get('.twSectionSidebar > .addGift > [href="https://test-merchant.wgiftcard.com/responsive_auto/qa_promotions_testing/virtual"]')
	cartItemBonusNameMerged = (n) => cy.get(':nth-child(' + (n - 1) + ') > .col-sm-7 > .row > .col-sm-6 > :nth-child(2)')

	// Classic Card Page Objects > Bonus Card Objects:
	fieldSpecifyEmail = () => cy.get('#email1')

	//Classic and Merged Shipping Cart Page Objects:
	buttonSpecifyAddressBonusOption1 = () => cy.get('#bonus0_option1')
	fieldSpecifyAddressShipFirstName = () => cy.get('#ship_firstname')
	fieldSpecifyAddressShipLastName = () => cy.get('#ship_lastname')
	fieldSpecifyAddressShipPhone = () => cy.get('#ship_phone')
	fieldSpecifyAddressShipAddress1 = () => cy.get('#ship_address1')
	fieldSpecifyAddressShipAddress2 = () => cy.get('#ship_address2')
	fieldSpecifyAddressShipCity = () => cy.get('#ship_city')
	fieldSpecifyAddressShipState = () => cy.get('#ship_state')
	fieldSpecifyAddressShipZip = () => cy.get('#ship_zip')

	// Merged Shipping Cart Page Objects
	fieldSpecifyEmailMerged = () => cy.get('#email')
	buttonSaveBonusAddress = () => cy.get('#saveBonusAddress')
	buttonSaveBonusEmail = () => cy.get('#saveBonusEmail')


	// Classic & Merged Shipping Page Objects
	buttonCheckoutMain = () => cy.get('#btnCartNext1')
	buttonCheckoutSummary = () => cy.get('#btnCartNext2')
	buttonCheckoutMobile = () => cy.get('#btnCartNext3')
	// buttonDeliveryOptions = (n) => cy.get(':nth-child(' + (n + 1) + ') > .col-sm-4 > .section-item-menu > .col-xs-2')
	
	//// Summary Cart Page Objects
	fieldPromoCode = () => cy.get('#promo2')
	fieldPromoCodeMobile = () => cy.get('#promo3')
	buttonApplyPromoCode = () => cy.get('#btnCartPromo2')
	buttonApplyPromoCodeMobile = () => cy.get('#btnCartPromo3')

	subtotalAmount = () => cy.get('.cart-summary > :nth-child(3) > .text-right')
	shippingAmount = () => cy.get('.cart-summary > :nth-child(4) > .text-right')
	discountAmount = () => cy.get('.promoPrice')
	taxAmount = () => cy.get('.tax-line > .text-right')
	totalAmount = () => cy.get('.cart-total > .text-right')

	// Page actions
	fillPromoCode(promoCode) {
		this.fieldPromoCode().type(promoCode)
	}

	clickApplyButton() {
		this.buttonApplyPromoCode().click()
		// A wait is necessary here to ensure the cart page reloads completely
		cy.wait(3000)
	}

	clickCheckoutButton() {
		this.buttonCheckoutMain().click({ force: true })
	}

	clickCheckoutButtonSummary() {
		this.buttonCheckoutSummary().click({ force: true })
	}

	clickButtonAddVirtualSummary() {
		this.buttonAddVirtualSummary().click({ force: true })
	}

	clickButtonEditCartItem(n) {
		this.buttonEditCartItem(n).click({ force: true })
	}

	// Page Actions > Bonus Card

	clickButtonSpecifyAddressBonusOption1 = () => (
		this.buttonSpecifyAddressBonusOption1().click()
	)

	fillFieldSpecifyAddressShipFirstName = (first) => (
		this.fieldSpecifyAddressShipFirstName().type(first)
	)

	fillFieldSpecifyAddressShipLastName = (last) => (
		this.fieldSpecifyAddressShipLastName().type(last)
	)

	fillFieldSpecifyAddressShipPhone = (phone) => (
		this.fieldSpecifyAddressShipPhone().type(phone)
	)

	fillFieldSpecifyAddressShipAddress1 = (address1) => (
		this.fieldSpecifyAddressShipAddress1().type(address1)
	)

	fillFieldSpecifyAddressShipAddress2 = (address2) => (
		this.fieldSpecifyAddressShipAddress2().type(address2)
	)

	fillFieldSpecifyAddressShipCity = (city) => (
		this.fieldSpecifyAddressShipCity().type(city)
	)

	fillFieldSpecifyAddressShipState = (state) => (
		this.fieldSpecifyAddressShipState().select(state)
	)

	fillFieldSpecifyAddressShipZip = (zip) => (
		this.fieldSpecifyAddressShipZip().type(zip)
	)

	fillFieldSpecifyEmail = (email1) => (
		this.fieldSpecifyEmail().type(email1)
	)

	fillFieldSpecifyEmailMerged = (email1) => (
		this.fieldSpecifyEmailMerged().type(email1)
	)

	// clickButtonDeliveryOptions = (button) =>(
	// 	this.buttonDeliveryOptions(button).click({ force: true })
	// )

	clickButtonSaveBonusEmail = () => (
		this.buttonSaveBonusEmail().click()
	)

	clickButtonSaveBonusAddress = () => (
		this.buttonSaveBonusAddress().click()
	)
}