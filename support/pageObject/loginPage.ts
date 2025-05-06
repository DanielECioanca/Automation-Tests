export class LoginPage {
    openLoginPage = () => {
        return cy.visit("https://pharmacy.uat.lumistry.com/login");
    }

    fillEmailField = () => {
        return cy.get("input[aria-label='Text field'][type='text']")
                .type('dcioanca+UAT-pharmacy-brand-0108@digitalpharmacist.com');
    }

    fillPasswordField = () => {
        return cy.get("input[aria-label='Text field'][type='password']").type("pm*dkmFiBiKPK@hAKLBL6qLk")
    }

    clickLoginButton = () => {
        return cy.get(".css-175oi2r.r-1awozwy.r-18u37iz.r-1777fci").click();
    }
}

export const loginPage = new LoginPage ();