const url = 'http://localhost:1234';

describe('Calculator Display', function() {
  beforeEach(function () {
    cy.visit(url);
  });

  it('should have a 0 button', function() {
    cy.contains('1');
  });
  
  it('should have a 1 button', function() {
    cy.contains('1');
  });
  
  it('should have a 2 button', function() {
    cy.contains('2');
  });
  
  it('should have a 3 button', function() {
    cy.contains('3');
  });
  
  it('should have a 4 button', function() {
    cy.contains('4');
  });
  
  it('should have a 5 button', function() {
    cy.contains('5');
  });
  
  it('should have a 6 button', function() {
    cy.contains('6');
  });
  
  it('should have a 7 button', function() {
    cy.contains('7');
  });
  
  it('should have a 8 button', function() {
    cy.contains('8');
  });
  
  it('should have a 9 button', function() {
    cy.contains('9');
  });
  
  it('should have an equal button', function() {
    cy.contains('=');
  });
  
  it('should have an add button', function() {
    cy.contains('+');
  });
  
  it('should have a subtract button', function() {
    cy.get('#subtract');
  });
  
  it('should have a multiply button', function() {
    cy.contains('x');
  });
  
  it('should have a divide button', function() {
    cy.get('#divide');
  });
  
  it('should have an AC button', function() {
    cy.contains('AC');
  });
})