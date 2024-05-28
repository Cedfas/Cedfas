export default class WalletNavbar {

    //Login Page:

	fieldUsername = () => cy.get('#email')

	fieldPassword = () => cy.get('#password')

    buttonSignIn = () => cy.contains('Continue')

    //Nav Bar Items:

    buttonNavIcon = () => cy.get('#main-nav-icon > path')

    buttonManageCard = () => cy.contains('Manage cards')

    buttonAccountSettings = () => cy.contains('Account settings')

    buttonPaymentMethods = () => cy.contains('Payment methods')

    buttonSignOut = () => cy.contains('Sign Out')

    buttonPopUpSignOut = () => cy.get('.MuiDialogActions-root > .primary-btn')

    //Click Functions:

    login = (username, password) => {
		this.fieldUsername().type(username)
		this.fieldPassword().type(password, { log: false })
		this.buttonSignIn().click()			
        cy.pause('Complete MFA > Wait until all elements appear on page > Resume Script')
	}

    openManageCard = () => {
        this.buttonNavIcon().click()
        cy.wait(5000)
        this.buttonManageCard().click()
    }

    openAccountSettings = () => {
        this.buttonNavIcon().click()
        cy.wait(5000)
        this.buttonAccountSettings().click()
    }
    
    openPaymentMethods = () => {
        this.buttonNavIcon().click()
        cy.wait(5000)
        this.buttonPaymentMethods().click()
    }

    clickSignOut = () => {
        this.buttonNavIcon().click()
        cy.wait(5000)
        this.buttonSignOut().click()
    }

    confirmSignOut = () => {
        this.buttonPopUpSignOut().click()
    }
}