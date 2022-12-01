# Exercício Avaliativo 2 - Testes de API

## ▶ Como executar o projeto

 ### Clone o repositório
 
 > https://github.com/alvarolopes2021/S206-LAB.git
 
 Vá para a pasta do exercício avaliativo 2

 ### Execute
 
  > mvn test -Dtest=GitHubRunner
 
Isto fará com que o projeto rode os testes e gere a pasta target

  * Escolha E2E Testing
  * Escolha o navegador

```
Os testes serão executados automáticamente e são atualizados ao apertar _Ctrl+S_ 

```

### Gerando relatórios

Na pasta do projeto, execute o comando

> ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

> Lembrando que caso algum teste apresente **Erro** atualize a página ou coloque skips nos testes. **Todos** devem rodar e passar

 O site da Mozilla as vezes pode demorar para carregar alguma informação e o teste considera como vazia, causando erro.

🙏 Obrigado