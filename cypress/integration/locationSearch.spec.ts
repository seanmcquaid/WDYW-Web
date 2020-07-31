/// <reference types="cypress" />

type Url = string;
describe('Restaurant Search', () => {
  beforeEach(() => {
    const url: Url = "http://localhost:3000"
    cy.visit(url);
  });

  it('Successfully displays restaurants', () => {
    cy.get('[data-testid="Location SearchTextInput"]')
      .type('Atlanta, GA')
      .should('have.value', 'Atlanta, GA');
    
    cy.get('.sc-AxmLO > :nth-child(1)').should('have.text', 'Atlanta, Georgia');
    
    cy.get('.sc-AxmLO > :nth-child(1)')
      .click();
    
    cy.get('[data-testid="Location SearchTextInput"]')
      .should('have.value', 'Atlanta, Georgia');
    
    cy.get('[data-testid=SearchButton]')
      .click();
    
    const cuisineList = cy.get('[data-testid=cuisineList]').children;

    console.log(cuisineList.length);
    
    cy.get('[data-testid=cuisineList] > :nth-child(1)')
      .click();
    
    cy.get('[data-testid=cuisineList] > :nth-child(1)')
      .click();

    cy.get('[data-testid="Next PageButton"]')
      .click();

    cy.get('.sc-AxjAm')
      .should("have.text", "Recommended Restaurants");
    
    cy.get('.sc-fzplWN > :nth-child(1)')
      .should("be.visible");
  });
});