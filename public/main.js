const Calculator = require('./calculator');
const calculator = new Calculator;

const display = document.getElementById('display');

// clear
const clearKey = document.getElementById('all-clear');
clearKey.onclick = () => {
  calculator.clear();
  updateDisplay();
}

// operations
const operatorKeys = document.querySelectorAll('.operation');
for(let operatorKey of operatorKeys) {
  if(operatorKey.textContent === '=') {
    operatorKey.onclick = () => {
      calculator.calculate();
      updateDisplay();
    }
  } else {
    operatorKey.onclick = () => {
      let operator;
      switch(operatorKey.textContent) {
        case '+':
          operator = 'add';
          break;
        case String.fromCharCode(45):
          operator = 'subtract';
          break;
        case 'x':
          operator = 'multiply';
          break;
        case String.fromCharCode(247):
          operator = 'divide';
          break;
        default:
          break;
      }
      calculator.updateOperator(operator);
      updateDisplay();
    }
  }
}

// numbers
const numberKeys = document.querySelectorAll('.number');
for(let numberKey of numberKeys) {
  numberKey.onclick = () => {
    calculator.updateNumberValue(Number(numberKey.textContent));
    updateDisplay();
  }
}

function updateDisplay() {
  display.value = calculator.currentValue();
}
