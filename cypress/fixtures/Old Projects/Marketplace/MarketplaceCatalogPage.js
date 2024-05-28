export default class MarketplaceCatalogPage {

	//Login Page:

	userLogin = () => cy.get('.amplify-input[name="username"]')

	passwordLogin = () => cy.get('.amplify-input[name="password"]')

	buttonLogin = () => cy.get('.amplify-button--primary')

	//Catalog Page:

	headerPointsContainer = () => cy.get('.layout_points_container__tPDnV')

	//Catalog > Categories

	catalogAll = () => cy.get('.catalog_category_item_selected_text__qopek')

	catalogBC = () => cy.get(':nth-child(2) > div  > a')

	catalogDS = () => cy.get(':nth-child(2) > :nth-child(3) > div  > a')

	catalogEE = () => cy.get(':nth-child(4) > div  > a')

	catalogFA = () => cy.get(':nth-child(5) > div  > a')

	catalogFGC = () => cy.get(':nth-child(6) > div  > a')

	catalogHB = () => cy.get(':nth-child(7) > div  > a')

	catalogHG = () => cy.get(':nth-child(8) > div  > a')

	catalogMA = () => cy.get(':nth-child(9) > div  > a')

	catalogNew = () => cy.get(':nth-child(10) > div  > a')

	catalogRB = () => cy.get(':nth-child(11) > div  > a')

	catalogRS = () => cy.get(':nth-child(12) > div  > a')

	catalogSO = () => cy.get(':nth-child(13) > div  > a')

	catalogT = () => cy.get(':nth-child(14) > div  > a')

	catalogWA = () => cy.get(':nth-child(15) > div  > a')

	catalogOther = () => cy.get(':nth-child(16) > div  > a')

	//Catalog > Search Bar

	searchBar = () => cy.get('#catalogTxtinput')

	//Catalog > Footer

	termsAndConditions = () => cy.get('.layout_footer__a_vOy > :nth-child(1) > a')

	//Card Actions

	buttonByEmail = () => cy.get(':nth-child(1) > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	buttonByMail = () => cy.get(':nth-child(2) > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	cardTarget = () => cy.get(':nth-child(94) > .catalog_catalog_item__wWyqw > .catalog_catalog_item_in__UgKY8')

	cardVenue1 = () => cy.get(':nth-child(104) > .catalog_catalog_item__wWyqw > .catalog_catalog_item_in__UgKY8')

	//Personalization

	// buttonSendToMyself = () => cy.get('.detail_slider__Zrf8W')

	fieldEmail = () => cy.get('#recipientEmail')

	buttonDetailsCheckout = () => cy.get(':nth-child(2) > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	fieldFirstName = () => cy.get('#fname')

	fieldLastName = () => cy.get('#lname')

	fieldRecipientPhone = () => cy.get('#shipping_recipientPhone')

	fieldRecipientAddress1 = () => cy.get('#shipping_recipientAddress1')

	fieldRecipientAddress2 = () => cy.get('#shipping_recipientAddress2')

	fieldRecipientCity = () => cy.get('#shipping_recipientCity')

	fieldRecipientState = () => cy.get('#shipping_recipientState')

	fieldRecipientZip = () => cy.get('#shipping_recipientZip')

	fieldRecipientEmail = () => cy.get('#recipientEmail')

	fieldRecipientMessage = () => cy.get('#message')

	breadcrumbCardDetails = () => cy.get('.MuiBreadcrumbs-ol > :nth-child(5) > .MuiTypography-root')

	breadcrumbCardSelection = () => cy.get('.MuiBreadcrumbs-ol > :nth-child(3) > .MuiTypography-root')
	
	breadcrumbHome = () => cy.get('.MuiBreadcrumbs-ol > :nth-child(1) > .MuiTypography-root')

	//Checkout

	buttonEdit = () => cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiTypography-root')

	fieldShippingFirstName = () => cy.get('#shipping_firstName')

	fieldShippingLastName = () => cy.get('#shipping_lastName')

	fieldShippingPhoneNumber = () => cy.get('#shipping_phone')

	fieldShippingAddress1 = () => cy.get('#shipping_addressLine1')

	fieldShippingAddress2 = () => cy.get('#shipping_addressLine2')

	fieldShippingCity = () => cy.get('#shipping_city')

	fieldShippingState = () => cy.get('#shipping_state')

	fieldShippingZip = () => cy.get('#shipping_zipCode')

	buttonTCandPPEmail = () => cy.get('.PrivateSwitchBase-input')

	buttonTCandPPPlastic = () => cy.get('.MuiCheckbox-root > .PrivateSwitchBase-input')

	buttonTCLink = () => cy.get('.checkout_terms___Hdu8 > p > a')

	buttonCloseTCLink = () => cy.get('[data-testid="CloseIcon"]')

	buttonCheckout = () => cy.get('.buttonGroup_button__uItDH > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	buttonPlasticCheckOut = () => cy.get('.buttonGroup_button__uItDH > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	buttonUSPS = () => cy.get(':nth-child(1) > .checkout_shipping_option_button__rM8Il > .MuiFormControlLabel-root > .MuiRadio-root > .PrivateSwitchBase-input')

	//Confirmation

	buttonHome = () => cy.get('.confirmation_buttons_flex___1uLF > :nth-child(2)')

	buttonCatalog = () => cy.get(':nth-child(1) > .utils_focusDiv__g5KLm > .MuiButtonBase-root')

	//Actions

	//Actions > Login

	

	typeUserLogin = (userinfo) => {
		this.userLogin().type(userinfo)
	}

	typePasswordLogin = (passwordinfo) => {
		this.passwordLogin().type(passwordinfo)
	}

	clickButtonLogin = () => {
		this.buttonLogin().click()
	}

	loginNoMfa = (rootUrl, userinfo2, passwordinfo2) => {
		cy.session(userinfo2, () => {
			cy.visit(rootUrl)
			this.typeUserLogin(userinfo2)
			this.typePasswordLogin(passwordinfo2)
			this.clickButtonLogin()
			cy.wait(13000)
			this.headerPointsContainer().should('be.visible')
		})
	}

	//Actions > Categories

	clickCatalogBC = () => {
		this.catalogBC().click()
	}

	clickCatalogDS = () => {
		this.catalogDS().click()
	}

	clickCatalogEE = () => {
		this.catalogEE().click()
	}

	clickCatalogFA = () => {
		this.catalogFA().click()
	}

	clickCatalogFGC = () => {
		this.catalogFGC().click()
	}

	clickCatalogHB = () => {
		this.catalogHB().click()
	}

	clickCatalogHG = () => {
		this.catalogHG().click()
	}

	clickCatalogMA = () => {
		this.catalogMA().click()
	}

	clickCatalogNew = () => {
		this.catalogNew().click()
	}

	clickCatalogRB = () => {
		this.catalogRB().click()
	}

	clickCatalogRS = () => {
		this.catalogRS().click()
	}

	clickCatalogSO = () => {
		this.catalogSO().click()
	}

	clickCatalogT = () => {
		this.catalogT().click()
	}

	clickCatalogWA = () => {
		this.catalogWA().click()
	}

	clickCatalogOther = () => {
		this.catalogOther().click()
	}

	clickCatalogAll = () => {
		this.catalogAll().click()
	}

	//Actions > Search Bar

	useSearchBar = (card) => {
		this.searchBar().type(card)
	}

	//Actions > Footer

	clickTermsandConditions = () => {
		this.termsAndConditions().click()
	}

	//Action > Card

	clickCardTarget = () => {
		this.cardTarget().click()
	}

	clickCardVenue1 = () => {
		this.cardVenue1().click()
	}

	clickButtonByEmail = () => {
		this.buttonByEmail().click()
	}

	clickButtonByMail = () => {
		this.buttonByMail().click()
	}

	//Action > Card Details

	clickButtonSendToMyself = () => {
		this.buttonSendToMyself().click()
	}

	clickButtonDetailsCheckout = () => {
		this.buttonDetailsCheckout().click()
	}

	typeFieldFirstName = (fname) => {
		this.fieldFirstName().type(fname)
	}

	typeFieldLastName = (lname) => {
		this.fieldLastName().type(lname)
	}

	typeFieldRecipientPhone = (phone) => {
		this.fieldRecipientPhone().type(phone)
	}

	typeFieldRecipientAddress1 = (address1) => {
		this.fieldRecipientAddress1().type(address1)
	}

	typeFieldRecipientAddress2 = (address2) => {
		this.fieldRecipientAddress2().type(address2)
	}

	typeFieldRecipientCity = (city) => {
		this.fieldRecipientCity().type(city)
	}

	clickFieldRecipientState = (state) => {
		this.fieldRecipientState().click()
		cy.get(state).click()
	}

	typeFieldRecipientZip = (zip) => {
		this.fieldRecipientZip().type(zip)
	}

	typeFieldRecipientEmail = (email) => {
		this.fieldRecipientEmail().type(email)
	}

	typeFieldRecipientMessage = (message) => {
		this.fieldRecipientMessage().type(message)
	}

	clickBreadCrumbCardDetails = () => {
		this.breadcrumbCardDetails().click({ force: true })
	}

	clickBreadCrumbCardSelection = () => {
		this.breadcrumbCardSelection().click({ force: true })
	}

	clickBreadCrumbHome = () => {
		this.breadcrumbHome().click()
	}

	//Action > Checkout

	typeFieldShippingFirstName = (sfname) => {
		this.fieldShippingFirstName().type(sfname)
	}

	typeFieldShippingLastName = (slname) => {
		this.fieldShippingLastName().type(slname)
	}

	typeFieldShippingPhoneNumber = (spnumber) => {
		this.fieldShippingPhoneNumber().type(spnumber)
	}

	typeFieldShippingAddress1 = (saddress1) => {
		this.fieldShippingAddress1().type(saddress1)
	}

	typeFieldShippingAddress2 = (saddress2) => {
		this.fieldShippingAddress2().type(saddress2)
	}

	typeFieldShippingCity = (scity) => {
		this.fieldShippingCity().type(scity)
	}

	clickFieldRecipientShippingState = (sstate) => {
		this.fieldShippingState().click()
		cy.get(sstate).click()
	}

	typeFieldShippingZip = (szip) => {
		this.fieldShippingZip().type(szip)
	}

	clickButtonEdit = () => {
		this.buttonEdit().click()
	}

	clickButtonTCandPPEmail = () => {
		this.buttonTCandPPEmail().click()
	}

	clickButtonTCandPPPlastic = () => {
		this.buttonTCandPPPlastic().click()
	}

	clickButtonTCLink = () => {
		this.buttonTCLink().click()
	}

	clickButtonCloseTCLink = () => {
		this.buttonCloseTCLink().click()
	}

	clickButtonCheckOut = () => {
		this.buttonCheckout().click()
	}

	clickButtonPlasticCheckOut = () => {
		this.buttonPlasticCheckOut().click()
	}

	clickButtonUSPS = () => {
		this.buttonUSPS().click()
	}
	
	//Action > Confirmation

	clickButtonHome = () => {
		this.buttonHome().click()
	}

	clickButtonCatalog = () => {
		this.buttonCatalog().click()
	}
}
