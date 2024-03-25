import 'cypress-file-upload';

describe('Hospedagem de imagens', () => {
  it('Hospedar uma imagem com um usuário logado', () => {

    // Dado que eu estou logado
    cy.login('flavio', '123');
  
    // E eu estou na página de hospedagem de imagens
    cy.visit('http://localhost:4200/#/p/add');
  
    // Quando eu seleciono uma imagem válida
    const fileName = 'dog.jpg';
    cy.get('input[type=file]').attachFile(fileName); 
  
    // E eu clico em "Upload"
    cy.get('button').contains('Upload').click();
  });
});