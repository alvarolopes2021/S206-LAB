/// <reference types="cypress" />

describe('criando cenário de teste para o site globalsqa', () => {

  it.skip('Caso de teste: registrando um user no site com sucesso', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Inatel')
    cy.get("#Text1").type('Inatel')
    cy.get("#username").type('Inatel')
    cy.get("#password").type('Inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it.skip('Caso de teste: registrando um user com falha (faltando senha)', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('Inatel')
    cy.get("#Text1").type('Inatel')
    cy.get("#username").type('Inatel')
    cy.get("#password").type('Inatel')
    cy.get("#password").clear()
    //cy.get('.btn-primary').click()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
    
  })

  it('Caso de teste: realizando login com sucesso', () => {
    let info = createUsers();
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })


})

function createUsers(){
  
  let hours = new Date().getHours().toString();
  let minutes = new Date().getSeconds().toString();
  let seconds = new Date().getSeconds().toString();
  let user = hours + minutes + seconds + 'id';
  let psw = hours + minutes + seconds + 'psw';
  let userinfo = [user, psw]; 

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)  
  cy.get("#Text1").type(user)
  cy.get("#username").type(user)
  cy.get("#password").type(psw)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userinfo;
}