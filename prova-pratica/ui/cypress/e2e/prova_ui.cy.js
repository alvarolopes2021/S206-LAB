/// <reference types="cypress" />

describe('Test scenarios for automationintesting.online', () => {

  it('Fill message fields', () => {
    let info = createMessageFileds();
    cy.visit('https://automationintesting.online/');
    cy.get('[data-testid="ContactName"]').type(info[0]);
    cy.get('[data-testid="ContactEmail"]').type(info[1]);
    cy.get('[data-testid="ContactPhone"]').type(info[2]);
    cy.get('[data-testid="ContactSubject"]').type(info[3]);
    cy.get('[data-testid="ContactDescription"]').type(info[4]);
    cy.get('#submitContact').click();
    cy.get(':nth-child(2) > div > h2').should('contain.text', 'Thanks for getting in touch');    
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

  it.skip('Caso de teste: realizando login com sucesso', () => {
    let info = createUsers();
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it.skip('Caso de teste: Deletando o usuário com sucesso', () => {
    let info = createUsers();
    cy.login(info[0], info[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(info[0], info[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
  })


})

function createMessageFileds(){
  
  let hours = new Date().getHours().toString();
  let minutes = new Date().getSeconds().toString();
  let seconds = new Date().getSeconds().toString();
  let user = "user" + hours + minutes + seconds;
  let email = "test" + hours + minutes + seconds + '@gmail.com';
  let phone = "55 35 9999-99990";
  let subject = "test" + hours + minutes + seconds;
  let message = "Test message typed at " + hours + "h" + minutes + "m" + seconds + "s";
  let userinfo = [user, email, phone, subject, message]; 

  return userinfo;
}