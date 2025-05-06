
describe ("Justice Church", () => {
    
    it("JUSTICE STORE", () => {
        cy.visit("https://justice.church/?srsltid=AfmBOoqT2dJhxkD1HneP0Xc0xOALYMYsukkDGveoX1u-raSO5uLW7CZT")
        // Visit Justice Church Site

        cy.url()
            .should('include', '?srsltid=')
        
        // Go to OFFICIAL STORE page
        cy.get('[href="https://Justice.lnk.to/officialstoreWe"]').click();
        cy.url()
            .should('include', 'store/')
        
        //Scroll to Access All Arenas vinyl/cd product
        cy.get('[href="../acrosstheuniversealbum"] > .visuelProduit').scrollIntoView();
        cy.get('[href="../acrosstheuniversealbum"] > .visuelProduit').click();

        cy.wait('#product-component-1665052826777 > iframe').should('be.visible');
            
            cy.get('#product-component-1665052826777 > iframe').then(function($iframe){
            
                let iframeintercom = $iframe.contents().find('body')
                cy.wrap(iframeintercom)
                .should('exist')
                .click()

            cy.get("//iframe[@name='frame-product-9731975708997']").click();   
        })

        
        //Add to cart
        cy.get("//button[normalize-space()='Add to cart']").click();

        //Get back to the store
        cy.get('#menu > [href="../store/#menu"]').click();

        cy.get('#neverenderremixescc > .visuelProduit').click();
        cy.get("//button[normalize-space()='Add to cart']").click();

        //press on the card sticky button
        cy.get('.is-sticky.shopify-buy__cart-toggle').click();
        cy.get('.shopify-buy__btn.shopify-buy__btn--cart-checkout').click();

    })
})
