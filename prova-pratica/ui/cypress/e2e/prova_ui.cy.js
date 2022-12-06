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

  it('Fill message fields missing description characters', () => {
    let info = createMessageFileds();
    cy.visit('https://automationintesting.online/');
    cy.get('[data-testid="ContactName"]').type(info[0]);
    cy.get('[data-testid="ContactEmail"]').type(info[1]);
    cy.get('[data-testid="ContactPhone"]').type(info[2]);
    cy.get('[data-testid="ContactSubject"]').type(info[3]);
    cy.get('[data-testid="ContactDescription"]').type(info[5]);
    cy.get('#submitContact').click();
    cy.get('.alert > p').should('contain.text', 'Message must be between 20 and 2000 characters.')
  })

  it('Shows book area', () => {
    cy.visit('https://automationintesting.online/');
    cy.get('.col-sm-7 > .btn').click();
    cy.get('.container-fluid > :nth-child(4) > :nth-child(1) > :nth-child(2)').should('exist');
  })

})

function createMessageFileds() {

  let hours = new Date().getHours().toString();
  let minutes = new Date().getSeconds().toString();
  let seconds = new Date().getSeconds().toString();
  let willMiss = "a";
  let user = "user" + hours + minutes + seconds;
  let email = "test" + hours + minutes + seconds + '@gmail.com';
  let phone = "55 35 9999-99990";
  let subject = "test" + hours + minutes + seconds;
  let message = "Test message typed at " + hours + "h" + minutes + "m" + seconds + "s";
  let userinfo = [user, email, phone, subject, message, willMiss];

  return userinfo;
}