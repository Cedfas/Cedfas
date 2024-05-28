export default class PaymentMethodsPage {

	//Login Page:

	fieldUsername = () => cy.get('#email')

	fieldPassword = () => cy.get('#password')

    buttonSignIn = () => cy.contains('Continue')
    
    //Nav Bar Items:

    buttonNavIcon = () => cy.get('#main-nav-icon > path')

    buttonPaymentMethods = () => cy.contains('Payment methods')

    //Payment Settings

    buttonSecondCC = () => cy.get('#payment-1')

    buttonDelete = () => cy.get('.edit-payment-delete-button')

	buttonCancelDelete = () => cy.get('.secondary-btn')

    buttonPrimaryCard = () => cy.get('#edit-primary-payment-method')

    buttonSave = () => cy.get('.primary-btn')

    buttonAddACreditCard = () => cy.contains('Add a credit card')

    //Payment Settings > Add a New Card

    fieldNameOnCard = () => cy.get('#name_on_card')

    fieldCardNumber = () => cy.get('#card_number')

    fieldExpirationDate = () => cy.get('#expiration_date')

    fieldCVV = () => cy.get('#cvv')

    buttonPaymentContinue = () => cy.get(':nth-child(3) > .justify-end > .primary-btn')

    //Payment Settings > Add a New Card > 2nd Page

    fieldAddress = () => cy.get('#address1')
	
	fieldAddress2 = () => cy.get('#address2')

	fieldCity = () => cy.get('#city')

	fieldState = () => cy.get('#state')

    fieldZip = () => cy.get('#zip_code')
    
    buttonPaymentContine2ndPage = () =>cy.get('.mainContainer > :nth-child(4) > form > .flex-wrap > .primary-btn')

    //Actions: Initial Page

    // checkCCFeatures = () => {
    //     this.buttonSecondCC().click()
    //     this.buttonDelete().click({ force: true })
    //     this.buttonCancelDelete().click()
    //     cy.contains('Edit credit card')
    //     this.buttonPrimaryCard().click()
    //     this.buttonSave().click()
    // }

    clickButtonSecondCC = () => {
        this.buttonSecondCC().click()
    }

    clickButtonDelete = () => {
        this.buttonDelete().click({ force: true })
    }

    clickButtonDeleteCancel = () => {
        this.buttonCancelDelete().click()
    }

    clickButtonPrimaryCard = () => {
        this.buttonPrimaryCard().click()
    }

    clickButtonSave = () => {
        this.buttonSave().click()
    }

    //Actions: Add a New Card

    clickButtonAddACreditCard = () => {
        this.buttonAddACreditCard().click()
    }

    fillFieldNameOnCard = (fullname) => {
        this.fieldNameOnCard().type(fullname)
    }

    fillFieldCardNumber = (cardnumber) => {
        this.fieldCardNumber().type(cardnumber)
    }

    fillFieldExpirationDate = (expdate) => {
        this.fieldExpirationDate().type(expdate)
    }

    fillFieldCVV = (cvv) => {
        this.fieldCVV().type(cvv)
    }

    clickButtonPaymentContinue = () => {
        this.buttonPaymentContinue().click()
    }

    fillFieldAddress = (address) => {
        this.fieldAddress().type(address)
    }

    fillFieldAddress2 = (address2) => {
        this.fieldAddress2().type(address2)
    }

    fillFieldCity = (city) => {
        this.fieldCity().type(city)
    }

    fillFieldState = (state) => {
        this.fieldState().type(state)
    }

    fillFieldZip = (zip) => {
        this.fieldZip().type(zip)
    }

    clickButtonPaymentContinue2ndPage = () => {
        this.buttonPaymentContine2ndPage().click()
    }

    // addANewCreditCard = () => {
    //     //Script Note: Once the previous script is saved.  You will automatically be taken back to the previous screen.
    //     cy.wait(5000)
    //     this.buttonAddACreditCard().click()
    //     this.fieldNameOnCard().type('Jr Cypress')
    //     this.fieldCardNumber().type('4111111111111111', {force: true})
    //     this.fieldExpirationDate().type('122023')
    //     this.fieldCVV().type('111')
    //     this.buttonPaymentContine().click()
    //     this.fieldAddress().type('9444 Waples St')
    //     this.fieldAddress2().type('New Card')
    //     this.fieldCity().type('San Diego')
    //     this.fieldState().type('CA')
    //     this.fieldZip().type('92121')
    //     this.buttonPaymentContine2ndPage().click()
    // }




}