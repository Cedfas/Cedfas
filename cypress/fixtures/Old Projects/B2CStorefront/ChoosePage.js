export default class ChoosePage {
	buttonNextStep = () => cy.get('#btnChooseNext1')

	choosePageTitle = () => cy.get('.pageTitle')

	clickNextStepButton() {
		this.buttonNextStep().click()
		cy.wait(2000)
	}

	verifyPageTitle() {
		this.choosePageTitle().contains('Choose')
	}
}
