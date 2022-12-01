Feature: Testando API do GitHub

Background: Executa uma vez antes de cada teste
	* def url_base = "https://api.github.com"
  
Scenario: Pegando elementos do array de response e testando o tipo
	Given url url_base
  And path '/users'
  When method get
  Then status 200
  And match $ == '#[]'
  And match $ == '#[30]'
  And match each $ contains {login: '#string', id: '#number'}
  
Scenario: Verificando o tamanho do array errado
	Given url url_base
  And path '/users'
  When method get
  Then status 200
  And match $ == '#[]'
  And match $ != '#[40]'
  And match each $ contains {login: '#string', id: '#number'}

Scenario: Pegando um user pelo nome
	Given url url_base
  And path '/users/defunkt'
  When method get
  Then status 200
  And match $.login == "defunkt"
  
Scenario: Pegando um user que não existe
	Given url url_base
  And path '/users/olavras'
  When method get
  Then status 404
  And match $.message == "Not Found"

Scenario: Entrando na API que exige autenticação
	Given url url_base
  And path '/user'
  When method get
  Then status 401
  And match $.message == "Requires authentication"

Scenario: Verificando message errado
	Given url url_base
  And path '/user'
  When method get
  Then status 401
  And match $.message != "Not Found"