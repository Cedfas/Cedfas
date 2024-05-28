export default class AccountSettingsPage {

	//Account Settings Page:

	fieldName = () => cy.get('#name')

	fieldAddress1 = () => cy.get('#address_1')
	
	fieldAddress2 = () => cy.get('#address_2')

	fieldCity = () => cy.get('#city')

	fieldState = () => cy.get('#state')

	fieldZip = () => cy.get('#zip')

	buttonContinue = () => cy.get('.primary-btn')

	buttonDelete = () => cy.get('.justify-start > .ml-1')

	buttonCancelDelete = () => cy.get('.secondary-btn')

	buttonAccessInfo = () => cy.get('.account-action-items > :nth-child(2) > .flex > .ml-1')

	buttonAccessInfoCancel = () => cy.get('.float-right > .primary-btn').click()

	buttonPrinter = () => cy.get('.flex > .fill-current > .MuiSvgIcon-root > path')
    
    //Actions:

	fillFieldName = (fullname) => {
		this.fieldName().type(fullname)
	}

	fillFieldAddress1 = (address1) => {
		this.fieldAddress1().type(address1)
	}

	fillFieldAddress2 = (address2) => {
		this.fieldAddress2().type(address2)
	}

	fillFieldCity= (city) => {
		this.fieldCity().type(city)
	}

	fillFieldState = (state) => {
		this.fieldState().type(state)
	}

	fillFieldZip = (zip) => {
		this.fieldZip().type(zip)
	}

	// emptyFields = () => {
	// 	this.fieldName().clear()
	// 	this.fieldAddress().clear()
	// 	this.fieldAddress2().clear()
	// 	this.fieldCity().clear()
	// 	this.fieldState().clear()
	// 	this.fieldZip().clear()
	// 	this.buttonContinue().click({ force: true })
	// }

	emptyFieldName = () => {
		this.fieldName().clear()
	}

	emptyFieldAddress1 = () => {
		this.fieldAddress1().clear()
	}

	emptyFieldAddress2 = () => {
		this.fieldAddress2().clear()
	}

	emptyFieldCity = () => {
		this.fieldCity().clear()
	}

	emptyFieldState = () => {
		this.fieldState().clear()
	}

	emptyFieldZip = () => {
		this.fieldZip().clear()
	}

	deleteCancel = () => {
		this.buttonDelete().click()
		this.buttonCancelDelete().click()
	}	

	openAccessInfo = () => {
		this.buttonAccessInfo().click()
	}

	clickButtonPrinter = () => {
		this.buttonPrinter()
		cy.get('.modal-close-button > .absolute > .fill-current').click()
		cy.contains('Your Information')
	}

	closeAccessInfo = () => {
		cy.wait(2000)
		this.buttonAccessInfoCancel().click()
	}

	submitNewInfo = () => {
		cy.wait(2000)
		this.buttonContinue().click({ force: true })
	}

	resetToDefaultInfo = () => {
		this.emptyFieldName()
		this.emptyFieldAddress1()
		this.emptyFieldAddress2()
		this.emptyFieldCity()
		this.emptyFieldState()
		this.emptyFieldZip()
		cy.wait(1500)
		this.fieldName().type('JR Soles')
		this.fieldAddress1().type('9444 Waples Rd')
		this.fieldAddress2().type('Script Reset')
		this.fieldCity().type('San Diego')
		this.fieldState().type('CA')
		this.fieldZip().type('92121')
		this.submitNewInfo()
	}
}