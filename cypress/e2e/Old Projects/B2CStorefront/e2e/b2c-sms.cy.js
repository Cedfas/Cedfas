import { checkStrictMode } from 'ajv/dist/compile/util'
import B2cPage from '../../../page-objects/b2cstorefront/B2cPage'
import CartPage from '../../../page-objects/b2cstorefront/CartPage'
import CheckoutPage from '../../../page-objects/b2cstorefront/CheckoutPage'
import ChoosePage from '../../../page-objects/b2cstorefront/ChoosePage'
import PersonalizePage from '../../../page-objects/b2cstorefront/PersonalizePage'

const b2cPage = new B2cPage()
const choose = new ChoosePage()
const personalize = new PersonalizePage()
const cart = new CartPage()
const checkout = new CheckoutPage()

describe('B2C SMS Validation flow - TW Test', { testIsolation: false }, () => {
	it('Confirming SMS Validation is working on TW Test', () => {
			cy.visit('https://test-merchant.wgiftcard.com/responsive_auto/defaultcolorscheme/virtual')
			choose.clickNextStepButton()
			cy.get('[data-value="100"]').click({ force: true })
      // We are doing a $100 purchase since the purchase threshold in the JSON is set to Validate at $100
			personalize.clickThisIsForMeButton()
			personalize.clickAddToCartButton()
			cart.clickCheckoutButton()
        checkout.fillFirstName('QA')
        checkout.fillLasttName('Team')
        checkout.fillEmail('QA@transactionwireless.com')
        checkout.fillEmailConfirm('QA@transactionwireless.com')
        checkout.fillPhoneNumber('7703297523')
        checkout.fillAddressLineOne('9444 Waples St')
        checkout.fillCity('San Diego')
        checkout.selectDropdownState('CA')
        checkout.fillZip('30017')
        checkout.fillCreditCardNumber('4111')
        checkout.fillCvvNumber('111')
        checkout.clickOnSubmitOrderButton()
        checkout.verifyCheckoutPageTitle()
        checkout.fillSMS('SMSVerify')
      checkout.checkoutPageSMSPopUpField().should('have.value', 'SMSVerify')
  })

  it('Verifying the "Resend Functionality', () => {
          cy.intercept(
              {
                method: 'POST',
                url: '/responsive/checkout_responsive/ajaxResendOtp/defaultcolorscheme', 
              },
          ).as('SMSResend')
          checkout.checkoutPageSMSPopUpResendButton().click({ force: true })
            cy.wait('@SMSResend').then((SMSResend) => { 
              expect(SMSResend.response.statusCode).to.eq(200)
              expect(SMSResend.request.method).to.equal('POST')
              expect(SMSResend.response.body).to.contain('"status":"success"')
              cy.log(SMSResend.response.body)
          })
  })
  
  it('Verifying SMS Validation is skipped if a Landline Number is used.', () => {
    cy.clearAllCookies()
    cy.visit('https://test-merchant.wgiftcard.com/responsive_auto/defaultcolorscheme/virtual')
    choose.clickNextStepButton()
    cy.get('[data-value="100"]').click({ force: true })
    personalize.clickThisIsForMeButton()
    personalize.clickAddToCartButton()
    cart.clickCheckoutButton()
    checkout.verifyCheckoutPageTitle()
      checkout.checkAgreeCheckbox()
      checkout.fillFirstName('QA')
      checkout.fillLasttName('Team')
      checkout.fillEmail('QA@transactionwireless.com')
      checkout.fillEmailConfirm('QA@transactionwireless.com')
      checkout.fillPhoneNumber('7709793976')
      checkout.fillAddressLineOne('9444 Waples St')
      checkout.fillCity('San Diego')
      checkout.selectDropdownState('CA')
      checkout.fillZip('30017')
      checkout.fillCreditCardNumber('4111')
      checkout.fillCvvNumber('111')
      checkout.clickOnSubmitOrderButton()
      cy.contains('Unable to process credit card at this time.')
      //Verifying that the purchase was attempted.  We don't need to complete a purchase to verify the feature is working.
  })

})

  describe('Confirming Bug Fixes associated with SMS Validation', () => {
		it('Verifying that the T&C Checkbox is accessible if not clicked before completing the purchase', () => {
      cy.clearAllCookies()
			cy.visit('https://test-merchant.wgiftcard.com/responsive_auto/defaultcolorscheme/virtual')
			choose.clickNextStepButton()
			cy.get('[data-value="100"]').click({ force: true })
			personalize.clickThisIsForMeButton()
			personalize.clickAddToCartButton()
      cart.clickCheckoutButton()
			checkout.verifyCheckoutPageTitle()
        checkout.fillFirstName('QA')
        checkout.fillLasttName('Team')
        checkout.fillEmail('QA@transactionwireless.com')
        checkout.fillEmailConfirm('QA@transactionwireless.com')
        checkout.fillPhoneNumber('7709793976')
        checkout.fillAddressLineOne('9444 Waples St')
        checkout.fillCity('San Diego')
        checkout.selectDropdownState('CA')
        checkout.fillZip('30017')
        checkout.fillCreditCardNumber('4111')
        checkout.fillCvvNumber('111')
        checkout.clickOnSubmitOrderButton()
      checkout.TandCDialogBox().should('be.visible')
      })
        
	})