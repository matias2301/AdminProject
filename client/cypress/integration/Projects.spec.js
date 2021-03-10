/// <reference types="cypress" />

describe('Admin Projects', () => {
    it('<Login /> - Authenticate User', () => {
        cy.visit('/');

        cy.get('[data-cy="email-input"]').type('user1@user1.com');
        cy.get('[data-cy="password-input"]').type('123456');
        
        cy.get('[data-cy="submit-login"]').click();
    });

    it('<Projects /> - Validate Projects', () => {
        cy.get('[data-cy="btn-newProject"]').click();
        cy.get('[data-cy="submit-newProject"]').click();

        cy.get('[data-cy="alert"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Name is required');

        cy.get('[data-cy="alert"]')
            .should('have.class', 'error').and('have.class', 'message');
    });

    it('<Projects /> - Create Project', () => {
        cy.get('[data-cy="input-newProject"]').type('New Project');
        cy.get('[data-cy="submit-newProject"]').click();

        cy.get('[data-cy="project-list"] li:nth-child(1) button').click();
    });

    it('<Tasks /> - Create Task', () => {
        cy.get('[data-cy="submit-task"]').click();

        cy.get('[data-cy="alert"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Task name is required');

        cy.get('[data-cy="alert"]')
            .should('have.class', 'error').and('have.class', 'message');            

        cy.get('[data-cy="input-task"]').type('New Task 1');
        cy.get('[data-cy="submit-task"]').click();

        cy.get('[data-cy="input-task"]').type('New Task 2');
        cy.get('[data-cy="submit-task"]').click();

        cy.get('[data-cy="input-task"]').type('New Task 3');
        cy.get('[data-cy="submit-task"]').click();
    });
    
    it('<Tasks /> - Complete, Edit and Remove', () => {

        cy.wait(1000);
        // Complete and uncomplete tasks
        cy.get('[data-cy="task"]:nth-child(1) [data-cy="task-incomplete"]').click();
        cy.get('[data-cy="task"]:nth-child(1) [data-cy="task-complete"]').should('have.class', 'complete');

        cy.get('[data-cy="task"]:nth-child(1) [data-cy="task-complete"]').click();
        cy.get('[data-cy="task"]:nth-child(1) [data-cy="task-incomplete"]').should('have.class', 'incomplete');

        // Edit tasks
        cy.get('[data-cy="task"]:nth-child(1) [data-cy="btn-edit"]').click();
        cy.get('[data-cy="input-task"]').clear().type('Updated Task');
        cy.get('[data-cy="submit-task"]').click();

        // Delete tasks
        cy.get('[data-cy="task"]:nth-child(1) [data-cy="btn-delete"]').click();
        cy.get('[data-cy="task"]:nth-child(1)').invoke('text').should('not.equal', 'Updated Task');

    });    
    
});


