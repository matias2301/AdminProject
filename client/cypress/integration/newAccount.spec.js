/// <reference types="cypress" />

describe('<CreateAccount />', () => {
    it('<CreateAccount /> - Validation, Alerts and Create Account', () => {
        
        cy.visit('/create-account');

        cy.get('[data-cy=submit-account]').click();
        
        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'All fields are required');

        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error');

        cy.get('[data-cy=name-input]').type('user1');
        cy.get('[data-cy=email-input]').type('user1@user1.com');
        cy.get('[data-cy=password-input]').type('123');
        cy.get('[data-cy=confirm-input]').type('123');

        cy.get('[data-cy=submit-account]').click();

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Password must be at least 6 characters');

        cy.get('[data-cy=password-input]').clear().type('123456');
        cy.get('[data-cy=confirm-input]').clear().type('123');

        cy.get('[data-cy=submit-account]').click();

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Passwords does not match');

        cy.get('[data-cy=confirm-input]').clear().type('123456');

        cy.get('[data-cy=submit-account]').click();

        cy.get('[data-cy=select-project]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Select a project');
        
        cy.get('[data-cy=close-session]').click({force: true});            
        
    });

    it('<CreateAccount /> - Verify duplicated users', () => {
        cy.visit('/create-account');

        cy.get('[data-cy=name-input]').type('user1');
        cy.get('[data-cy=email-input]').type('user1@user1.com');
        cy.get('[data-cy=password-input]').type('123456');
        cy.get('[data-cy=confirm-input]').type('123456');

        cy.get('[data-cy=submit-account]').click();

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'User already exists');

    });    
    
});
