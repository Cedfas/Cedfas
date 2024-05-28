export default class WalletLoginPage {
	//Login Page:

	fieldLogin = () => cy.get('#loginForm')

	fieldUsername = () => cy.get('#email')

	fieldPassword = () => cy.get('#password')

	buttonSignIn = () => cy.contains('Continue')

	buttonForgotPassword = () => cy.get('#login-forgot-password')

	buttonStaySignedIn = () => cy.get('#remember_me')

	linkSignUp = () => cy.get('#login-sign-up')

	msgInvalidLoginError = () => cy.get('.status error-container')

	//Forgot Password Page:

	buttonSendCode = () => cy.contains('Send code')

	buttonBackToSignIn = () => cy.get('#reset-password-back-to-sign-in')

	//Create Account Page:

	fieldName = () =>  cy.get('#name')

	fieldEmail = () => cy.get('#email')

	fieldPassword = () => cy.get('#password')

	fieldConfirmPassword = () => cy.get('#confirmPassword')

	login = (username, password) => {
		this.fieldUsername().type(username)
		this.fieldPassword().type(password)
		this.buttonSignIn().click({ force: true })
	}

	forgotPasswordLink = username => {
		this.buttonForgotPassword().click({ force: true })
		this.fieldUsername().type(username)
		this.buttonSendCode().click({ force: true })
	}

	clickForgotPassword() {
		this.forgotPasswordButton().click({ force: true })
	}

	clickBackToSignIn = () => {
		this.buttonBackToSignIn().click({ force: true })
	}
	
	clickButtonStaySignedIn = () => {
		this.buttonStaySignedIn().click({ force: true })
	}

	clickLinkSignUp = () => {
		this.linkSignUp().click({ force: true })
	}

	fillFieldName = (name) => {
		this.fieldName().type(name)
	}

	fillFieldEmail = (email) => {
		this.fieldEmail().type(email)
	}

	fillFieldPassword = (password) => {
		this.fieldPassword().type(password)
	}

	fillFieldConfirmPassword = (confirm_password) => {
		this.fieldConfirmPassword().type(confirm_password)
	}
}
