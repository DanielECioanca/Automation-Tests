
//LOGIN
describe ("Lumistry Login", () => {
    beforeEach (()=>{
        cy.viewport(1920,1080)
    })

    it("Login", () => {
        cy.visit("https://pharmacy.uat.lumistry.com/login");
        cy.get("input[aria-label='Text field'][type='text']")
            .type('dcioanca+UAT-pharmacy-brand-1009@digitalpharmacist.com')
            .should('have.value', 'dcioanca+UAT-pharmacy-brand-1009@digitalpharmacist.com');
            
        cy.get("input[aria-label='Text field'][type='password']").type("9.iLgdJ@v!hi7RikfBcR")

        cy.get(".css-175oi2r.r-1awozwy.r-18u37iz.r-1777fci").click();
        cy.wait(2000)
        
    })

    it("Close iFrame Intercom", () => {

        cy.visit("https://pharmacy.uat.lumistry.com/login")
        cy.get('.intercom-launcher-frame').then(function($iframe){

            let iframeintercom = $iframe.contents().find('body')
            cy.wrap(iframeintercom)
            .should('exist')
            .click()
                //.intercom-1x1c1b9.e17z5v9w0    /    .intercom-1x1c1b9.e17z5v9w0

            cy.get('.r-1cmwbt1 > .css-1rynq56').click( { multiple: true } );
            //cy.get('[data-testid="search-input"]').type("hyde")
            cy.get('[style="transform: translateY(360px); height: 60px; padding-top: 8px; background: rgb(249, 250, 251);"] > .ag-cell > .r-eu3ka > .r-1jj8364 > [style="background-color: rgb(255, 255, 255); border-style: solid; border-color: rgb(188, 200, 206); border-width: 1px; border-radius: 8px; width: auto; min-width: 90px;"] > [data-testid="pharmacy-store-selector-modal-select-action"] > .css-175oi2r').click();
        })
    })
})

describe ("Create a Form", () => {
    // Create a NEW PRIVATE BLANK form
    it("CREATE A NEW PRIVATE BLANK form", () => {
        // click on FORMS > New Form
        cy.wait(5000)
        cy.get(':nth-child(7) > .css-1rynq56').click();
        cy.wait(2000)

        //IF pressed on another Module press again on FORMS
        if (cy.url().should('include', '/forms/forms-list')) {
            cy.get('[data-testid="new-form-button"] > .css-175oi2r').click();
        } else {
            cy.wait(5000)
            cy.get(':nth-child(7) > .css-1rynq56').click();
            cy.wait(5000)
        }

                        //cy.wait(5000)
                        //cy.url().should('include', '/forms/forms-list') 

        cy.get('[data-testid="new-form-button"] > .css-175oi2r').click();
        // select on New Blank Private Form
        cy.get(':nth-child(1) > .r-6koalj > .r-1alkh5z').click();
        // select on New Blank Private Form
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
        //give a title 
        cy.get('[data-testid="new-form-name-input"]').type("Automation Test Created Form # ")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
        cy.wait(2000)
        cy.url()
            .should('include', '/edit-form?formId');
    })

    it("EDIT FORM TITLE", () => {

        cy.wait(1000)
        cy.get('[data-testid="edit-form-name-modal-button-open"]')
            .click();
        cy.get('[data-testid="text-form-field-name"]')
            .clear
        cy.get('[data-testid="text-form-field-name"]')
            .type("Automated Blank Private Form")
        cy.get('[data-testid="edit-form-name-modal-button-ok"] > .css-175oi2r')
            .click();
        cy.wait(4000)

    })

    it("Edit Form Title Widget", () => {

        cy.get(':nth-child(1) > .is-isolated').click()
        cy.get('[data-testid="edit-form-element--header"]').clear
        cy.get('[data-testid="edit-form-element--header"]').type("Automated Form Title")
        cy.get('[data-testid="edit-form-element--subheader"]').clear
        cy.get('[data-testid="edit-form-element--subheader"]').type('Automated Form Subtitle') 
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();

    })

    it("Add all the widgets", () => {

        cy.get('.col-md-3 > :nth-child(2) > :nth-child(1)').click(); //Full Name
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(2)').click(); //Date Of Birth
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(3)').click(); //Gender
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(4)').click(); //Email
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(5)').click(); //Phone Number
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(6)').click(); //Address
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(7)').click(); //Short Text
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(8)').click(); //Long Text
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(9)').click(); //Single Checkbox
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(10)').click(); //Single Select
        cy.get('.col-md-3 > :nth-child(2) > :nth-child(10)').click(); //Multiple Select

        it("Scroll Downwards in Toolbox", () => {
            cy.get('.col-md-3').realHover();
            cy.get('.collapse > ul > :nth-child(7)').scrollIntoView();
        })

        cy.get(':nth-child(12) > .toolbar-group-item > .collapse > ul > :nth-child(1)').click(); //Allergies
        cy.get(':nth-child(12) > .toolbar-group-item > .collapse > ul > :nth-child(2)').click(); //Medical Conditions
        cy.get(':nth-child(13) > .toolbar-group-item > .collapse > ul > :nth-child(1)').click(); //Date
        cy.get(':nth-child(13) > .toolbar-group-item > .collapse > ul > :nth-child(2)').click(); //Number
        cy.get('.collapse > ul > :nth-child(3)').click(); // Dropdown
        cy.get('.collapse > ul > :nth-child(4)').click(); // Image Upload
        cy.get('.collapse > ul > :nth-child(5)').click(); // Title
        cy.get('.collapse > ul > :nth-child(6)').click(); // Input table
        cy.get('.collapse > ul > :nth-child(7)').click(); // Signature

    })

    it("Edit FULL NAME Widget", () => {
        
        cy.get(':nth-child(2) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click(); 
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated FULL NAME")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
        cy.wait(1000)
    })
    
    it("Edit DATE OF BIRTH Widget", () => {
        
        cy.get(':nth-child(3) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click(); 
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated DATE OF BIRTH")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
        cy.wait(1000)
    })

    it("Edit GENDER Widget", () => {

        cy.get(':nth-child(4) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click();
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated GENDER")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();

    })

    it("Edit EMAIL ADDRESS Widget", () => {

        cy.get(':nth-child(5) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click();
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated EMAIL")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();

    })

    it("Scroll Downwards to Address", () => {
        cy.get('.col-md-9').realHover();
        cy.get(':nth-child(7) > .SortableItem').scrollIntoView();
    })

    it("Edit PHONE Widget", () => {
        cy.get(':nth-child(6) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click();
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated EMAIL")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
    })

    it("Edit ADDRESS Widget", () => {
        cy.get(':nth-child(6) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click();
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated EMAIL")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
    })

    it("Scroll Downwards to LONG TEXT Widget", () => {
        cy.get('.col-md-9').realHover();
        cy.get(':nth-child(9) > .SortableItem').scrollIntoView();
    })

    it("Edit LONG TEXT widget", () => {
        cy.get(':nth-child(9) > .SortableItem > :nth-child(1) > .toolbar-header > .toolbar-header-buttons > :nth-child(1) > .is-isolated').click(); 
        cy.get('[style="flex: 1 1 0%;"] > :nth-child(1) > :nth-child(1) > .r-6koalj > .css-175oi2r').click();
        cy.get('[data-testid="edit-form-element--label"]').clear
        cy.get('[data-testid="edit-form-element--label"]').type("Automated Large Text question")
        cy.get('[data-testid="new-form-ok-button-modal"] > .css-175oi2r').click();
        cy.wait(1000)
    })

    

    it("Edit THANK YOU MESSAGE", () => {
        cy.get('[style="opacity: 1;"] > .css-175oi2r > .css-1rynq56').click();
        cy.get('[data-testid="text-form-field-thankYouTitle"]').clear
        cy.get('[data-testid="text-form-field-thankYouTitle"]').type("Automated Thank you Message")
        cy.get('[data-testid="text-form-field-thankYouSubtitle"]').clear
        cy.get('[data-testid="text-form-field-thankYouSubtitle"]').type("Automnated Thank you longer message")
        cy.get('[data-testid="edit-form-thank-you-message-modal-button-ok"] > .css-175oi2r').click();
    })

    it("SAVE MODIFICATIONS made to the Form", () => {
        cy.get('[style="background-color: rgb(0, 147, 232); border-style: solid; border-color: rgb(0, 147, 232); border-width: 1px; border-radius: 8px; width: auto; min-width: 100px;"] > [data-testid="save-form-button"] > .css-175oi2r > [data-testid="button-label"]')
            .click();
        cy.wait(8000)
    })
    
    it("RETURN TO FORM LIST", () => {
        cy.get('[data-testid="go-back-forms-button"]')
            .click();
        cy.wait(4000)
    })

    it("Verify if the form appears in the list", () => {
        cy.get('[style="background-color: rgb(255, 255, 255); display: flex; flex-direction: column;"] > :nth-child(1) > .r-d23pfw').contains('Automated Form Title').should('exist')
    })
})

describe ("Delete a Form", () => {
        // Delete the just created form    
    it("Delete the created form", () => {
        
        //Press on Forms
        cy.get(':nth-child(7) > .css-1rynq56').click();
        cy.wait(5000)
        cy.url()
            .should('include', '/forms/forms-list')

        //click twice on the Last Modified column sorter
        cy.get(':nth-child(1) > [data-testid="forms-grid-wrapper"] > [style="flex: 1 1 0%;"] > .r-14lw9ot > .r-13awgt0 > .ag-theme-material > [style="height: 100%; --ag-line-height: 44px;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-header > .ag-header-viewport > .ag-header-container > .ag-header-row > .ag-header-cell-sortable > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click();
        cy.get(':nth-child(1) > [data-testid="forms-grid-wrapper"] > [style="flex: 1 1 0%;"] > .r-14lw9ot > .r-13awgt0 > .ag-theme-material > [style="height: 100%; --ag-line-height: 44px;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-header > .ag-header-viewport > .ag-header-container > .ag-header-row > .ag-header-cell-sortable > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click();
        //click on Kebab Menu
        cy.get("(//div[@class='css-175oi2r'])[9]")
            .click();
        //click on Delete
        cy.get('div.contexify > div.contexify_item:nth-of-type(5)').click({ multiple: true, force: true });


    })
})

describe ("Edit a form from list", () => {    
    // Edit a Form
    it("Edit a form", () => {

        cy.wait(4000)
        //go back to the list
        cy.get('[data-testid="go-back-forms-button"]').click();   
        cy.wait(4000)
        //click twice on the Last Modified column sorter
        cy.get(':nth-child(1) > [data-testid="forms-grid-wrapper"] > [style="flex: 1 1 0%;"] > .r-14lw9ot > .r-13awgt0 > .ag-theme-material > [style="height: 100%; --ag-line-height: 44px;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-header > .ag-header-viewport > .ag-header-container > .ag-header-row > .ag-header-cell-sortable > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click();
        cy.get(':nth-child(1) > [data-testid="forms-grid-wrapper"] > [style="flex: 1 1 0%;"] > .r-14lw9ot > .r-13awgt0 > .ag-theme-material > [style="height: 100%; --ag-line-height: 44px;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-header > .ag-header-viewport > .ag-header-container > .ag-header-row > .ag-header-cell-sortable > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click();
        //click on Kebab Menu
        cy.get('#cell-2-677 > .r-1awozwy > [style="margin-left: 8px;"] > .css-175oi2r > svg').click();
        //click on Edit
        cy.get('div.contexify > div.contexify_item > div.contexify_itemContent > div.css-175oi2r > div.css-1rynq56').click({ multiple: true, force: true });


    })

})
