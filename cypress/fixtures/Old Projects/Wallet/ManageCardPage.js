export default class ManageCardPage {

	//Objects: Manage Cards Page

	buttonAddFunds = () => cy.get('#add-funds-button')

	buttonMainNavIcon = () => cy.get('#main-nav-icon')

	buttonEditPencil = () => cy.get('#card-art-edit-pencil')

	buttonAddCard = () => cy.get('#add-new-card-button')

	buttonAutoAddFunds = () => cy.contains('Auto add funds')

	buttonModifyAutoAddFunds = () => cy.contains('Modify auto add funds')

	//Objects: Top Up Pop up

	buttonTopUpAmount = () => cy.get('#topUpAmount')

	buttonTopUpInterval = () => cy.get('#topUpInterval')

	buttonTopUpStartDate = () => cy.get('#topUpStartDate')

	buttonTopUpPaymentMethod = () => cy.get('#topUpPayment')

	buttonUpdate = () => cy.get('.items-center > .justify-end > .primary-btn')

	//Objects: Pay with card

	buttonPayWithCard = () => cy.contains('Pay with card')
	
	buttonPayWithCardModify = () => cy.get('.flex-wrap > :nth-child(2) > .dialog-button > .secondary-btn')

	buttonPayWithCardCancel = () => cy.get('.modal-close-button > .absolute > .MuiSvgIcon-root > path')

	//Objects: Add Funds
		
	buttonAddAmountSelect = () => cy.get('#add-funds-button')

	buttonAddFundsAmount = () => cy.get('#add-funds-amount')
		
	buttonAddPaymentMethod = () => cy.get('#add-funds-payment')

	//Action: General Action

	esacpingWindow = () => {
		cy.get('body').type('{esc}')
	}

	//Actions: Add X

	clickAddFundsAmount = () => {
		this.buttonAddFundsAmount().click({ force: true })
	}

	clickAddFunds = () => {
		this.buttonAddFunds().click({ force: true })
	}

	clickAddAmountPayment = () => {
		this.buttonAddPaymentMethod().click({ force: true })
		//cy.focused().click({ force: true })  
	}

	addPaymentMethod = () => {
		this.buttonAddPaymentMethod().click()
		cy.get('.MuiList-root > [tabindex="-1"').click()
	}

	clickCloseButton = () => {
		cy.get('.modal-close-button > .absolute > path').click()
	}

	clickXAmount = (amount) => {
		cy.wait(2000)
		cy.get(amount).click({ force: true })
	}

	//Actions: Pay with Card (Manage Card Page)

	clickPayWithCard = () => this.buttonPayWithCard().click()

	clickPayWithCardModify = () => this.buttonPayWithCardModify().click()

	//Actions: Auto Add Funds

	clickModifyAutoAddFunds = () => {
		this.buttonModifyAutoAddFunds().click()
	}

	clickAutoAddFunds = () => {
		this.buttonAutoAddFunds().click()
	}

	updateAutoAddFundsTopUpAmount = (amount) => {
		this.buttonTopUpAmount().click()
		cy.get(amount).click({ force: true })
	}

	updateAutoAddFundsTopUpInterval = (Interval) => {
		this.buttonTopUpInterval().click({ force: true })
		cy.contains(Interval).click({ force: true })
	}

	updateAutoAddFundsTopUpStartDate = () => {
		this.buttonTopUpStartDate().click({ force: true })
		cy.focused().click({ force: true })  
	}

	updatedAutoAddFundsChangeTopUpPaymentMethod = () => {
		this.buttonTopUpPaymentMethod().click()
		cy.get('.Mui-selected').click({ force: true })
	}

	clickUpdateButton = () => {
		this.buttonUpdate().click({ force: true })
	}

	closingAutoAddFunds = () => {
		cy.get('.modal-close-button > .absolute > .fill-current').click()
		cy.contains('Manage your gift cards').should('be.visible')
	}

	//Actions: Pay with Card Pop Up 

	payWithCardAddFunds = () => {
		this.buttonAddFunds().click({ force: true })
	}

	payWithCardPopUpCloseButton = () => {
		cy.get('.float-right > .primary-btn').click()
	}

	savingCardName = (cardname) => {
		this.buttonEditPencil().click()
		cy.get('.MuiFormControl-root').type('{selectall}').type(cardname)
		cy.wait(2500)
		cy.get('.card-art-save-card').click()
	}

	//These items are not setup to be used, yet.

	cancelCardName = () => {
		this.buttonEditPencil().click()
		cy.get('.MuiFormControl-root').type('-1')
		cy.wait(2000)
		cy.get('.card-art-cancel-card').click()
	}

	addNewCard = () => {
		this.buttonAddCard().click()
		cy.get('.modal-close-button > .absolute > .fill-current').click()
		cy.contains('Manage your gift cards').should('be.visible')
	}
}