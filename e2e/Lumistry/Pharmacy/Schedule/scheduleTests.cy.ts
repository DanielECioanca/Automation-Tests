import { loginPage } from '../../../../support/pageObject/loginPage';
import { iFrameIntercom } from '../../../../support/pageObject/iFrameIntercom';

//LOGIN
describe ("Lumistry Login", () => {
    it ("Create a session", () => {

        cy.session('Login', () => {
            
            loginPage.openLoginPage();
            loginPage.fillEmailField().should('have.value', 'dcioanca+UAT-pharmacy-brand-0108@digitalpharmacist.com');
            loginPage.fillPasswordField();
            loginPage.clickLoginButton();
            cy.wait(2000);
    })
})
  

    it("Close iFrame Intercom", () => {
        
        loginPage.openLoginPage();
        cy.wait(1000)

        iFrameIntercom.closeIframeIntercom();
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

describe ("Create a Service", () => {

    it("CREATE A NEW SERVICE", () => {
        
        cy.url()
            .should('include', '/schedule/calendar')

        cy.get(':nth-child(11) > .css-146c3p1').click();
        cy.get('[data-testid="new-service-button"] > .css-175oi2r > [data-testid="button-label"]').should('be.visible');
        cy.get('[data-testid="new-service-button"] > .css-175oi2r > [data-testid="button-label"]').click();
        cy.url()
            .should('include', '/schedule/new-service')

    })

    it("Select CATEGORY", () => {
        
        cy.get(':nth-child(2) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').click();
        cy.get('#react-select-2-option-0').click(); //select " POINT OF CARE TESTING "
        //Verify if it was correctly selected 
        //cy.get(':nth-child(2) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').should('have.value', 'Point of Care Testing') 
    })
    
    it("Select TYPE", () => { 
        
        cy.get(':nth-child(3) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').click();
        

        cy.get('#react-select-3-option-2').click();  //Select 3rd option
        
    })

    it("Input Service TITLE", () => { 

        cy.get('[data-testid="text-form-field-title"]').type("Automated Service #") 
        cy.get('[data-testid="text-form-field-title"]').should('have.value', 'Automated Service #') //Verify if it has the correct text inputted   
    })

    it("Input Service DESCRIPTION", () => { 

        cy.get('[data-testid="text-form-field-description"]').type("This is an automatically generated description text for this service")
        cy.get('[data-testid="text-form-field-description"]').should('have.value', 'This is an automatically generated description text for this service') //Verify if it has the correct text inputted
    })

    it("Input Service INSTRUCTIONS", () => { 

        cy.get('[data-testid="text-form-field-notes"]').type("This is an automatically generated set of instructions for this service: 1.Intro 2.Initiation 3.Problem and call to Adventure 4.Progress 5.Supreme Challenge 6.Climax 7.Issue is solved 8. Epilogue")
        cy.get('[data-testid="text-form-field-notes"]').should('have.value', 'This is an automatically generated set of instructions for this service: 1.Intro 2.Initiation 3.Problem and call to Adventure 4.Progress 5.Supreme Challenge 6.Climax 7.Issue is solved 8. Epilogue') //Verify if it has the correct text inputted
    })

    it("Input LENGTH (MINUTES)*", () => { 

        cy.get('[data-testid="text-form-field-length"]').clear()
        cy.get('[data-testid="text-form-field-length"]').type("30{enter}")
        cy.get('[data-testid="text-form-field-length"]').should('have.value', '30') //Verify if it has the correct amount inputted
    })

    it("Select FORM", () => {  

        cy.get('.css-1dkrcd2-control').click();
        cy.get('div.css-26l3qy-menu > div.css-11unzgr > div.css-1gpmhyx-option:nth-of-type(1)').click();
        //cy.get('[data-testid="add-forms-input-button"] > .r-1awozwy').click();

    })
    
    it("Scroll downards", () => { 
    
        cy.get(':nth-child(16) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="margin-right: 20px;"] > .r-1ifxtd0 > :nth-child(1) > :nth-child(1) > .r-6koalj > [data-testid="checkbox-label"]').scrollIntoView()

    })

    it("Select AVAILABILITY", () => { 

        cy.get(':nth-child(11) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').click();
        cy.get('#react-select-6-option-0').click();
    })

    it("Select BEFORE EVENT Restriction", () => { 

        cy.get(':nth-child(13) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').click();
        cy.get('#react-select-7-option-2').click();

    })

    it("Select AFTER EVENT Restriction", () => { 

        cy.get(':nth-child(14) > [style="flex: 1 1 0%;"] > :nth-child(1) > .css-b62m3t-container > .css-1rchw07-control').click();
        cy.get('#react-select-8-option-2').click();
        
    })

    it("Scroll downards", () => { 
    
        cy.get(':nth-child(16) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="margin-right: 20px;"] > .r-1ifxtd0 > :nth-child(1) > :nth-child(1) > .r-6koalj > [data-testid="checkbox-label"]').scrollIntoView()

    })

    it("LIMIT BOOKING FREQUENCY", () => { 

        cy.get(':nth-child(15) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="margin-right: 20px;"] > .r-1ifxtd0 > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r')
            .click();
        cy.get(':nth-child(15) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="z-index: auto; flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-1phboty > [data-testid="add-new-option-button"] > .r-1awozwy > [data-testid="button-label"]')
            .click();
        cy.get('[data-testid="text-form-field-bookingFrequencyLimits.0.value"]').type("2");
        cy.get('.r-18u37iz > :nth-child(2) > :nth-child(1) > .css-b62m3t-container > .css-1dkrcd2-control > .css-1wy0on6').click();
        cy.get('div.css-26l3qy-menu > div.css-11unzgr > div.css-1gpmhyx-option').click();
        cy.get('[data-testid="text-form-field-bookingFrequencyLimits.0.value"]').should('have.value', '2')

    })

    it("LIMIT TOTAL BOOKING DURATION", () => { 

        cy.get(':nth-child(16) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="margin-right: 20px;"] > .r-1ifxtd0 > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r')
            .click();
        cy.get(':nth-child(16) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="z-index: auto; flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-1phboty > [data-testid="add-new-option-button"] > .r-1awozwy > [data-testid="button-label"]')
            .click();
        
        cy.get('[data-testid="text-form-field-bookingTotalDurationLimits.0.value"]').type("3")
        cy.get('[data-testid="text-form-field-bookingTotalDurationLimits.0.value"]').click();
        cy.get('[data-testid="text-form-field-bookingTotalDurationLimits.0.value"]').type("0")
        cy.get('[data-testid="text-form-field-bookingTotalDurationLimits.0.value"]').should('have.value', '30')
        cy.get(':nth-child(1) > .r-18u37iz > :nth-child(3) > :nth-child(1) > .css-b62m3t-container > .css-1dkrcd2-control').click();
        cy.get('div.css-26l3qy-menu').should('be.visible')
        cy.get('div.css-26l3qy-menu > div.css-11unzgr > div.css-1gpmhyx-option')
            .click();
        
    })

    it("LIMIT FUTURE BOOKINGS", () => { 

        cy.get(':nth-child(17) > [style="flex: 1 1 0%;"] > [style="z-index: auto;"] > .r-1x4r79x > [style="margin-right: 20px;"] > .r-1ifxtd0 > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r')
            .click();
        cy.get('[data-testid="text-form-field-periodDays"]').type("10")
        cy.get('[data-testid="text-form-field-periodDays"]').should('have.value', '10')

    })

    it("SAVE Service", () => {
            
        cy.get('[data-testid="save-service-button"] > .css-175oi2r').scrollIntoView()   //SCROLL UPWARDS to Save button
        cy.wait(1000)
        cy.get('[data-testid="save-service-button"] > .css-175oi2r').click( {force: true} );

    })
})

describe ("Service is created", () => {

    it("Green Toast Message - SERVICE IS CREATED", () => {
        //cy.get('div.Toastify__toast-body > div > div.css-175oi2r > div.css-175oi2r r-6koalj r-18u37iz > div.css-175oi2r r-1kb76zh > div.css-146c3p1 r-fdjqy7 r-1b43r93 r-1kfrs79 r-1ah4tor r-28itpw')
        //cy.get('div.Toastify__toast-body > div > div.css-175oi2r > div.css-175oi2r > div.css-1rynq56')
        cy.get('.Toastify__toast-body > :nth-child(1) > [style="z-index: auto;"] > .r-6koalj')
            .should('have.text', "Service created")
        cy.wait(4000)
    })

})

describe ("Delete the service", () => {
    it("Delete from listed view", () => {
        cy.get('[data-testid="delete-service--6d74d2fd-3e52-4ecd-916f-32f3620ad3e6"]').click();
        cy.get('[data-testid="confirmation-accept-button"] > .css-175oi2r > [data-testid="button-label"]').click();

    })

    it("Delete service from edit view", () => {
        cy.get('[data-testid="edit-service--cbbde238-e026-4b88-a089-e45e4cc466d7"]').click();
        cy.get('[data-testid="delete-service-button"] > .r-1awozwy').click();
        cy.get('[data-testid="confirmation-accept-button"] > .css-175oi2r > [data-testid="button-label"]').click();

    })
})
