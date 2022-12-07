
Feature: Testando a API gorest.

Background: Executa antes de cada teste
	* def url_base = "https://gorest.co.in/public/v2"
	* def gorest_token = read("gorest_token.txt")

Scenario: Testando retorno
	Given url url_base
	And path "/users"
  When method get
  Then status 200 

Scenario: Testando retorno de um usuario
	Given url url_base
	And path "/users/3"
  When method get
  Then status 200
    
Scenario: Testando retorno e varificando JSON.
	Given url url_base 
	And path "/users/3"
  When method get
  Then status 200
  And match response.email == "guru_pandey@wilderman-walsh.com"
  
Scenario: Criando novo elemento usando metodo post
	Given url url_base
  And path '/users'
  * header Authorization = 'Bearer ' + gorest_token 
  # para facilitar, adicione 2 ao número  -> 17 + 2
  And request {"name":"Novo User", "gender":"male", "email":"provades206_17@gmail.com", "status":"active"}
  When method post
  Then status 201
  And match $.id == 6311
# adicione 2 ao id para passar o teste. Caso não passe, a resposta da api será um erro
# verifique qual foi o último id da plataforma e tente colocar um id esperado
# que corresponda ao usuário criado 
# quando eu criei o teste, o meu user criado foi 6311
# lembre-se, email repetido irá retornar erro
# para passar, eu coloquei um _xx -> coloque um número maior após o _
  
Scenario: Criando novo elemento usando metodo post e errando o id
	Given url url_base
  And path '/users'
  * header Authorization = 'Bearer ' + gorest_token 
  # lembre-se, email repetido irá retornar erro
	# para passar, eu coloquei um _xx -> coloque um número maior após o _
	# para facilitar, adicione 2 ao número  -> 18 + 2
  And request {"name":"Novo User", "gender":"male", "email":"provades206_18@gmail.com", "status":"active"}
  When method post
  Then status 201
  And match $.id != 5
  
  