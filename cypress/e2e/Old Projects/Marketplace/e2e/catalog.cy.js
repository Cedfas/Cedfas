import { userMarketplace, pwdMarketplace } from '../../../../../config'
import MPCP from '../../../../page-objects/tw-marketplace/MarketplaceCatalogPage'

const marketplaceCatalogPage = new MPCP()

export function runMarketplaceTest(urlRoot) {

	describe('Checking Categories', { testIsolation: false }, () => {

		before('Logging into Marketplace',() => {
			marketplaceCatalogPage.loginNoMfa(urlRoot, userMarketplace, pwdMarketplace)
		})

		it('All', () => {
			marketplaceCatalogPage.clickCatalogAll()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 118)
				.then(brand => {
					expect(brand[0]).to.contain.text('1-800-Flowers.com')
					expect(brand[117]).to.contain.text('Zappos.com')
				})
		})

		it('Babies and Children Filter Shows Correct Cards', () => {
			marketplaceCatalogPage.clickCatalogBC()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 10)
				.then(brand => {
					expect(brand[0]).to.contain.text('adidas')
					expect(brand[1]).to.contain.text('Foot Locker')
					expect(brand[2]).to.contain.text('Gap')
					expect(brand[3]).to.contain.text('L.L.Bean')
					expect(brand[4]).to.contain.text('Old Navy')
					expect(brand[5]).to.contain.text('Saks Fifth Avenue OFF 5TH')
					expect(brand[6]).to.contain.text('Target')
					expect(brand[7]).to.contain.text('The Children')
					expect(brand[8]).to.contain.text('Walmart')
					expect(brand[9]).to.contain.text('Zappos.com')
				})
		})

		it('Department Stores', () => {
			marketplaceCatalogPage.clickCatalogDS()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 9)
				.then(brand => {
					expect(brand[0]).to.contain.text('Bloomingdale')
					expect(brand[1]).to.contain.text('Home Depot')
					expect(brand[2]).to.contain.text('Kohl')
					expect(brand[3]).to.contain.text('Marshalls')
					expect(brand[4]).to.contain.text('Nordstrom')
					expect(brand[5]).to.contain.text('Nordstrom Rack')
					expect(brand[6]).to.contain.text('Saks Fifth Avenue OFF 5TH')
					expect(brand[7]).to.contain.text('T.J.Maxx')
					expect(brand[8]).to.contain.text('Target')
				})
		})

		it('Entertainment and Electronics', () => {
			marketplaceCatalogPage.clickCatalogEE()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 14)
				.then(brand => {
					expect(brand[0]).to.contain.text('AMC Theatres')
					expect(brand[1]).to.contain.text('Barnes & Noble')
					expect(brand[2]).to.contain.text('Cinemark')
					expect(brand[3]).to.contain.text('Crutchfield')
					expect(brand[4]).to.contain.text('eBay')
					expect(brand[5]).to.contain.text('Fandango')
					expect(brand[6]).to.contain.text('GameStop')
					expect(brand[7]).to.contain.text('Google Play')
					expect(brand[8]).to.contain.text('Great American Days')
					expect(brand[9]).to.contain.text('Groupon')
					expect(brand[10]).to.contain.text('SiriusXM')
					expect(brand[11]).to.contain.text('StubHub')
					expect(brand[12]).to.contain.text('ThinkGeek')
					expect(brand[13]).to.contain.text('Walmart')
				})
		})

		it('Fashion Accessories', () => {
			marketplaceCatalogPage.clickCatalogFA()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 3)
				.then(brand => {
					expect(brand[0]).to.contain.text('Marshalls')
					expect(brand[1]).to.contain.text('T.J.Maxx')
					expect(brand[2]).to.contain.text('Zappos.com')
				})
		})

		it('Features Gift Cards', () => {
			marketplaceCatalogPage.clickCatalogFGC()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 6)
				.then(brand => {
					expect(brand[0]).to.contain.text('Dunkin')
					expect(brand[1]).to.contain.text('eBay')
					expect(brand[2]).to.contain.text('Home Depot')
					expect(brand[3]).to.contain.text('Sephora')
					expect(brand[4]).to.contain.text('Target')
					expect(brand[5]).to.contain.text('Walmart')
				})
		})

		it('Health & Beauty', () => {
			marketplaceCatalogPage.clickCatalogHB()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 7)
				.then(brand => {
					expect(brand[0]).to.contain.text('Bath & Body Works')
					expect(brand[1]).to.contain.text('Bloomingdale')
					expect(brand[2]).to.contain.text('FragranceNet.com')
					expect(brand[3]).to.contain.text('Groupon')
					expect(brand[4]).to.contain.text('Nordstrom')
					expect(brand[5]).to.contain.text('Nordstrom Rack')
					expect(brand[6]).to.contain.text('Sephora')
				})
		})

		it('Home Goods', () => {
			marketplaceCatalogPage.clickCatalogHG()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 12)
				.then(brand => {
					expect(brand[0]).to.contain.text('1-800-Flowers.com')
					expect(brand[1]).to.contain.text('CanvasPop')
					expect(brand[2]).to.contain.text('CB2')
					expect(brand[3]).to.contain.text('Cheryl')
					expect(brand[4]).to.contain.text('Crate & Barrel')
					expect(brand[5]).to.contain.text('eBay')
					expect(brand[6]).to.contain.text('Home Depot')
					expect(brand[7]).to.contain.text('HomeGoods')
					expect(brand[8]).to.contain.text('Overstock.com')
					expect(brand[9]).to.contain.text('Saks Fifth Avenue OFF 5TH')
					expect(brand[10]).to.contain.text('Shutterfly')
					expect(brand[11]).to.contain.text('Staples')
				})
		})

		it('Mens Apparel', () => {
			marketplaceCatalogPage.clickCatalogMA()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 18)
				.then(brand => {
					expect(brand[0]).to.contain.text('adidas')
					expect(brand[1]).to.contain.text('Banana Republic')
					expect(brand[2]).to.contain.text('Belk')
					expect(brand[3]).to.contain.text('eBay')
					expect(brand[4]).to.contain.text('Express')
					expect(brand[5]).to.contain.text('Foot Locker')
					expect(brand[6]).to.contain.text('Gap')
					expect(brand[7]).to.contain.text('Hollister')
					expect(brand[8]).to.contain.text('L.L.Bean')
					expect(brand[9]).to.contain.text('Marshalls')
					expect(brand[10]).to.contain.text('Nordstrom')
					expect(brand[11]).to.contain.text('Nordstrom Rack')
					expect(brand[12]).to.contain.text('Old Navy')
					expect(brand[13]).to.contain.text('Saks Fifth Avenue OFF 5TH')
					expect(brand[14]).to.contain.text('T.J.')
					expect(brand[15]).to.contain.text('Target')
					expect(brand[16]).to.contain.text('Walmart')
					expect(brand[17]).to.contain.text('Zappos.com')
				})
		})

		it('New', () => {
			marketplaceCatalogPage.clickCatalogNew()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 10)
				.then(brand => {
					expect(brand[0]).to.contain.text('Bloomingdale')
					expect(brand[1]).to.contain.text('Dunkin')
					expect(brand[2]).to.contain.text('Golden Nugget')
					expect(brand[3]).to.contain.text('Hollister')
					expect(brand[4]).to.contain.text('Nordstrom')
					expect(brand[5]).to.contain.text('Nordstrom Rack')
					expect(brand[6]).to.contain.text('Royal Caribbean')
					expect(brand[7]).to.contain.text('San Luis Resort')
					expect(brand[8]).to.contain.text('SiriusXM')
					expect(brand[9]).to.contain.text('ThinkGeek')
				})
		})

		it('Restaurants & Beverages', () => {
			marketplaceCatalogPage.clickCatalogRB()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 31)
				.then(brand => {
					expect(brand[0]).to.contain.text('Aquarium Restaurants')
					expect(brand[1]).to.contain.text('Buca di Beppo')
					expect(brand[2]).to.contain.text('Burger King')
					expect(brand[3]).to.contain.text('Cadillac Bar')
					expect(brand[4]).to.contain.text('California Pizza Kitchen')
					expect(brand[5]).to.contain.text('Chart House')
					expect(brand[6]).to.contain.text('Chipotle')
					expect(brand[7]).to.contain.text('Cold Stone Creamery')
					expect(brand[8]).to.contain.text('Darden Restaurants')
					expect(brand[9]).to.contain.text('Dunkin')
					expect(brand[10]).to.contain.text('Golden Nugget')
					expect(brand[11]).to.contain.text('Grotto')
					expect(brand[12]).to.contain.text('Groupon')
					expect(brand[13]).to.contain.text('IHOP')
					expect(brand[14]).to.contain.text('La Griglia')
					expect(brand[15]).to.contain.text('Landry')
					expect(brand[16]).to.contain.text('Legal Sea Foods & Legal C Bar')
					expect(brand[17]).to.contain.text('Maggiano')
					expect(brand[18]).to.contain.text('O')
					expect(brand[19]).to.contain.text('Omaha Steaks')
					expect(brand[20]).to.contain.text('Red Lobster')
					expect(brand[21]).to.contain.text('Red Robin')
					expect(brand[22]).to.contain.text('Saltgrass Steak House')
					expect(brand[23]).to.contain.text('San Luis Resort')
					expect(brand[24]).to.contain.text('Sheetz')
					expect(brand[25]).to.contain.text('The Cheesecake Factory')
					expect(brand[26]).to.contain.text('The Oceanaire')
					expect(brand[27]).to.contain.text('The Popcorn Factory')
					expect(brand[28]).to.contain.text('Willie G')
					expect(brand[29]).to.contain.text('Wine.com')
					expect(brand[30]).to.contain.text('Yard House')
				})
		})

		it('Retail - Specialty', () => {
			marketplaceCatalogPage.clickCatalogRS()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 1)
				.then(brand => {
					expect(brand[0]).to.contain.text('Target')
				})
		})

		it('Sports & Outdoors', () => {
			marketplaceCatalogPage.clickCatalogSO()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 7)
				.then(brand => {
					expect(brand[0]).to.contain.text('adidas')
					expect(brand[1]).to.contain.text('Champs Sports')
					expect(brand[2]).to.contain.text('Columbia Sportswear')
					expect(brand[3]).to.contain.text('Fanatics')
					expect(brand[4]).to.contain.text('Foot Locker')
					expect(brand[5]).to.contain.text('NASCAR.com')
					expect(brand[6]).to.contain.text('NFLShop.com')
				})
		})

		it('Travel', () => {
			marketplaceCatalogPage.clickCatalogT()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 6)
				.then(brand => {
					expect(brand[0]).to.contain.text('American Airlines')
					expect(brand[1]).to.contain.text('Celebrity Cruises')
					expect(brand[2]).to.contain.text('Delta Air Lines')
					expect(brand[3]).to.contain.text('Groupon')
					expect(brand[4]).to.contain.text('Royal Caribbean')
					expect(brand[5]).to.contain.text('TripGift')
				})
		})

		it('Womens Apparel', () => {
			marketplaceCatalogPage.clickCatalogWA()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 22)
				.then(brand => {
					expect(brand[0]).to.contain.text('adidas')
					expect(brand[1]).to.contain.text('Aerie')
					expect(brand[2]).to.contain.text('Athleta')
					expect(brand[3]).to.contain.text('Banana Republic')
					expect(brand[4]).to.contain.text('Belk')
					expect(brand[5]).to.contain.text('Bloomingdale')
					expect(brand[6]).to.contain.text('eBay')
					expect(brand[7]).to.contain.text('Express')
					expect(brand[8]).to.contain.text('Foot Locker')
					expect(brand[9]).to.contain.text('Gap')
					expect(brand[10]).to.contain.text('Hollister')
					expect(brand[11]).to.contain.text('L.L.Bean')
					expect(brand[12]).to.contain.text('Marshalls')
					expect(brand[13]).to.contain.text('Nordstrom')
					expect(brand[14]).to.contain.text('Nordstrom Rack')
					expect(brand[15]).to.contain.text('Old Navy')
					expect(brand[16]).to.contain.text('Saks Fifth Avenue OFF 5TH')
					expect(brand[17]).to.contain.text('T.J.Maxx')
					expect(brand[18]).to.contain.text('Target')
					expect(brand[19]).to.contain.text('Walmart')
					expect(brand[20]).to.contain.text('White House Black Market')
					expect(brand[21]).to.contain.text('Zappos.com')
				})
		})

		it('Other', () => {
			marketplaceCatalogPage.clickCatalogOther()
			cy.get(
				'.catalog_catalog_cont__0TxqI > .catalog_catalog_item_wrapper__W5AqM'
			)
				.should('have.length', 29)
				.then(brand => {
					expect(brand[0]).to.contain.text('Amtrak')
					expect(brand[1]).to.contain.text('AutoZone')
					expect(brand[2]).to.contain.text('Bloomin')
					expect(brand[3]).to.contain.text('Bob Evans Restaurants')
					expect(brand[4]).to.contain.text('Chico')
					expect(brand[5]).to.contain.text('DoorDash')
					expect(brand[6]).to.contain.text('DSW')
					expect(brand[7]).to.contain.text('FENDER PLAY')
					expect(brand[8]).to.contain.text('Guitar Center')
					expect(brand[9]).to.contain.text('Home Chef')
					expect(brand[10]).to.contain.text('lululemon')
					expect(brand[11]).to.contain.text('P.F. Chang')
					expect(brand[12]).to.contain.text('Razer Gold')
					expect(brand[13]).to.contain.text('Saks Fifth Avenue')
					expect(brand[14]).to.contain.text('Sam')
					expect(brand[15]).to.contain.text('Soothe')
					expect(brand[16]).to.contain.text('Strip House')
					expect(brand[17]).to.contain.text('Texas Roadhouse')
					expect(brand[18]).to.contain.text('Topgolf')
					expect(brand[19]).to.contain.text('Venue 1')
					expect(brand[20]).to.contain.text('Venue 2')
					expect(brand[21]).to.contain.text('Venue 3')
					expect(brand[22]).to.contain.text('Venue 4 - Resorts One Mimosa')
					expect(brand[23]).to.contain.text('Venue 4 - Resorts One Suite')
					expect(brand[24]).to.contain.text('Venue 5 - Fine Dining')
					expect(brand[25]).to.contain.text('Venue 5 - Prepaid')
					expect(brand[26]).to.contain.text('Wayfair')
					expect(brand[27]).to.contain.text('west elm')
					expect(brand[28]).to.contain.text('Williams Sonoma')
				})
		})

	})

	describe('Using Search Bar',  { testIsolation: false }, () => {
		// before(function () {
		// 	cy.reload()
		// })

		it('Search Bar - Single Brand', () => {
			cy.wait(5000)
			marketplaceCatalogPage.useSearchBar('adidas')
			cy.wait(2000)
			cy.contains('adidas')
		})

		it('Search Bar - Multi-Brand', () => {
			cy.wait(5000)
			marketplaceCatalogPage.searchBar().clear()
			marketplaceCatalogPage.useSearchBar('Venue')
			cy.wait(2000)
			cy.contains('Venue 1')
			cy.contains('Venue 2')
			cy.contains('Venue 3')
		})
	})

	describe('Verifying Terms and Conditions',  { testIsolation: false }, () => {

		it('Verifying T&C Catalog', () => {
			marketplaceCatalogPage.searchBar().clear()
			cy.wait(5000)
			marketplaceCatalogPage.clickTermsandConditions()
			//User will have to verify the page manually and close it to view the rest of the steps.
			//I may add a check here if I can figure one out.
		})

		it('Verifying T&C Checkout', () => {
			cy.wait(5000)
			marketplaceCatalogPage.clickCardTarget()
			cy.contains('By Email')
			marketplaceCatalogPage.clickButtonByEmail()
			cy.contains('Delivery')
			marketplaceCatalogPage.clickButtonDetailsCheckout()
			cy.wait(3000)
			marketplaceCatalogPage.clickButtonTCLink()
			cy.get('.MuiPaper-root > iframe').should('exist')
			marketplaceCatalogPage.clickButtonCloseTCLink()
			cy.contains('Terms of Use and Privacy Policy')
			marketplaceCatalogPage.clickBreadCrumbCardSelection()
		})
	})

	// describe('Verifying Breadcrumb & Home button feature',  { testIsolation: false }, () => {

	// 	it('Verifying Home Button URL', () => {
	// 		cy.wait(8000)
	// 		marketplaceCatalogPage.clickCardTarget()
	// 		marketplaceCatalogPage.clickButtonByEmail()
	// 		marketplaceCatalogPage.clickBreadCrumbHome()
	// 		cy.url().should('eq', 'https://www.fiserv.com/')
	// 	})

	// 	it('Verifying BreadCrumb Links', () => {
	// 		cy.visit(urlRoot)
	// 		cy.wait(8000)
	// 		marketplaceCatalogPage.clickCardTarget()
	// 		marketplaceCatalogPage.clickButtonByEmail()
	// 		marketplaceCatalogPage.clickButtonSendToMyself()
	// 		marketplaceCatalogPage.clickButtonDetailsCheckout()
	// 		marketplaceCatalogPage.clickBreadCrumbCardDetails()
	// 		cy.contains('Delivery')
	// 		marketplaceCatalogPage.clickBreadCrumbCardSelection()
	// 		cy.contains('Categories')
	// 		marketplaceCatalogPage.clickCardTarget()
	// 		marketplaceCatalogPage.clickButtonByEmail()
	// 		marketplaceCatalogPage.clickBreadCrumbHome()
	// 		cy.url().should('eq', 'https://www.fiserv.com/')
	// 	})
	// })

	describe('Virtual Purchase - "Send to myself" Flow',  { testIsolation: false }, () => {
		// before(function () {
		// 	cy.visit(urlRoot)
		// })

		it('Virtual - Card Selection', () => {
			cy.wait(5000)
			marketplaceCatalogPage.clickCardTarget()
			cy.contains('By Email')
			marketplaceCatalogPage.clickButtonByEmail()
			cy.contains('Delivery')
		})

		it('Virtual - Card Details Page', () => {
			// marketplaceCatalogPage.clickButtonSendToMyself()
			marketplaceCatalogPage.fieldEmail().should('be.visible')
			marketplaceCatalogPage.clickButtonDetailsCheckout()
			cy.contains('Order Summary')
		})

		it('Virtual - Card Checkout Page', () => {
			marketplaceCatalogPage.clickButtonTCandPPEmail()
			marketplaceCatalogPage.buttonTCandPPEmail().should('be.checked')
			marketplaceCatalogPage.clickBreadCrumbCardSelection()
		})

		// it('Virtual - Confirmation Page', () => {
		// 	cy.wait(8000)
		// 	cy.contains('Thank you!')
		// 	marketplaceCatalogPage.clickButtonCatalog()
		// 	cy.wait(8000)
		// })
	})

	// describe('Virtual Purchase - "Send to someone else" Flow',  { testIsolation: false }, () => {

	// 	it('Virtual - Card Selection', () => {
	// 		cy.wait(8000)
	// 		marketplaceCatalogPage.clickCardTarget()
	// 		cy.contains('By Email')
	// 		cy.wait(500)
	// 		marketplaceCatalogPage.clickButtonByEmail()
	// 		cy.contains('Delivery')
	// 	})

	// 	it('Virtual - Card Details Page', () => {
	// 		marketplaceCatalogPage.typeFieldFirstName('QA')
	// 		marketplaceCatalogPage.typeFieldLastName('Gyft')
	// 		marketplaceCatalogPage.typeFieldRecipientEmail('qa@transactionwireless.com')
	// 		marketplaceCatalogPage.typeFieldRecipientMessage('QA PM')
	// 		marketplaceCatalogPage.clickButtonDetailsCheckout()
	// 		cy.contains('Order Summary')
	// 	})

	// 	it('Virtual - Card Checkout Page', () => {
	// 		cy.wait(8000)
	// 		marketplaceCatalogPage.clickButtonTCandPPEmail()
	// 		marketplaceCatalogPage.buttonTCandPPEmail().should('be.checked')
	// 		marketplaceCatalogPage.clickButtonCheckOut()
	// 		cy.contains('Thank you!')
	// 	})
	// })

	describe('Plastic Purchase Flow',  { testIsolation: false }, () => {

		it('Plastic - Card Selection', () => {
			cy.wait(5000)
			marketplaceCatalogPage.clickCardVenue1()
			cy.contains('By Mail')
			cy.wait(500)
			marketplaceCatalogPage.clickButtonByMail()
			cy.contains('Delivery')
		})

		it('Plastic - Card Details Page', () => {
			marketplaceCatalogPage.fieldShippingFirstName().should('be.visible')
			marketplaceCatalogPage.typeFieldShippingFirstName('QA')
			marketplaceCatalogPage.typeFieldShippingLastName('Gyft')
			marketplaceCatalogPage.typeFieldShippingAddress1('9444 Waples Rd')
			marketplaceCatalogPage.typeFieldShippingAddress2('Apt 405')
			marketplaceCatalogPage.typeFieldShippingPhoneNumber('7703297523')
			marketplaceCatalogPage.typeFieldShippingCity('San Diego')
			marketplaceCatalogPage.clickFieldRecipientShippingState('[data-value="CA"]')
			marketplaceCatalogPage.typeFieldShippingZip('92121')
			marketplaceCatalogPage.clickButtonDetailsCheckout()
			cy.contains('Order Summary')
		})

		it('Plastic - Card Checkout Page > Edit Address', () => {
			marketplaceCatalogPage.clickButtonEdit()
			marketplaceCatalogPage.fieldShippingFirstName().should('be.visible')
			marketplaceCatalogPage.fieldShippingLastName().should('be.visible')
			marketplaceCatalogPage.fieldShippingPhoneNumber().should('be.visible')
			marketplaceCatalogPage.fieldShippingAddress1().should('be.visible')
			marketplaceCatalogPage.fieldShippingAddress2().should('be.visible')
			marketplaceCatalogPage.fieldShippingCity().should('be.visible')
			marketplaceCatalogPage.fieldShippingZip().should('be.visible')
		})

		it('Plastic - Card Checkout Page > Update and Verify Address', () => {
			marketplaceCatalogPage.fieldShippingFirstName().clear()
			marketplaceCatalogPage.fieldShippingLastName().clear()
			marketplaceCatalogPage.fieldShippingPhoneNumber().clear()
			marketplaceCatalogPage.fieldShippingAddress1().clear()
			marketplaceCatalogPage.fieldShippingAddress2().clear()
			marketplaceCatalogPage.fieldShippingCity().clear()
			marketplaceCatalogPage.fieldShippingZip().clear()
			marketplaceCatalogPage.typeFieldShippingFirstName('1')
			marketplaceCatalogPage.typeFieldShippingLastName('1')
			marketplaceCatalogPage.typeFieldShippingPhoneNumber('1')
			marketplaceCatalogPage.typeFieldShippingAddress1('1')
			marketplaceCatalogPage.typeFieldShippingAddress2('1')
			marketplaceCatalogPage.typeFieldShippingCity('1')
			marketplaceCatalogPage.typeFieldShippingZip('30017')
			marketplaceCatalogPage.fieldShippingFirstName().should('have.value', '1')
			marketplaceCatalogPage.fieldShippingLastName().should('have.value', '1')
			marketplaceCatalogPage.fieldShippingPhoneNumber().should('have.value', '1')
			marketplaceCatalogPage.fieldShippingAddress1().should('have.value', '1')
			marketplaceCatalogPage.fieldShippingAddress2().should('have.value', '1')
			marketplaceCatalogPage.fieldShippingCity().should('have.value', '1')
			marketplaceCatalogPage.clickFieldRecipientShippingState('[data-value="GA"]')
			marketplaceCatalogPage.fieldShippingZip().should('have.value', '30017')
		})

		it('Plastic - Card Checkout Page > Verify Original Address', () => {
			marketplaceCatalogPage.clickButtonEdit()
			// cy.contains('QA')  <--- Currently Bugged
			// cy.contains('Gyft') <---Currently Bugged
			cy.contains('(770) 329-7523')
			cy.contains('9444 WAPLES ST')
			cy.contains('STE 405')
			cy.contains('SAN DIEGO')
			cy.contains('CA')
			cy.contains('92121')
			//The address in this "it" statement is different because our Marketplace does address validation.  The info above is
			//verifying that feature along with our submitted address.
		})

		it('Plastic - Card Checkout Page', () => {
			marketplaceCatalogPage.clickButtonUSPS()
			marketplaceCatalogPage.clickButtonTCandPPPlastic()
			marketplaceCatalogPage.buttonTCandPPPlastic().should('be.checked')
			// marketplaceCatalogPage.clickButtonCheckOut()
		})

		// it('Plastic - Confirmation Page', () => {
		// 	cy.wait(8000)
		// 	cy.contains('Thank you!')
		// })
	})
}

