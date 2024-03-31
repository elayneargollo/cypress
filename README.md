## Cypress

O Cypress é um framework para automação de testes end-to-end, que utiliza o JavaScript como linguagem de programação.

Objetivo desse projeto é utilizar a ferramenta para automatização utilizando o auxílio de IA.

Na pasta evidenciasIA terá todo o fluxo do auxilio de IA para geração de teste automatizado.

## Experimento

Este experimento consiste em reunir provar para comprovar que o auxilio de IA aumenta a qualidade de software. 

Pegou-se uma aplicação já em produção e partir desta gerou-se cenários de teste e implementou testes automatizados.

## Menu

- [Pré-requisitos](#pré-requisitos)
- [Tecnologia](#tecnologia)
- [Aplicação](#aplicação) 
- [Cypress](#Cypress)
- [Fluxo](#fluxo)
- [Resultados](#resultados)

## Tecnologia

* Cypress
* Angular
* GitHub Copilot
* Gherkin

## Pré-requisitos
  - Node 16.13.1
  - Cypress v12.10.0
  - Alura PIC 

## Aplicação

Para execução local: 

1. No terminal, digite: 
    - cd aluraPic

2. Instale as dependências do projeto
    - npm install

3. Execute o projeto
    - npm start

4. Abra o navegador e acessa o endereço:
    - http://localhost:4200/#/home

Para execução remota: 

Acesse o link: https://3076-cypress-alurapic-front.vercel.app/

## Cypress

1. Abra o cypress
    - npx cypress open

## Fluxo

O experimento consiste na geração de histórias a partir de um breve descritivo da aplicação com auxilio da IA. 
Uma vez as histórias geradas, novamente com IA, gera-se os cenários casos de uso e posteriormente os cenários Gherkins. 
Com os cenários Gherkins validados, solicitata-se a IA, a implementação de teste automatizado.


![image](https://github.com/elayneargollo/cypress/assets/48841005/cf525f8d-e5c3-4326-852f-eeaed6671f8c)

## Resultados

* Quantidade de defeitos identificados pelos testes automatizados, mapeados por funcionalidade
* Quantidade de casos de teste aprovados
* Quantidade de casos de teste executados

* Rastreabilidade: Cada teste está vinculado a um requisito ou funcionalidade específica do sistema
* Cobertura de código: Uma maior cobertura de código geralmente indica um software de maior qualidade
* Tempo de execução dos testes : Se o tempo de execução dos testes está diminuindo, isso pode indicar que o software está se tornando mais eficiente


![image](https://github.com/elayneargollo/cypress/assets/48841005/cfb7ac55-30ce-4a08-8404-379dc3e034e5)







