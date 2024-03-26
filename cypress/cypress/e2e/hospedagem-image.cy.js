import 'cypress-file-upload';

// describe('Hospedagem de imagens', () => {
//   it('Hospedar uma imagem com um usuário logado', () => {

//     // Dado que eu estou logado
//     cy.login('flavio', '123');
  
//     // E eu estou na página de hospedagem de imagens
//     cy.visit('http://localhost:4200/#/p/add');
  
//     // Quando eu seleciono uma imagem válida
//     const fileName = 'dog.jpg';
//     cy.get('input[type=file]').attachFile(fileName);
  
//     // E eu clico em "Upload"
//     cy.contains('button', 'Upload').click();
//   });
// });

describe('Hospedagem de imagens', () => {
  it('Hospedar uma imagem sem estar logado', () => {

    // Dado que há uma tentativa de ir para página de hospedagem de imagens
    cy.visit('http://localhost:4200/#/p/add');

    cy.get('button').then(($btn) => {
      // verifica se o botão com o texto 'Upload' existe
      if ($btn.text().includes('Upload')) {
        // se o botão existir, falha no teste
        assert.fail('O botão Upload existe');
      } else {
        // se o botão não existir, passa no teste
        assert.isTrue(true);
      }
    });
  });
});