describe('Funcionalidade: Cadastro de usuário', () => {
  it('Cadastro com todos os campos preenchidos corretamente', () => {

    // Dado que eu estou na página de cadastro
    // Dado que eu estou na página principal
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Quando eu preencho todos os campos corretamente
    cy.get('[data-test="email"]').type('enmorais@outlook.com');
    cy.get('[data-test="fullName"]').type('elayne natalia');
    cy.get('[data-test="registerUserName"]').type('enmorais1');    
    cy.get('[data-test="registerPassword"]').type('senha123');

    // E eu clico em "Cadastrar"
    cy.contains('button', 'Register').click();

    // Então eu devo ser redirecionado para a página de login
    cy.visit('http://localhost:4200/#/home');
  });
});

describe('Funcionalidade: Cadastro de usuário', () => {
  it('Cadastro com um ou mais campos vazios', () => {

    // Dado que eu estou na página de cadastro
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Quando eu deixo um ou mais campos vazios
    cy.get('[data-test="email"]').clear();
    cy.get('[data-test="fullName"]').type('elayne natalia');
    cy.get('[data-test="registerUserName"]').type('enmorais1');    
    cy.get('[data-test="registerPassword"]').type('senha123');

    // E eu clico em "Register"
    cy.contains('button', 'Register').click();

    // Então eu devo ver uma mensagem de erro
    cy.contains('Email is required!').should('be.visible');
  });
});

describe('Cadastro', function() {
  it('Cadastro com um nome de usuário que já está em uso', function() {

    // Dado que eu estou na página de cadastro
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Input the username
    cy.get('[data-test="registerUserName"]').type('enmorais1');

    // Click on "Register"
    cy.contains('button', 'Register').click();

    // Check for the error message
    cy.contains('Username already taken').should('be.visible');
  });
});

describe('Cadastro', function() {
  it('Cadastro com um email inválido', function() {

    // Dado que eu estou na página de cadastro
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Input the invalid email
    cy.get('[data-test="email"]').type('elayne');

    // Click on "Register"
    cy.contains('button', 'Register').click();

    // Check for the error message
    cy.contains('Invalid e-mail').should('be.visible');
  });
});

describe('Cadastro', function() {
  it('Cadastro com uma senha muito curta', function() {

    // Dado que eu estou na página de cadastro
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Input a short password
    cy.get('[data-test="registerPassword"]').type('123');

    // Click on "Register"
    cy.get('button').contains('Register').click();

    // Check for the error message
    cy.contains('Mininum length is 8').should('be.visible');
  });
});

describe('Cadastro', function() {
  it('Cadastro com uma senha muito longa', function() {

    // Dado que eu estou na página de cadastro
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();

    // Input a long password
    cy.get('[data-test="registerPassword"]').type('12345678901234567890123456789012345678901234567890');

    // Click on "Cadastrar"
    cy.get('button').contains('Register').click();

    // Check for the error message
    cy.contains('Maximun length is 18').should('be.visible');
  });
});

/* O teste vai falhar por que o sistema permite emails repetidos, ou seja, um mesmo e-mail(que é unico por pessoa)
pode ter várias contas cadastradas. Isso é um bug ? Achadinhos ! */
describe('Cadastro', function() {

  beforeEach(function() {
    // Prepare the application state
    // Here we assume that there is a command "createUser" that creates a user
    cy.createUser('enmorais@exemplo.com', '12345678', 'elayne morais', 'enmorais'); 
    cy.contains('a', 'Register now').click();
  });

  it('Cadastro com um email que já está em uso', function() {
    // Input the email
    cy.get('[data-test="email"]').type('enmorais@exemplo.com');

    // Click on "Register"
    cy.get('button').contains('Register').click();

    // Check for the error message
    cy.contains('O email já está em uso').should('be.visible');
  });
});