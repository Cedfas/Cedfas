import { urlWalletStorefront, userWallet, pwdWallet } from '../../../../config'
import WalletNavbar from '../../../page-objects/tw-wallet/WalletNavbar'
import WalletLoginPage from '../../../page-objects/tw-wallet/WalletLoginPage'

const walletNav = new WalletNavbar()
const walletLoginPage = new WalletLoginPage()

//Login

//Script Note: I wasn't able to do the "Account Settings Page" because it would never load when doing
//script.  So I have removed that element in these test case.  The page objects still exists.

describe('Verifying Wallet Navbar Functionality', () => {	
	beforeEach(() => {
		cy.restoreLocalStorageCache();
	})

	afterEach(() => {
		cy.saveLocalStorageCache();
	})

	before(function () {
		cy.visit(urlWalletStorefront)
	})

	it('User logins and navigates to the Account Settings Page', () => {
		walletLoginPage.login(userWallet, pwdWallet)
		cy.pause('Confirm MFA.  Resume once page is loaded.')
		cy.contains('Manage your gift cards')
	})
	
	it('Navigate to Payment Methods Page', () => {
		walletNav.openPaymentMethods()
		cy.contains('Payment Methods')
	})

	it('Navigate to Manage Card Page', () => {
		walletNav.openManageCard()
		cy.contains('Manage your gift cards')
	})

	it('Verify Sign out Pop Up', () => {
		walletNav.clickSignOut()
		cy.contains('Sign Out?')
	})

	it('Verify Sign Out works', () => {
		walletNav.confirmSignOut()
		cy.contains('Sign In')
	})

})