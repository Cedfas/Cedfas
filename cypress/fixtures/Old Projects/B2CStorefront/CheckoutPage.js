export default class CheckoutPage {
	// Billing page elements
	submitOrderButton = () => cy.get('#btnCheckoutNext1')

	checkoutPageTitle = () => cy.get('.pageTitle')

	totalAmount = () => cy.get('.half text-right')

	iAgreeCheckbox = () => cy.get('#tandc')

	TandCDialogBox = () => cy.get('#rd-tandc-container > label')

	TandCDialogCheckbox = () =>  cy.get('#tandc-dialog')

	TandCDialogCheckoutButton = () => cy.get('#btnCheckoutNext2')

	checkoutPageSMSPopUpTitle = () => cy.get('.rdialog-content > .otp-dialog-wrapper > #otp-dialog-title')

	checkoutPageSMSPopUpField = () => cy.get('#otp-input')

	checkoutPageSMSPopUpResendButton = () => cy.get('#rd-otp-container > #otp-resend-wrapper > #otp-resend-button')

	// CC Info

	fieldCreditCardNumber = () => cy.get('#cc_number')

	fieldCvvNumber = () => cy.get('#cc_sec')

	dropdownMonth = () => cy.get('#months')

	dropdownYear = () => cy.get('#years')

	// Billing Info

	fieldFirstName = () => cy.get('#first_name')

	fieldLastName = () => cy.get('#last_name')

	fieldEmail = () => cy.get('#from_email')

	fieldEmailConfirm = () => cy.get('#from_email_confirm')

	fieldPhone = () => cy.get('#phone')

	fieldAddressLineOne = () => cy.get('#address1')

	fieldCity = () => cy.get('#city')

	dropdownState = () => cy.get('#state')

	fieldZip = () => cy.get('#zip')

	// 3D Secure flows components

	fieldAdyenChallenge3ds2 = () => cy.get('.input-field')

	buttonAdyenChallenge3ds2 = () => cy.get('.button--primary')

	fieldAdyenChallenge3ds1User = () => cy.get('#username')

	fieldAdyenChallenge3ds1Pwd = () => cy.get('#password')

	buttonAdyenChallenge3ds1 = () => cy.get('.button')

	// Neiman Marcus Custom Fields

	groupId = () => cy.get('#gov_id_group')

	dropdownTypeOfId = () => cy.get('#gov_id_type')
	errorTypeOfId = () => cy.get('#gov_id_type_error_message')

	fieldIdNumber = () => cy.get('#gov_id_number')
	errorIdNumber = () => cy.get('#gov_id_number_error_message')

	dropdownIdCountry = () => cy.get('#gov_id_country_state-country')

	dropdownIdState = () => cy.get('#custom_state')
	errorIdState = () => cy.get('#custom_state_error_message')

	groupDateOfBirth = () => cy.get('#dob_group')

	dropdownDateOfBirthDay = () => cy.get('#dob-day')
	errorDateOfBirthDay = () => cy.get('#dob-day_error_message')

	dropdownDateOfBirthMonth = () => cy.get('#dob-month')
	errorDateOfBirthMonth = () => cy.get('#dob-month_error_message')

	dropdownDateOfBirthYear = () => cy.get('#dob-year')
	errorDateOfBirthYear = () => cy.get('#dob-year_error_message')

	// Interact with Billing page

	clickOnSubmitOrderButton() {
		this.submitOrderButton().click()
	}

	verifyTotalAmount() {
		this.totalAmount().should('not.equal', '$0.00')
	}

	checkAgreeCheckbox() {
		this.iAgreeCheckbox().check()
	}

	verifyCheckoutPageTitle() {
		this.checkoutPageTitle().should('be.visible')
	}

	verifycCheckoutPagePopUpSMSTitle() {
		this.checkoutPageSMSPopUpTitle().should('be.visible')
	}

	verifyCheckoutPagePopUpSMSField() {
		this.checkoutPageSMSPopUpField().should('be.visible')
	}

	checkTandCDialogCheckbox() {
		this.checkoutPageTandCDialogCheckbox().check()
	}

	clickTandCDialogCheckoutButton() {
		this.checkoutPageTandCDialogCheckoutButton().click()
	}

	// Fill CC Info

	fillCreditCardNumber(creditcard) {
		this.fieldCreditCardNumber().type(creditcard)
	}

	fillCvvNumber(cvv) {
		this.fieldCvvNumber().type(cvv)
	}

	selectDropdownMonth() {
		this.dropdownMonth().select('03').should('have.value', '03')
	}

	selectDropdownYear() {
		this.dropdownYear().select('2030').should('have.value', '2030')
	}

	// Fill Billing Info

	fillFirstName(fn) {
		this.fieldFirstName().type(fn)
	}

	fillLasttName(ln) {
		this.fieldLastName().type(ln)
	}

	fillEmail(email) {
		this.fieldEmail().type(email)
	}

	fillEmailConfirm (emailconfirm) {
		this.fieldEmailConfirm().type(emailconfirm)
	}

	fillPhoneNumber(pn) {
		this.fieldPhone().type(pn)
	}

	fillAddressLineOne(add1) {
		this.fieldAddressLineOne().type(add1)
	}

	fillCity(city) {
		this.fieldCity().type(city)
	}

	selectDropdownState(state) {
		this.dropdownState().select(state)
	}

	fillZip(zip) {
		this.fieldZip().type(zip)
	}

	fillSMS(sms) {
		this.checkoutPageSMSPopUpField().type(sms)
	}

	// Interact with 3D Secure flows

	fillAdyenChallenge3ds2() {
		this.fieldAdyenChallenge3ds2().type('password')
	}

	clickButtonAdyenChallenge3ds2() {
		this.buttonAdyenChallenge3ds2().click({ force: true })
	}

	fillAdyenChallenge3ds1User() {
		this.fieldAdyenChallenge3ds1User().type('user')
	}

	fillAdyenChallenge3ds1Pwd() {
		this.fieldAdyenChallenge3ds1Pwd().type('password')
	}

	clickButtonAdyenChallenge3ds1() {
		this.buttonAdyenChallenge3ds1().click()
	}

	// Interact with Neiman Marcus Custom Fields

	selectDropdownIdType(typeOfId) {
		this.dropdownTypeOfId().select(typeOfId)
	}

	fillIdNumber(n) {
		this.fieldIdNumber().type(n)
	}

	selectDropdownIdCountry(country) {
		this.dropdownIdCountry().select(country)
	}

	selectDropdownIdState(state) {
		this.dropdownIdState().select(state)
	}

	selectDropdownDobDay(day) {
		this.dropdownDateOfBirthDay().select(day)
	}

	selectDropdownDobMonth(month) {
		this.dropdownDateOfBirthMonth().select(month)
	}

	selectDropdownDobYear(year) {
		this.dropdownDateOfBirthYear().select(year)
	}

	verifyCustomFieldsGroups() {
		this.groupId().should('be.visible')
		this.dropdownTypeOfId().should('be.visible')
	}

	verifyCustomFieldsGroupsNotVisible() {
		this.groupId().should('not.exist')
		this.dropdownTypeOfId().should('not.exist')
	}

	verifyCustomFieldsErrorsAll() {
		this.errorTypeOfId().should('be.visible')
		this.errorIdNumber().should('be.visible')
		this.errorIdState().should('be.visible')
		this.errorDateOfBirthDay().should('be.visible')
		this.errorDateOfBirthMonth().should('be.visible')
		this.errorDateOfBirthYear().should('be.visible')
	}
}
