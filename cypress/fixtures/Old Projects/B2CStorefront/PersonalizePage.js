export default class PersonalizePage {

	// Virtual or Plastic Page Object Elements
	personalizePageTitle = () => cy.get('.pageTitle')

	buttonAmount = (amount) => cy.get('[data-value="' + amount + '"]')
	buttonArrayAmounts = () => cy.get('.amount-btn')
	fieldOtherAmount = () => cy.get('#per_amount')

	dropdownQuantity = () => cy.get('#quantity')

	buttonThisIsAGift = () => cy.get('#btnPersonalizeGift')
	buttonThisIsForMe = () => cy.get('#btnPersonalizeForme')

	fieldToNickname = () => cy.get('#to_nickname')
	fieldFromNickname = () => cy.get('#from_nickname')
	fieldPersonalMessage = () => cy.get('#message')

	buttonAddToCartMain = () => cy.get('#btnPersonalizeNext2')

	//// Design Section
	imgDesignPreview = () => cy.get('#preview_card > div > img')
	buttonChange = () => cy.get('#btnPersonalizeChange')
	subtotalAmount = () => cy.get('#subtotal')
	shippingAmount = () => cy.get('#shipping')
	taxAmount = () => cy.get('#tax')
	totalAmount = () => cy.get('#total')
	buttonAddToCartDesign = () => cy.get('#btnPersonalizeNext1')

	// Virtual-only Elements
	fieldToFirstName = () => cy.get('#to_first_name')
	fieldFromLastName = () => cy.get('#from_last_name')
	fieldToEmail = () => cy.get('#to_email')

	buttonSendNow = () => cy.get('#btnPersonalizeSendNow')
	buttonSendLater = () => cy.get('#btnPersonalizeSendLater')

	// Plastic-only Elements
	fieldShippingFirstName = () => cy.get('#ship_first_name')
	fieldShippingLastName = () => cy.get('#ship_last_name')
	fieldShippingPhone = () => cy.get('#ship_phone')
	fieldShippingAddress1 = () => cy.get('#ship_address1')
	fieldShippingAddress2 = () => cy.get('#ship_address2')
	fieldShippingCity = () => cy.get('#ship_city')
	dropdownShippingState = () => cy.get('#ship_state')
	fieldShippingZip = () => cy.get('#ship_zip')
	dropdownShippingCountry = () => cy.get('#ship_country')

	radioShippingMethod = (id) => cy.get('#' + id)

	// Virtual Personlization Page Error Messages
	firstNameMissingErrorMsg = () => cy.get('#to_first_name_error_message')
	lastNameMissingErrorMsg = () => cy.get('#to_last_name_error_message')

	// Plastic Personlization Page Error Messages

	// Page actions
	clickAmountButton(amount) {
		this.buttonAmount(amount).click()
		cy.wait(500)
	}

	async clickAmountButtonSmallest() {
		let smallestAmount;
		const all_amounts = await new Cypress.Promise((resolve, reject) => {
			let arr = []
			this.buttonArrayAmounts()
				.each(element => arr.push(element.attr('data-value')))
				.then(() => {
					return resolve(arr)
				})
		})
		smallestAmount = Math.min(...all_amounts);
		this.buttonAmount(smallestAmount).click()
		cy.wait(500)
	}

	fillOtherAmountField(otherAmount) {
		this.fieldOtherAmount().type(otherAmount)
	}

	selectQuantity(quantity) {
		this.dropdownQuantity().select(quantity)
		cy.wait(500)
	}

	clickThisIsAGiftButton() {
		this.buttonThisIsAGift().click()
		cy.wait(250)
	}

	clickThisIsForMeButton() {
		this.buttonThisIsForMe().click()
		cy.wait(250)
	}

	clickSendNowButton() {
		this.buttonSendNow().click()
		cy.wait(250)
	}

	clickSendLaterButton() {
		this.buttonSendLater().click()
		cy.wait(250)
	}

	fillShippingFirstName(fname) {
		this.fieldShippingFirstName().type(fname)
	}

	fillShippingLastName(lname) {
		this.fieldShippingLastName().type(lname)
	}

	fillShippingPhone(phone) {
		this.fieldShippingPhone().type(phone)
	}

	fillShippingAddress1(address1) {
		this.fieldShippingAddress1().type(address1)
	}

	fillShippingAddress2(address2) {
		this.fieldShippingAddress2().type(address2)
	}

	fillShippingCity(city) {
		this.fieldShippingCity().type(city)
	}

	selectShippingState(state) {
		// state must be the two-letter abbreviation for the state (or province, etc.)
		this.dropdownShippingState().select(state)
	}

	fillShippingZip(zip) {
		this.fieldShippingZip().type(zip)
	}

	selectShippingCountry(country) {
		// state must be the two-letter abbreviation for the state (or province, etc.)
		this.dropdownShippingCountry().select(country)
	}

	selectShippingMethod(shippingMethod) {
		// IDs for shipping methods should be passed in as the shipping code followed by a hyphen and then the cost (e.g. "t2-10.5")
		this.radioShippingMethod().check(shippingMethod)
	}

	clickAddToCartButton() {
		this.buttonAddToCartDesign().click()
		cy.wait(2000)
	}

	// verifyFirstNameMissingErrorMsg() {
	// 	this.firstNameMissingErrorMsg().should('be.visible')
	// }

	// verifyLastNameMissingErrorMsg() {
	// 	this.lastNameMissingErrorMsg().should('be.visible')
	// }

	// verifyTotalAmount() {
	// 	this.totalAmount().should('not.equal', '$0.00')
	// }

	// verifyPageTitle() {
	// 	this.personalizePageTitle().contains('Personalize')
	// }
}
