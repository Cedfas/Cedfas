export default class B2cHeader {

	linkLogo = () => cy.get('.navbar-brand')

	linkCart = () => cy.get('#lg-cart-link')

	cartItemCount = () => cy.get('.badge')

	// B2C Header Functions

	clickLinkCart() {
		this.linkCart().click()
	}

	linkLogo() {
		this.linkLogo().click()
	}

	// B2C Header Tests

	verifyCartItemCount(n) {
		this.cartItemCount().should('equal', n)
	}
}
