import { urlWalletStorefront, userWallet, pwdWallet } from '../../../../config'
import WalletLoginPage from '../../../page-objects/tw-wallet/WalletLoginPage'

const walletLoginPage = new WalletLoginPage()

//Login Tests

describe('Verify the Login Page Functionality', () => {
	beforeEach(() => {
		// cy.eyesOpen({
		// 	appName: 'TW Wallet',
		// 	batchName: 'TW Wallet - Login',
		// })
		cy.restoreLocalStorageCache()
	})

	afterEach(() => {
		// cy.eyesClose()
		cy.saveLocalStorageCache();
	})

	before(function () {
		cy.visit(urlWalletStorefront)
	})

	it('Login with invalid credentials', () => {
		walletLoginPage.login('fakeuser', 'fakepassword')
		cy.contains('Your email is invalid. Please use a valid email address.').should('be.visible')
	})

	it('Complete a password reset and wait at 2nd step', () => {
		walletLoginPage.forgotPasswordLink('qa@transactionwireless.com')
		cy.contains(
			'Please enter the confirmation code you have received in your email and enter a new password.'
		).should('be.visible')
	})

	it('Fail the password reset due to a bad email', () => {
		cy.visit(urlWalletStorefront)
		walletLoginPage.forgotPasswordLink('bademail@examp.')
		cy.contains(
			'Your email is invalid. Please use a valid email address.'
		).should('be.visible')
	})
	
		it('User Clicks back to Sign In Button', () => {
		walletLoginPage.clickBackToSignIn()
		walletLoginPage.fieldUsername().should('be.visible')
	})

	it('Verifying Stay Signed In Button', () => {
		walletLoginPage.clickButtonStaySignedIn()
		walletLoginPage.buttonStaySignedIn().should('be.checked')
	})

	it('Verifying the link to create an account', () => {
		walletLoginPage.clickLinkSignUp()
		cy.contains('Create account')
	})

	it('Create Account > Filling out the Name Field', () => {
		walletLoginPage.fillFieldName('QA')
		walletLoginPage.fieldName().should('have.value', 'QA')
	})	

	it('Create Account > Filling out Email Field', () => {
		walletLoginPage.fillFieldEmail('QA+1st@transactionwireless.com')
		walletLoginPage.fieldEmail().should('have.value', 'QA+1st@transactionwireless.com')
	})	

	it('Create Account > Filling out Password Field', () => {
		walletLoginPage.fillFieldPassword('QA1234!@#')
		walletLoginPage.fieldPassword().should('have.value', 'QA1234!@#')
	})

	it('Create Account > Filling out Password Confirmation Field', () => {	
		walletLoginPage.fillFieldConfirmPassword('QA1234!@#')
		walletLoginPage.fieldConfirmPassword().should('have.value', 'QA1234!@#')
	})	
})