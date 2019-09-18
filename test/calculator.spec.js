const assert = require('chai').assert;
const Calculator = require('../public/calculator');

let calculator;

describe('Calculator', function() {
  it('should default to empty', function() {
    calculator = new Calculator();
    const { firstNumber, secondNumber, operator } = calculator.values;
    assert.isTrue(
      isNaN(firstNumber),
      `First number is not empty. Expected ${firstNumber} to be NaN`
    );
    
    assert.isTrue(
      isNaN(secondNumber),
      `Second number is not empty. Expected ${secondNumber} to be NaN`
    );

    assert.equal(operator, '', 'operator is not empty');
  });

  describe('Add Method', function() {
    calculator = new Calculator();
    const addResult = calculator.add(2, 3);
    it('should add 2 + 3 correctly', function() {
      assert.equal(addResult, 5);
    });

    it('should retun type number', function() {
      assert.typeOf(addResult, 'number');
    });
  });

  describe('Subtract Method', function() {
    calculator = new Calculator();
    it('should subtract 5 - 1 correctly', function() {
      const subtractResult = calculator.subtract(5, 1);
      assert.equal(subtractResult, 4);
    });
    
    it('should subtract 2 - 3 correctly', function() {
      const subtractResult = calculator.subtract(2, 3);
      assert.equal(subtractResult, -1);
    });

    it('should retun type number', function() {
      const subtractResult = calculator.subtract(2, 3);
      assert.typeOf(subtractResult, 'number');
    });
  });
  
  describe('Multiply Method', function() {
    calculator = new Calculator();
    it('should multiply positive numbers correctly (2 * 3)', function() {
      const multiplyResult = calculator.multiply(2, 3);
      assert.equal(multiplyResult, 6);
    });
    
    it('should multiply positive and negative numbers correctly (2 * -3)',
      function() {
        const multiplyResult = calculator.multiply(2, -3);
        assert.equal(multiplyResult, -6);
      }
    );
    
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
    calculator = new Calculator();
    it('should divide positive numbers correctly (6 / 2)', function() {
      const divideResult = calculator.divide(6, 2);
      assert.equal(divideResult, 3);
    });

    it('should handle fractional results (3 / 2)', function() {
      const divideResult = calculator.divide(3, 2);
      assert.equal(divideResult, 1.5);
    });

    it('should divide positive and negative numbers correctly (6 / -2)',
      function() {
        const divideResult = calculator.divide(6, -2);
        assert.equal(divideResult, -3);
      }
    );

    it('should divide negative numbers correctly (-6 / -2)', function() {
      const divideResult = calculator.divide(-6, -2);
      assert.equal(divideResult, 3);
    });

    it('should return 0 when the numerator is 0 and denominator not 0 (0 / 6)',
     function() {
        const divideResult = calculator.divide(0, 6);
        assert.equal(divideResult, 0);
      }
    );

    it('should return an error when dividing by 0 (6 / 0)', function() {
      assert.throws(
        function(){calculator.divide(6, 0)},
        Error,
        'cannot divide by zero'
      );
    });
    
    it('should return type number', function() {
      const divideResult = calculator.divide(0, 6);
      assert.typeOf(divideResult, 'number');
    });
  });

  describe('Update Number method', function() {
    beforeEach(function() {
      calculator = new Calculator();
    });

    it('should update the first number if operator is not yet specified',
      function() {
        calculator.updateNumberValue(1);
        const updatedNumber = calculator.values.firstNumber;
        assert.equal(updatedNumber, 1);
      }
    );
    
    it('should append first number if another number is given', function() {
      calculator.updateNumberValue(1);
      calculator.updateNumberValue(2);
      const updatedNumber = calculator.values.firstNumber;
      assert.equal(updatedNumber, 12);
    });
    
    it('should update second number if operator is specified', function() {
      calculator.values.firstNumber = 1;
      calculator.values.operator = 'add';
      calculator.updateNumberValue(2);
      const updatedNumber = calculator.values.secondNumber;
      assert.equal(updatedNumber, 2);
    });

    it('should reset the first number if the input following an equals is not an operator',
      function() {
        calculator.values.firstNumber = 1;
        calculator.values.secondNumber = 2;
        calculator.values.operator = 'add';
        calculator.calculate();
        calculator.updateNumberValue(1);
        assert.equal(calculator.values.firstNumber, 1);
      }
    );
  });

  describe('Update Operator method', function() {
    beforeEach(function() {
      calculator = new Calculator();
    });
    it('should not update if the first number is empty', function() {
      calculator.updateOperator('add');
      const updatedOperator = calculator.values.operator;
      assert.equal(updatedOperator, '');
    });
    
    it('should update if the first number is not empty', function() {
      calculator.values.firstNumber = 1;
      calculator.updateOperator('add');
      const updatedOperator = calculator.values.operator;
      assert.equal(updatedOperator, 'add');
    });

    it('should calculate and then update if both the first and second number have values',
      function() {
        calculator.values.firstNumber = 1;
        calculator.values.secondNumber = 1;
        calculator.values.operator = 'add';
        calculator.updateOperator('subtract');
        assert.equal(
          calculator.values.firstNumber,
          2,
          'pending operation should have calculated'
        );
        assert.isTrue(
          isNaN(calculator.values.secondNumber),
          Error,
          `Expected NaN to be ${calculator.values.secondNumber}`)
        assert.equal(
          calculator.values.operator,
          'subtract',
          'operation should update');
      }
    );
  });

  describe('Calculate Method', function() {
    beforeEach(function() {
      calculator = new Calculator();
    });

    it('should throw an error if the first number is not set', function() {
      calculator.values.secondNumber = 1;
      calculator.values.operator = 'add';
      assert.throws(function (){calculator.calculate()}, Error);
    });
    
    it('should throw an error if the second number is not set', function() {
      calculator.values.firstNumber = 1;
      calculator.values.operator = 'add';
      assert.throws(function (){calculator.calculate()}, Error);
    });
    
    it('should throw an error if the operator is not set', function() {
      calculator.values.firstNumber = 1;
      calculator.values.secondNumber = 1;
      assert.throws(function (){calculator.calculate()}, Error);
    });
    
    it('should calculate 1 + 1 = 2', function() {
      calculator.values.firstNumber = 1;
      calculator.values.secondNumber = 1;
      calculator.values.operator = 'add';
      const result = calculator.calculate();
      assert.equal(result, 2);
    });

    it('should calculate 2 - 1 = 1', function() {
      calculator.values.firstNumber = 2;
      calculator.values.secondNumber = 1;
      calculator.values.operator = 'subtract';
      const result = calculator.calculate();
      assert.equal(result, 1);
    });

    it('should calculate 1 * 1 = 1', function() {
      calculator.values.firstNumber = 1;
      calculator.values.secondNumber = 1;
      calculator.values.operator = 'multiply';
      const result = calculator.calculate();
      assert.equal(result, 1);
    });

    it('should calculate 6 / 2 = 3', function() {
      calculator.values.firstNumber = 6;
      calculator.values.secondNumber = 2;
      calculator.values.operator = 'divide';
      const result = calculator.calculate();
      assert.equal(result, 3);
    });

    it("should update the calculator's values after calculation", function() {
      calculator.values.firstNumber = 6;
      calculator.values.secondNumber = 2;
      calculator.values.operator = 'divide';
      const result = calculator.calculate();
      assert.equal(
        calculator.values.firstNumber,
        result,
        'First number did not update'
      );
      assert.isTrue(
        isNaN(calculator.values.secondNumber),
        `second number did not reset. Expect ${calculator.values.secondNumber} to be NaN`
      );
      assert.equal(calculator.values.operator, '', 'operator did not reset');
    });
  });

  describe('Clear method', function() {
    it('should reset the values', function() {
      calculator = new Calculator();
      calculator.values.firstNumber = 1;
      calculator.values.secondNumber = 1;
      calculator.values.operator = 'add';
      calculator.clear();
      assert.isTrue(
        isNaN(calculator.values.firstNumber),
        'first number did not reset'
      );
      assert.isTrue(
        isNaN(calculator.values.secondNumber),
        'second number did not reset'
      );
      assert.equal(calculator.values.operator, '', 'operator did not reset');
    });
  });
});
