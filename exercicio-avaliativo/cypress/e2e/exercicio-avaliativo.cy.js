/// <reference types="cypress" />

describe('Testing developer mozilla website', () => {

  it.skip('Changing theme', () => {
    cy.viewport(1340, 750) 
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button > .button-wrap').click();
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button > .button-wrap').should('have.css', 'background-color')
      .and('eq', 'rgb(27, 27, 27)');
  });

  it.skip('Searching', () => {
    cy.viewport(1340, 750)
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('#hp-search-input').type('doctype');
    cy.get('#hp-search-form > .search-button').click();
    cy.get('h1').should('contain.text', 'Search results for: doctype')
  }) 

  it.skip('Checking if the language is NOT portuguese', () => {
    cy.viewport(1340, 750)
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('.top-navigation-main :nth-child(1) > a.top-level-entry').click();
    cy.get('#languages-switcher-button > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button').click();
    cy.get('#languages-switcher-button > .button-wrap').should('not.have.text', 'Portuguese')
  }) 

  it.skip('Accessing HTML page', () => {
    cy.viewport(1340, 750)
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('.top-navigation-main :nth-child(1) > a.top-level-entry').focus();
    cy.get('.html-link-container .submenu-item ').first().click()
    cy.get('h1').should('have.text', 'HTML: Linguagem de Marcação de Hipertexto');
  }) 

  it.skip('Accessing HTML page and checking topic', () => {
    cy.viewport(1340, 750)
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('.top-navigation-main :nth-child(1) > a.top-level-entry').focus();
    cy.get('.html-link-container .submenu-item ').first().click({force:true})
    cy.get('.toc > .document-toc-container > .document-toc > #toc-entries > :nth-child(3) > .document-toc-link').click({force:true});
    cy.get('.toc > .document-toc-container > .document-toc > #toc-entries > :nth-child(3) > .document-toc-link').should('have.css', 'background-color')
      .and('eq', 'rgba(0, 0, 0, 0)');
  }) 

  it('Changing theme - wrong selection', () => {
    cy.viewport(1340, 750) 
    cy.visit('https://developer.mozilla.org/pt-BR/');
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(2) > .button > .button-wrap').click();
    cy.get('div.theme-switcher-menu > .action > .button-wrap').click();
    cy.get('.submenu > :nth-child(3) > .button > .button-wrap').should('have.css', 'background-color')
      .and('not.eq', 'rgb(27, 27, 27)');
  });

})