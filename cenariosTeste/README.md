## Cenário de Teste

Cenários baseados na experiência do usuário ao utilizar a aplicação AluraPIC.

AluraPIC é um site para hospedar imagens. 
Basicamente o usuário precisa realizar um cadastro no site para fazer o login e conseguir hospedar as imagens.

## Linguagem Natural 

1. Teste de cadastro de usuário:

Tente se cadastrar com todos os campos preenchidos corretamente.
Tente se cadastrar com um ou mais campos vazios.
Tente se cadastrar com um email que já está em uso.
Tente se cadastrar com um nome de usuário que já está em uso.
Tente se cadastrar com um email inválido.
Tente se cadastrar com uma senha muito curta.

2. Teste de login de usuário:

Tente fazer login com um usuário e senha corretos.
Tente fazer login com um usuário correto e senha incorreta.
Tente fazer login com um usuário que não existe.
Tente fazer login com campos vazios.

3. Teste de hospedagem de imagens:

Tente hospedar uma imagem com um usuário logado.
Tente hospedar uma imagem sem estar logado.
Tente hospedar um arquivo que não é uma imagem.
Tente hospedar uma imagem com um tamanho maior do que o permitido.
Verifique se a imagem hospedada é exibida corretamente.

4. Teste de navegação e UI:

Verifique se todas as páginas estão carregando corretamente.
Verifique se todos os links estão funcionando.
Verifique se a interface do usuário é responsiva e funciona em diferentes tamanhos de tela.

## Linguagem Gherkin

1. Funcionalidade: Cadastro de usuário

  Cenário: Cadastro com todos os campos preenchidos corretamente
    Dado que eu estou na página de cadastro
    Quando eu preencho todos os campos corretamente
    E eu clico em "Cadastrar"
    Então eu devo ser redirecionado para a página de login

  Cenário: Cadastro com um ou mais campos vazios
    Dado que eu estou na página de cadastro
    Quando eu deixo um ou mais campos vazios
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

  Cenário: Cadastro com um email que já está em uso
    Dado que eu estou na página de cadastro
    E existe um usuário com o email "email@exemplo.com"
    Quando eu tento me cadastrar com o email "email@exemplo.com"
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

  Cenário: Cadastro com um nome de usuário que já está em uso
    Dado que eu estou na página de cadastro
    E existe um usuário com o nome de usuário "usuario"
    Quando eu tento me cadastrar com o nome de usuário "usuario"
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

  Cenário: Cadastro com um email inválido
    Dado que eu estou na página de cadastro
    Quando eu tento me cadastrar com o email "email_invalido"
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

  Cenário: Cadastro com uma senha muito curta
    Dado que eu estou na página de cadastro
    Quando eu tento me cadastrar com uma senha muito curta
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

  Cenário: Cadastro com uma senha muito longa
    Dado que eu estou na página de cadastro
    Quando eu tento me cadastrar com uma senha muito longa
    E eu clico em "Cadastrar"
    Então eu devo ver uma mensagem de erro

2. Funcionalidade: Login de usuário

  Cenário: Login com usuário e senha corretos
    Dado que eu estou na página de login
    E existe um usuário com o nome "usuario" e senha "senha"
    Quando eu preencho o usuário "usuario" e a senha "senha"
    E eu clico em "Login"
    Então eu devo ser redirecionado para a página inicial

  Cenário: Login com usuário correto e senha incorreta
    Dado que eu estou na página de login
    E existe um usuário com o nome "usuario" e senha "senha"
    Quando eu preencho o usuário "usuario" e a senha "senha_incorreta"
    E eu clico em "Login"
    Então eu devo ver uma mensagem de erro

  Cenário: Login com campos vazios
    Dado que eu estou na página de login
    Quando eu deixo os campos de usuário e senha vazios
    E eu clico em "Login"
    Então eu devo ver uma mensagem de erro

3. Funcionalidade: Hospedagem de imagens

  Cenário: Hospedar uma imagem com um usuário logado
    Dado que eu estou logado
    E eu estou na página de hospedagem de imagens
    Quando eu seleciono uma imagem válida
    E eu clico em "Hospedar"
    Então eu devo ver a imagem na minha galeria

  Cenário: Hospedar uma imagem sem estar logado
    Dado que eu estou na página de hospedagem de imagens
    Quando eu seleciono uma imagem válida
    E eu clico em "Hospedar"
    Então eu devo ser redirecionado para a página de login

  Cenário: Hospedar um arquivo que não é uma imagem
    Dado que eu estou logado
    E eu estou na página de hospedagem de imagens
    Quando eu seleciono um arquivo que não é uma imagem
    E eu clico em "Hospedar"
    Então eu devo ver uma mensagem de erro

  Cenário: Hospedar uma imagem com um tamanho maior do que o permitido
    Dado que eu estou logado
    E eu estou na página de hospedagem de imagens
    Quando eu seleciono uma imagem com um tamanho maior do que o permitido
    E eu clico em "Hospedar"
    Então eu devo ver uma mensagem de erro

  Cenário: Verificar se a imagem hospedada é exibida corretamente
    Dado que eu estou logado
    E eu hospedei uma imagem
    Quando eu vou para a minha galeria
    Então eu devo ver a imagem que eu hospedei

4. Funcionalidade: Navegação e UI

  Cenário: Verificar se todas as páginas estão carregando corretamente
    Dado que eu estou no site
    Quando eu navego para todas as páginas
    Então todas as páginas devem carregar corretamente

  Cenário: Verificar se todos os links estão funcionando
    Dado que eu estou no site
    Quando eu clico em todos os links
    Então todos os links devem levar para a página correta

  Cenário: Verificar se a interface do usuário é responsiva
    Dado que eu estou no site
    Quando eu mudo o tamanho da tela
    Então a interface do usuário deve se ajustar ao novo tamanho da tela