
Feature: Testando a API do Star Wars.

Scenario: Testando retorno people/1/.
	Given url "http://52.58.110.120/api/people/1/"
  When method get
  Then status 200
    
Scenario: Testando retorno people/1/ com infos inválidas.
	Given url "http://52.58.110.120/api/people/1/1234"
  When method get
  Then status 404
    