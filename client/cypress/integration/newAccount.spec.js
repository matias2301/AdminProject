/// <reference types="cypress" />

describe('<CreateAccount />', () => {
    it('<CreateAccount /> - Validation and Alerts', () => {
        cy.visit('/create-account');

        cy.get('[data-cy=submit-account]').click();

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'All fields are required');

        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error')
    });
    
});
