/// <reference types="cypress" />

describe('<Form />', () => {
    it('<Login /> - Verify Login view', () => {
        cy.visit('/');

        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Login'); //'have.text'

        // Verify Form
        cy.get('[data-cy=form-login]')
            .should('exist');

        cy.get('[data-cy=email-input]')
            .should('exist');

        cy.get('[data-cy=password-input]')
            .should('exist');

        cy.get('[data-cy=submit-login]')
            .should('exist')
            .should('have.value', 'Login')
            .should('have.class', 'btn-primary').and('have.class', 'btn');

        cy.get('[data-cy=new-account]')            
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A');

        cy.get('[data-cy=new-account]')
            .should('have.attr', 'href')
            .should('eq', '/create-account');

        cy.visit('/create-account');
    });
    
    it('<CreateAccount />', () => {
        cy.visit('/create-account');

        cy.get('[data-cy=title]')
            // .invoke('text')
            .should('have.text', 'Create an Account'); //'have.text'

        // // Verify Form
        cy.get('[data-cy=form-create-account]')
            .should('exist');

        cy.get('[data-cy=name-input]')
            .should('exist');

        cy.get('[data-cy=email-input]')
            .should('exist');

        cy.get('[data-cy=password-input]')
            .should('exist')
            .should('have.prop', 'type')
            .should('equal', 'password');

        cy.get('[data-cy=confirm-input]')
            .should('exist');

        cy.get('[data-cy=submit-account]')
            .should('exist')
            .should('have.value', 'Create an Account')
            .should('have.class', 'btn-primary').and('have.class', 'btn');

        cy.get('[data-cy=goto-index]')   
            .should('have.attr', 'href')
            .should('eq', '/');

        cy.visit('/');
    });
        
});
