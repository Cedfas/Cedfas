import { urlWalletStorefront, userWallet, pwdWallet } from '../../../../config'
import AccountSettingsPage from '../../../page-objects/tw-wallet/AccountSettingsPage'
import WalletLoginPage from '../../../page-objects/tw-wallet/WalletLoginPage'
import WalletNavbar from '../../../page-objects/tw-wallet/WalletNavbar'

const accountSettingsPage = new AccountSettingsPage()
const walletLoginPage = new WalletLoginPage()
const walletNav = new WalletNavbar()

describe('Verify the Account Setting Page Functionality', () => {
	beforeEach(() => {
		cy.restoreLocalStorageCache();
	})

	afterEach(() => {
		cy.saveLocalStorageCache();
	})

	before(function () {
		cy.visit(urlWalletStorefront)
	})

	it('User is able to reach Account Settings Page', () => {
		walletLoginPage.login(userWallet, pwdWallet)
		cy.pause('Confirm MFA.  Resume once page is loaded.')
		walletNav.openAccountSettings()
		cy.contains('Account Settings')
	})
	
	it('Leaving empty fields produces an error', () => {
		accountSettingsPage.emptyFieldName()
		accountSettingsPage.emptyFieldAddress1()
		accountSettingsPage.emptyFieldAddress2()
		accountSettingsPage.emptyFieldCity()
		accountSettingsPage.emptyFieldState()
		accountSettingsPage.emptyFieldZip()
		accountSettingsPage.buttonContinue().click()
		cy.contains('is required.').should('be.visible')
	})

	it('Open Access Information', () => {
		accountSettingsPage.openAccessInfo()
		cy.contains('Your Information')
	})

	it('Close Access Information', () => {
		accountSettingsPage.closeAccessInfo()
		cy.contains('Account Settings')
	})


	it('Filling out Fields', () => {
		accountSettingsPage.fillFieldName('Jr Soles')
		accountSettingsPage.fillFieldAddress1('1131 Blue Sail Ave')
		accountSettingsPage.fillFieldAddress2('Automate')
		accountSettingsPage.fillFieldCity('Grayson')
		accountSettingsPage.fillFieldState('GA')
		accountSettingsPage.fillFieldZip('30017')
		accountSettingsPage.buttonContinue().click()
		cy.contains('updated successfully.').should('be.visible')
	})	

	it('Submitting New Info', () => {
		accountSettingsPage.submitNewInfo()
		cy.contains('updated successfully.')
	})	

	it('Checking Delete Option', () => {
		accountSettingsPage.deleteCancel()
		cy.contains('Delete my account')
	})

	it('Revert Address Changes', () => {
		accountSettingsPage.emptyFieldName()
		accountSettingsPage.emptyFieldAddress1()
		accountSettingsPage.emptyFieldAddress2()
		accountSettingsPage.emptyFieldCity()
		accountSettingsPage.emptyFieldState()
		accountSettingsPage.emptyFieldZip()
		accountSettingsPage.fillFieldName('Jr Soles')
		accountSettingsPage.fillFieldAddress1('1131 Blue Sail Ave')
		accountSettingsPage.fillFieldCity('Grayson')
		accountSettingsPage.fillFieldState('GA')
		accountSettingsPage.fillFieldZip('30017')
		accountSettingsPage.buttonContinue().click()
		cy.contains('updated successfully.')
	})		

})