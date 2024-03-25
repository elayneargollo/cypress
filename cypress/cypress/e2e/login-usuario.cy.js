describe('Funcionalidade: Login de usuário', () => {
  it('Login com usuário correto e senha incorreta', () => {

    // Dado que eu estou na página principal
    cy.visit('http://localhost:4200/#/home');

    // Quando eu preencho todos os campos
    cy.get('[data-test="loginUserName"]').type('enmorais');    
    cy.get('[data-test="loginPassword"]').type('senha123');

    // E eu clico em "Login"
    cy.contains('button', 'login').click();

    // Então eu devo ver uma mensagem de erro
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password');
    });
  });
});

it('Login com campos vazios', () => {

  // Dado que eu estou na página de login
  cy.visit('http://localhost:4200/#/home');

  // Quando eu deixo os campos de usuário e senha vazios
  // (não precisamos preencher nada, pois os campos já estão vazios por padrão)

  // Então eu devo ver uma mensagem de erro
  cy.contains('User name is required!').should('be.visible');
  cy.contains('Password is required!').should('be.visible');
});

it('Login com usuário e senha corretos', () => {

  // Dado que eu estou na página de login
  cy.visit('http://localhost:4200/#/home');

  // E existe um usuário com o nome "usuario" e senha "senha"
  // (isso deve ser configurado no backend ou no banco de dados de teste)

  // Quando eu preencho o usuário "usuario" e a senha "senha"
  cy.get('[data-test="loginUserName"]').type('flavio');    
  cy.get('[data-test="loginPassword"]').type('123');

  // E eu clico em "Login"
  cy.get('button').contains('login').click();

  // Então eu devo ser redirecionado para a página inicial
  cy.url().should('include', 'http://localhost:4200/#/user/flavio');
});