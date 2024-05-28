import { urlWalletStorefront, userWallet, pwdWallet } from '../../../../config'
import PaymentMethodsPage from '../../../page-objects/tw-wallet/PaymentMethodsPage'
import WalletNavbar from '../../../page-objects/tw-wallet/WalletNavbar'
import WalletLoginPage from '../../../page-objects/tw-wallet/WalletLoginPage'

const paymentMethods = new PaymentMethodsPage()
const walletLoginPage = new WalletLoginPage()
const walletNav = new WalletNavbar()

describe('Overall Testing of Payment Methods Page', () => {
	beforeEach(() => {
		cy.restoreLocalStorageCache();
	})

	afterEach(() => {
		cy.saveLocalStorageCache();
	})

	before(function () {
		cy.visit(urlWalletStorefront)
	})
	  
	it('User is able to reach Payment Settings Page', () => {
		walletLoginPage.login(userWallet, pwdWallet)
		cy.pause('Confirm MFA.  Resume once page is loaded.')
		walletNav.openPaymentMethods()
		cy.contains('Payment Methods')
	})
	
	//Test: I want to setup the option for deleting a card if we don't hold a limit of some many tries per account.
	// April 12, 2022 - I can't create the first VISA card because it won't allow adding.  Script is blocked until\
	//this issue is fixed.

	it('Verify features on an existing card', () => {
		paymentMethods.clickButtonSecondCC()
		cy.contains('Edit credit card')
		paymentMethods.clickButtonDelete()
		cy.contains('Delete Payment Method?')
		paymentMethods.clickButtonDeleteCancel()
		cy.contains('Edit credit card')
		paymentMethods.clickButtonPrimaryCard()
		paymentMethods.buttonPrimaryCard().should('not.be.disabled')
		paymentMethods.clickButtonSave()
		cy.contains('updated successfully.')
	})


	it('Create and fill out new credit card', () => {
		paymentMethods.clickButtonAddACreditCard()
		paymentMethods.fillFieldNameOnCard('Jr Cypress')
		paymentMethods.fillFieldCardNumber('4111111111111111')
		paymentMethods.fillFieldExpirationDate('122023')
		paymentMethods.fillFieldCVV('111')
		paymentMethods.clickButtonPaymentContinue()
		paymentMethods.fillFieldAddress('9444 Waples St')
		paymentMethods.fillFieldAddress2('Add 2')
		paymentMethods.fillFieldCity('Grayson')
		paymentMethods.fillFieldState('GA')
		paymentMethods.fillFieldZip('92121')
		paymentMethods.clickButtonPaymentContinue2ndPage()
		cy.wait(10000)
		cy.contains('Save')
	})

	// it('Adding a new credit card', () => {
	// 	paymentMethods.addANewCreditCard()
	// 	cy.contains('updated successfully.')
    // })
})