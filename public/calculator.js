class Calculator {
  constructor() {
    this.values = {
      firstNumber: NaN,
      secondNumber: NaN,
      operator: ''
    }
    this.isNewSequence = true;
  }

  currentValue() {
    if(this.values.secondNumber) {
      return this.values.secondNumber;
    } else if (isNaN(this.values.firstNumber)) {
      return 0;
    } else {
      return this.values.firstNumber;
    }
  }

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

  clear() {
    this.values.firstNumber = NaN;
    this.values.secondNumber = NaN;
    this.values.operator = '';
  }

  calculate() {
    if(isNaN(this.values.firstNumber)) {
      throw new Error('required parameter first number is missing');
    }
    if(isNaN(this.values.secondNumber)) {
      throw new Error('required parameter second number missing');
    }
    if(!this.values.operator.length) {
      throw new Error('required parameter operator missing');
    }

    const { firstNumber, secondNumber, operator } = this.values;
    let result;
    switch(operator) {
      case 'add':
        result = this.add(firstNumber, secondNumber);
        break;
      case 'subtract':
        result = this.subtract(firstNumber, secondNumber);
        break;
      case 'multiply':
        result = this.multiply(firstNumber, secondNumber);
        break;
      case 'divide':
        result = this.divide(firstNumber, secondNumber);
        break;
      default:
        break;
    }
    this.clear();
    this.values.firstNumber = result;
    this.isNewSequence = true;
    return result;
  }

  updateNumberValue(value) {
    const numberToUpdate =
      this.values.operator.length ? 'secondNumber' : 'firstNumber';
    if(numberToUpdate === 'firstNumber' && this.isNewSequence) {
      this.values.firstNumber = value;
      this.isNewSequence = false;
    } else {
      let val =
        isNaN(this.values[numberToUpdate]) ? 0 : this.values[numberToUpdate];
      val = val * 10 + value;
      this.values[numberToUpdate] = val;
    }
  }

  updateOperator(operation) {
    if(!isNaN(this.values.firstNumber)) {
      if(isNaN(this.values.secondNumber)) {
        this.values.operator = operation;
      } else {
        this.calculate();
        this.updateOperator(operation);
      }
    }
  }
};

module.exports = Calculator;
