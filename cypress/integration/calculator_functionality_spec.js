describe('Calculator Functionality', function() {
  before(function(){
    cy.visit('/');
  });

  beforeEach(function() {
    cy.contains('AC').click();
  });

  describe('Number Keys Display', function() {
    it('should display 1 when 1 button is clicked', function() {
      cy.contains('1').click();
      cy.get('#display').should('have.value', '1');
    });
    
    it('should display 2 when 2 button is clicked', function() {
      cy.contains('2').click();
      cy.get('#display').should('have.value', '2');
    });

    it('should display 3 when 3 button is clicked', function() {
      cy.contains('3').click();
      cy.get('#display').should('have.value', '3');
    });

    it('should display 4 when 4 button is clicked', function() {
      cy.contains('4').click();
      cy.get('#display').should('have.value', '4');
    });

    it('should display 5 when 5 button is clicked', function() {
      cy.contains('5').click();
      cy.get('#display').should('have.value', '5');
    });

    it('should display 6 when 6 button is clicked', function() {
      cy.contains('6').click();
      cy.get('#display').should('have.value', '6');
    });

    it('should display 7 when 7 button is clicked', function() {
      cy.contains('7').click();
      cy.get('#display').should('have.value', '7');
    });

    it('should display 8 when 8 button is clicked', function() {
      cy.contains('8').click();
      cy.get('#display').should('have.value', '8');
    });

    it('should display 9 when 9 button is clicked', function() {
      cy.contains('9').click();
      cy.get('#display').should('have.value', '9');
    });
  });
  
  describe('Mathematic Operations', function() {
    it('should add 1 + 2', function() {
      cy.contains('1').click();
      cy.get('#display').should('have.value', '1');
      cy.contains('+').click();
      cy.get('#display').should('have.value', '1');
      cy.contains('2').click();
      cy.get('#display').should('have.value', '2');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '3');
    });

    it('should subtract 3 - 4', function() {
      cy.contains('3').click();
      cy.get('#display').should('have.value', '3');
      cy.contains(String.fromCharCode(45)).click();
      cy.get('#display').should('have.value', '3');
      cy.contains('4').click();
      cy.get('#display').should('have.value', '4');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '-1');
    });
    
    it('should multiply 5 x 6', function() {
      cy.contains('5').click();
      cy.get('#display').should('have.value', '5');
      cy.contains('x').click();
      cy.get('#display').should('have.value', '5');
      cy.contains('6').click();
      cy.get('#display').should('have.value', '6');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '30');
    });
    
    it('should divide 8 / 2', function() {
      cy.contains('8').click();
      cy.get('#display').should('have.value', '8');
      cy.contains(String.fromCharCode(247)).click();
      cy.get('#display').should('have.value', '8');
      cy.contains('2').click();
      cy.get('#display').should('have.value', '2');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '4');
    });

    it('should calculate (100 / 2) + 79', function() {
      cy.contains('1').click();
      cy.get('#display').should('have.value', '1');
      cy.contains('0').click();
      cy.get('#display').should('have.value', '10');
      cy.contains('0').click();
      cy.get('#display').should('have.value', '100');
      cy.contains(String.fromCharCode(247)).click();
      cy.get('#display').should('have.value', '100');
      cy.contains('2').click();
      cy.contains('+').click();
      cy.get('#display').should('have.value', '50');
      cy.contains('7').click();
      cy.get('#display').should('have.value', '7');
      cy.contains('9').click();
      cy.get('#display').should('have.value', '79');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '129');
    });

    it('should reset if AC is pushed', function() {
      cy.contains('1').click();
      cy.get('#display').should('have.value', '1');
      cy.contains('AC').click();
      cy.get('#display').should('have.value', '0');
      cy.contains('+').click();
      cy.contains('2').click();
      cy.get('#display').should('have.value', '2');
      cy.contains('+').click();
      cy.contains('1').click();
      cy.get('#display').should('have.value', '1');
      cy.contains('=').click();
      cy.get('#display').should('have.value', '3');
    });
  });
});