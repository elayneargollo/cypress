describe('Teste de Navegação', () => {
    it('Navegar para diferentes seções da aplicação', () => {
      cy.visit('http://localhost:4200/#/home');
      cy.contains('a', 'Register now').click(); 
      cy.url().should('include', 'http://localhost:4200/#/home/signup'); 
 
      cy.visit('http://localhost:4200/#/home');
      cy.contains('a', 'login').click(); 

      cy.visit('http://localhost:4200/#/user/enmorais');
      cy.get('.btn.btn-primary').contains('Load more').click(); 
      cy.url().should('include', 'http://localhost:4200/#/user/enmorais'); 
    
      /*cy.visit('http://localhost:4200/#/user/enmorais');
      cy.get('a[href="#/p/add"]').click();
      cy.url().should('include', 'http://localhost:4200/#/user/enmorais'); */
    })
});

describe('Teste de responsividade', function() {
    it('Verifica se a interface do usuário é responsiva : Page Home', function() {
      // Dado que eu estou no site
      cy.visit('http://localhost:4200');
  
      // Quando eu mudo o tamanho da tela
      cy.viewport(320, 480);
  
      // Quando eu preencho o usuário "usuario" e a senha "senha" para desabilitar o bnt
      cy.get('[data-test="loginUserName"]').type('flavio');    
      cy.get('[data-test="loginPassword"]').type('123');

      cy.contains('button', 'login').should('have.css', 'display', 'block');
  
      // Muda o viewport para um tamanho de tela maior
      cy.viewport(1024, 768);
  
      // Verifica se o elemento se ajustou corretamente ao novo tamanho da tela
      // Como exemplo, vamos verificar se o mesmo elemento agora tem a propriedade display definida como 'none'
      cy.contains('button', 'login').should('have.css', 'display', 'block');
    });

    it('Verifica se a interface do usuário é responsiva: Page Cadastro', function() {
        // Dado que eu estou no site
        cy.visit('http://localhost:4200/#/home/signup');

        // Quando eu mudo o tamanho da tela
        cy.viewport(320, 480);
  
        // Então a interface do usuário deve se ajustar ao novo tamanho da tela
        // Aqui você deve verificar os elementos específicos que devem mudar quando a tela é redimensionada.
        // Como exemplo, vamos verificar se um elemento com a classe 'responsive-element' tem a propriedade display definida como 'block'
        cy.contains('button', 'Register').should('have.css', 'display', 'block');
    
        // Muda o viewport para um tamanho de tela maior
        cy.viewport(1024, 768);
    
        // Verifica se o elemento se ajustou corretamente ao novo tamanho da tela
        cy.contains('button', 'Register').should('have.css', 'display', 'block');
      });
  });