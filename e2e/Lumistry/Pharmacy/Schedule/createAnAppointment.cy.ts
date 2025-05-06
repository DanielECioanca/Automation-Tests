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
            //cy.get('[data-testid="81d59c1e-71c1-4148-9cf9-b34daffc32d8"] > :nth-child(2) > .r-1phboty > [data-testid="select-location-button"] > .css-175oi2r > [data-testid="button-label"]').click();
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

            //cy.get('[data-testid="ad8cc26e-f3d5-4903-a9fc-65d36b1674a9"] > :nth-child(2) > [style="background-color: rgb(255, 255, 255); border-style: solid; border-color: rgb(188, 200, 206); border-width: 1px; border-radius: 8px; width: auto; min-width: 90px;"] > [data-testid="select-location-button"] > .css-175oi2r').click();
        cy.get('[data-testid="81d59c1e-71c1-4148-9cf9-b34daffc32d8"] > :nth-child(2) > .r-1phboty > [data-testid="select-location-button"] > .css-175oi2r > [data-testid="button-label"]').click();   
        })
    })
})

describe ("Schedule Page", () => {
    
    it("SCHEDULE PAGE", () => {
        cy.visit("https://pharmacy.uat.lumistry.com/dashboard")
        cy.url()
            .should('include', '/dashboard')
        // click on SCHEDULE > Services
    
        cy.get('.r-gu0qjt > :nth-child(4) > .css-146c3p1').click( {multiple: true} );
        cy.url()
            .should('include', '/schedule/calendar')

        cy.get('.intercom-launcher-frame').then(function($iframe){

            let iframeintercom = $iframe.contents().find('body')
            cy.wrap(iframeintercom)
            .should('exist')
            .click()
                //.intercom-1x1c1b9.e17z5v9w0  

        })
    })
})

describe ("Create New Appointment", () => {
    
    it("Go to New Appointment page", () => {
        cy.get('[data-testid="new-appointment-button"] > .css-175oi2r > [data-testid="button-label"]').click();
        cy.url()
            .should('include', '/new-appointment')

})

    it("Select Type of Service", () => {
        
        cy.get(':nth-child(1) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control > .css-1wy0on6')
        .should('be.visible')
        cy.get(':nth-child(1) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control > .css-1wy0on6 > .css-fke1ie-indicatorContainer')
        .should('be.visible')

        cy.get(':nth-child(1) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control > .css-1d8n9bt > .css-ackcql').click();
        cy.get('div.css-26l3qy-menu > div.css-11unzgr > div.css-1wuorp8-option:nth-of-type(2)').click();

    })

    it("Select Patient from the list", () => {

        cy.get('.css-1d8n9bt > :nth-child(1) > :nth-child(1) > .css-175oi2r > [data-testid="dropdown-label"]').click()
        cy.wait(500)
        cy.get('div.css-26l3qy-menu > div.css-11unzgr > div.css-1wuorp8-option:nth-of-type(2)').click( {force: true} );

    })

    it("Calendar Date Picker", () => {
        cy.get('.react-datepicker__navigation').click() //press on the follwoing month
        cy.get('.react-datepicker__day--010').click()
        cy.get('.r-k200y > .r-1p0dtai > :nth-child(1) > .css-175oi2r').should('be.visible')
        cy.get('.r-k200y > .r-1p0dtai > :nth-child(1) > .css-175oi2r').click();
    })  

    it("Save New Appointment", () => {

        cy.get('[data-testid="save-appointment-button"] > .css-175oi2r').click( {force:true} )

    })   
})


describe ("Cancel Appointment", () => {
    
    it("Cancel Appointment from list view", () => {
        
        cy.get('[style="display: flex;"] > #appointments-list-cancel-tooltip').click({ multiple: true }); //pres on the "X"*person* icon to cancel
        cy.get('[data-testid="confirmation-accept-button"] > .css-175oi2r').should('be.visible')
        cy.get('[data-testid="confirmation-accept-button"] > .css-175oi2r').click( {force: true} ); //confirm my deletion

    }) 


})
