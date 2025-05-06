export class IFrameIntercom { 
    closeIframeIntercom = () => {
        return cy.get('.intercom-launcher-frame').then(function($iframe){

            let iframeintercom = $iframe.contents().find('body')
            cy.wrap(iframeintercom)
            .should('exist')
            .click()
                
        cy.get('[data-testid="81d59c1e-71c1-4148-9cf9-b34daffc32d8"] > :nth-child(2) > .r-1phboty > [data-testid="select-location-button"] > .css-175oi2r > [data-testid="button-label"]').click();   
        })
    }
}

export const iFrameIntercom = new IFrameIntercom ();