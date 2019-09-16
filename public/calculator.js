class Calculator {
  add(value1, value2) {
    return value1 + value2;
  }
  
  subtract(value1, value2) {
    return value1 - value2;
  }

  multiply(value1, value2) {
    return value1 * value2;
  }

  divide(value1, value2) {
    if(value2 === 0) { throw new Error('cannot divide by zero'); }
    return value1 / value2;
  }
};

module.exports = Calculator;