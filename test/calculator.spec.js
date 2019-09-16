const assert = require('chai').assert;
const Calculator = require('../public/calculator');
// const sayHello = require('../public/calculator').sayHello;
// const addNumbers = require('../public/calculator').addNumbers;

const calculator = new Calculator();

describe('Calculator', function() {
  describe('Add Method', function() {
    const addResult = calculator.add(2, 3);
    it('should add 2 + 3 correctly', function() {
      assert.equal(addResult, 5);
    });

    it('should retun type number', function() {
      assert.typeOf(addResult, 'number');
    });
  });

  describe('Subtract Method', function() {
    const subtractResultPositive = calculator.subtract(5, 1);
    const subtractResultNegative = calculator.subtract(2, 3);
    it('should subtract 5 - 1 correctly', function() {
      assert.equal(subtractResultPositive, 4);
    });
    
    it('should subtract 2 - 3 correctly', function() {
      assert.equal(subtractResultNegative, -1);
    });

    it('should retun type number', function() {
      assert.typeOf(subtractResultNegative, 'number');
    });
  });
  
  describe('Multiply Method', function() {
    it('should multiply positive numbers correctly (2 * 3)', function() {
      const multiplyResult = calculator.multiply(2, 3);
      assert.equal(multiplyResult, 6);
    });
    
    it('should multiply positive and negative numbers correctly (2 * -3)', function() {
      const multiplyResult = calculator.multiply(2, -3);
      assert.equal(multiplyResult, -6);
    });
    
    it('should multiply negative numbers correctly (-2 * -3)', function() {
      const multiplyResult = calculator.multiply(-2, -3);
      assert.equal(multiplyResult, 6);
    });
    
    it('should multiply by 0 correctly (2 * 0)', function() {
      const multiplyResult = calculator.multiply(2, 0);
      assert.equal(multiplyResult, 0);
    });

    it('should return type number', function() {
      const multiplyResult = calculator.multiply(2, 0);
      assert.typeOf(multiplyResult, 'number');
    });
  });

  describe('Divide Method', function() {
    it('should divide positive numbers correctly (6 / 2)', function() {
      const divideResult = calculator.divide(6, 2);
      assert.equal(divideResult, 3);
    });

    it('should handle fractional results (3 / 2)', function() {
      const divideResult = calculator.divide(3, 2);
      assert.equal(divideResult, 1.5);
    });

    it('should divide positive and negative numbers correctly (6 / -2)', function() {
      const divideResult = calculator.divide(6, -2);
      assert.equal(divideResult, -3);
    });

    it('should divide negative numbers correctly (-6 / -2)', function() {
      const divideResult = calculator.divide(-6, -2);
      assert.equal(divideResult, 3);
    });

    it('should return 0 when the numerator is 0 and denominator not 0 (0 / 6)',
     function() {
      const divideResult = calculator.divide(0, 6);
      assert.equal(divideResult, 0);
    });

    it('should return type number', function() {
      const divideResult = calculator.divide(0, 6);
      assert.typeOf(divideResult, 'number');
    });

    it('should return an error when dividing by 0 (6 / 0)', function() {
      assert.throws(
        function(){calculator.divide(6, 0)},
        Error,
        'cannot divide by zero'
      );
    });
  });
});