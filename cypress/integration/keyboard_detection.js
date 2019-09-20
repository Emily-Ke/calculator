describe('Keyboard Detection', function() {
  before(function() {
    cy.visit('/');
  });

  beforeEach(function() {
    cy.contains('AC').click();
  });

  describe('Number pad', function() {
    it('should display 0 when 0 key is pressed', function() {
      cy.get('body').type('0');
      cy.get('#display').should('have.value', '0');
    });

    it('should display 1 when 1 key is pressed', function() {
      cy.get('body').type('1');
      cy.get('#display').should('have.value', '1');
    });

    it('should display 2 when 2 key is pressed', function() {
      cy.get('body').type('2');
      cy.get('#display').should('have.value', '2');
    });

    it('should display 3 when 3 key is pressed', function() {
      cy.get('body').type('3');
      cy.get('#display').should('have.value', '3');
    });

    it('should display 4 when 4 key is pressed', function() {
      cy.get('body').type('4');
      cy.get('#display').should('have.value', '4');
    });

    it('should display 5 when 5 key is pressed', function() {
      cy.get('body').type('5');
      cy.get('#display').should('have.value', '5');
    });

    it('should display 6 when 6 key is pressed', function() {
      cy.get('body').type('6');
      cy.get('#display').should('have.value', '6');
    });

    it('should display 7 when 7 key is pressed', function() {
      cy.get('body').type('7');
      cy.get('#display').should('have.value', '7');
    });

    it('should display 8 when 8 key is pressed', function() {
      cy.get('body').type('8');
      cy.get('#display').should('have.value', '8');
    });

    it('should display 9 when 9 key is pressed', function() {
      cy.get('body').type('9');
      cy.get('#display').should('have.value', '9');
    });

    it('should not display anything when an operator is keyed', function() {
      cy.get('body').type('+');
      cy.get('#display').should('have.value', '0');
      cy.get('body').type('-');
      cy.get('#display').should('have.value', '0');
      cy.get('body').type('*');
      cy.get('#display').should('have.value', '0');
      cy.get('body').type('/');
      cy.get('#display').should('have.value', '0');
    });

    it('should reset to 0 when AC key is pressed', function() {
      cy.get('body').type('1');
      cy.get('#display').should('have.value', '1');
      cy.get('body').type('{backspace}');
      cy.get('#display').should('have.value', '0');
    });

    it('should calculate 1 + 1 = 2 when typed', function() {
      cy.get('body')
        .type('1')
        .type('+')
        .type('1')
        .type('=');
      cy.get('#display').should('have.value', '2');
    });
  });
});
