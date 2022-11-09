/// <reference types="cypress" />

describe('Testing developer mozilla website', () => {

  it('Changing theme', () => {
    cy.viewport(1340, 750) // Set viewport to 550px x 750px
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button > .button-wrap').click();
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button > .button-wrap').should('have.css', 'background-color')
      .and('eq', 'rgb(27, 27, 27)');
  })

})