// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:4200/#/home');

    cy.get('[data-test="loginUserName"]').type(username);    
    cy.get('[data-test="loginPassword"]').type(password);

    cy.get('button').contains('login').click();
});
  
Cypress.Commands.add('createUser', (email, password, fullName, username) => {
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Quando eu preencho todos os campos corretamente
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="fullName"]').type(fullName);
    cy.get('[data-test="registerUserName"]').type(username);    
    cy.get('[data-test="registerPassword"]').type(password);

    // E eu clico em "Cadastrar"
    cy.contains('button', 'Register').click();

    // Então eu devo ser redirecionado para a página de login
    cy.visit('http://localhost:4200/#/home');
});