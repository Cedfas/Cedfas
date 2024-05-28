import { urlWalletStorefront, userWallet, pwdWallet } from '../../../../config'
import ManageCardPage from '../../../page-objects/tw-wallet/ManageCardPage'
import WalletLoginPage from '../../../page-objects/tw-wallet/WalletLoginPage'
import WalletNavbar from '../../../page-objects/tw-wallet/WalletNavbar'

const manageCardPage = new ManageCardPage()
const walletLoginPage = new WalletLoginPage()
const walletNav = new WalletNavbar()

beforeEach(() => {
	// cy.eyesOpen({
	// 	appName: 'TW Wallet',
	// 	batchName: 'TW Wallet - Manage Card',
	// })
	cy.restoreLocalStorageCache()
})

afterEach(() => {
	// cy.eyesClose()
	cy.saveLocalStorageCache()
})

before(function () {
	cy.visit(urlWalletStorefront)
})

	describe('Verify Login', () => {


		it('Logging into Wallet Portal', () => {
		walletLoginPage.login(userWallet, pwdWallet)
		cy.pause('Confirm MFA.  Resume once page is loaded.')
		cy.contains('Manage your gift cards').should('be.visible')
		})

	})

describe('Checking Add Funds', () => {

	it('Add Funds: Clicking Add Amount Button and Selecting $20 Value', () => {
		manageCardPage.clickAddFunds()
		manageCardPage.clickAddFundsAmount()
		cy.contains('20.00').should('be.visible')
		manageCardPage.clickXAmount('[data-value="2000"]')
	})

	it('Add Funds: Clicking Add Payment Method Button and Selecting CC Option', () => {
		manageCardPage.clickAddAmountPayment()
		cy.contains('Discover').should('be.visible')
		cy.focused().click({ force: true })
		//We can update the contains with the name of the card we setup on the account.
		manageCardPage.esacpingWindow()
	})

	// it('Add Funds: Closing Window', () => {
	// 	manageCardPage.clickCloseButton()
	// 	cy.contains('Manage your gift cards').should('be.visible')
	// })

})

describe('Modify Auto Add Funds', () => {

	it('Modify Auto Add Funds: Clicking Button', () => {
		manageCardPage.clickModifyAutoAddFunds()
		cy.contains('Modify Scheduled')
	})

	it('Modify Auto Add Funds: Selecting "$20.00" Top Up Amount', () => { 
		manageCardPage.updateAutoAddFundsTopUpAmount('[data-value="2000"]')
		cy.contains('20.00')
	})

	it('Modify Auto Add Funds: Selecting "Every Week" Top Up Interval', () => {
		manageCardPage.updateAutoAddFundsTopUpInterval('Every Week')
		cy.contains('Every Week')
	})

	it('Modify Auto Add Funds: Selecting existing Top Up Start Date', () => {
		manageCardPage.updateAutoAddFundsTopUpStartDate()
		cy.contains('Start date:')
	})

	it('Modify Auto Add Funds: Selecting the first Top Up Payment Method', () => {
		manageCardPage.updatedAutoAddFundsChangeTopUpPaymentMethod()
		cy.contains('Payment method')
	})

	it('Modify Auto Add Funds: Updating Top Up Information', () => {
		manageCardPage.clickUpdateButton()
		cy.wait(8000)
		cy.contains('Manage your gift cards')
	})

describe('Remaining Features', () => {

	it('Click "Pay with card" button', () => {
		manageCardPage.clickPayWithCard()
		cy.contains('Pay with card').should('be.visible')
		
	})

	it('Click Add Funds button', () => {
		manageCardPage.clickAddFunds()
		cy.contains('Add funds').should('be.visible')
		manageCardPage.esacpingWindow()
	})

	// it.only('Click Close button', () => {
	// 	manageCardPage.clickCloseButton()
	// 	cy.contains('Add funds').should('be.visible')
	// })

	it('Click Modify Auto Add Funds button', () => {
		manageCardPage.clickPayWithCardModify
		cy.contains('Add funds')
		manageCardPage.esacpingWindow()
		cy.wait(1000)
		manageCardPage.esacpingWindow()
	})

	// it.only('Click Close button', () => {
	// 	manageCardPage.clickCloseButton()
	// 	cy.contains('Manage your gift cards').should('be.visible')
	// })

	it('Updating Card Name', () => {
		manageCardPage.savingCardName('Automate')
		cy.contains('Manage your gift cards').should('be.visible')
	})

})

	//---------------------------//
	//Clean up Actions for Script//
	//---------------------------//

describe('Reverting Changes for next run', () => {

	it('Revert Changes', () => {
		cy.wait(5000)
		manageCardPage.savingCardName('Default')
		cy.contains('Manage your gift cards').should('be.visible')
		manageCardPage.clickModifyAutoAddFunds()
		cy.contains('Modify Scheduled')
		manageCardPage.updateAutoAddFundsTopUpAmount('[data-value="1000"]')
		cy.contains('10.00')
		manageCardPage.updateAutoAddFundsTopUpInterval('Every Month')
		cy.contains('Every Month')
		manageCardPage.buttonUpdate().click()
		cy.contains('been updated.')
		cy.wait(8000)
		manageCardPage.savingCardName('Initial Name')
		cy.contains('Manage your gift cards').should('be.visible')

		})
	})
})	