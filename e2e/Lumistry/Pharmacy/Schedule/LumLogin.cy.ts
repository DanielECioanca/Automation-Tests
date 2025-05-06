//LOGIN
describe ("Lumistry Login", () => {
    beforeEach (()=>{

        cy.session('Login', () => {
            cy.visit("https://pharmacy.uat.lumistry.com/login");
            cy.get("input[aria-label='Text field'][type='text']")
                .type('dcioanca+UAT-pharmacy-brand-1009@digitalpharmacist.com')
                .should('have.value', 'dcioanca+UAT-pharmacy-brand-1009@digitalpharmacist.com');
  
            cy.get("input[aria-label='Text field'][type='password']").type("9.iLgdJ@v!hi7RikfBcR")

            cy.get(".css-175oi2r.r-1awozwy.r-18u37iz.r-1777fci").click();
            cy.wait(2000)
    })
})
  

    it("Close iFrame Intercom", () => {
        //cy.wait(1000)
        cy.visit("https://pharmacy.uat.lumistry.com/login")
        //cy.wait(1000)
        cy.get('.intercom-launcher-frame').then(function($iframe){

            let iframeintercom = $iframe.contents().find('body')
            cy.wrap(iframeintercom)
            .should('exist')
            .click()
                //.intercom-1x1c1b9.e17z5v9w0 

            cy.get('[data-testid="ad8cc26e-f3d5-4903-a9fc-65d36b1674a9"] > :nth-child(2) > [style="background-color: rgb(255, 255, 255); border-style: solid; border-color: rgb(188, 200, 206); border-width: 1px; border-radius: 8px; width: auto; min-width: 90px;"] > [data-testid="select-location-button"] > .css-175oi2r').click();
        })
    })
})