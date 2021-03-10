/// <reference types="cypress" />

describe('<Login />', () => {
    it('<Login /> - Validation, Alerts and Authenticate User', () => {
        cy.visit('/');

        cy.get('[data-cy="submit-login"]').click();

        cy.get('[data-cy="alert"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'All fields are required');

        cy.get('[data-cy="alert"]')
            .should('have.class', 'alert-error');

            // test with an existing user
        cy.get('[data-cy="email-input"]').type('user3@user3.com');
        cy.get('[data-cy="password-input"]').type('123');
        
        cy.get('[data-cy="submit-login"]').click();

        cy.get('[data-cy="alert"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Verify Email and Password');

        cy.get('[data-cy="email-input"]').clear().type('user3@user3.com');
        cy.get('[data-cy="password-input"]').clear().type('123456');
        
        cy.get('[data-cy="submit-login"]').click();

        cy.get('[data-cy="select-project"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Select a project');
        
        cy.get('[data-cy="close-session"]').click();        
    });
    
});
