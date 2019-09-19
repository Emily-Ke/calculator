const Calculator = require('./calculator');
const calculator = new Calculator;

const keys = [
  [ { text: 'AC', span: 3, id: 'clear' },
    { text: String.fromCharCode(247), type: 'operator' },
  ],[
    { text: '7', type: 'number' },
    { text: '8', type: 'number' },
    { text: '9', type: 'number' },
    { text: 'x', type: 'operator' }
  ],[
    { text: '4', type: 'number' },
    { text: '5', type: 'number' },
    { text: '6', type: 'number' },
    { text: String.fromCharCode(45), type: 'operator' }
  ],[
    { text: '3', type: 'number' },
    { text: '2', type: 'number' },
    { text: '1', type: 'number' },
    { text: '+', type: 'operator' }
  ],[
    { text: '0', type: 'number', span: 3 },
    { text: '=', type: 'operator' }
  ],
]

const calculatorElement = document.querySelector('.calculator');

// create number display
const input = document.createElement('input');
input.type = 'number';
input.value = 0;
input.disabled = true;
input.setAttribute('id', 'display');
calculatorElement.appendChild(input);

// create keys
for(let row of keys) {
  for(let key of row) {
    const keyButton = document.createElement('button');
    const keyButtonText = document.createTextNode(key.text);
    keyButton.appendChild(keyButtonText);
    if(key.type) {
      keyButton.classList.add(key.type);
    }
    if(key.span) {
      keyButton.classList.add(`span-${key.span}`);
    }
    if(key.id) {
      keyButton.setAttribute('id', key.id);
    }
    calculatorElement.appendChild(keyButton);
  }
}

const display = document.getElementById('display');

function updateDisplay() {
  display.value = calculator.currentValue();
}

// clear
const clearKey = document.getElementById('clear');
clearKey.onclick = () => {
  calculator.clear();
  updateDisplay();
}

// operator keys
const operatorKeys = document.querySelectorAll('.operator');
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

// number keys
const numberKeys = document.querySelectorAll('.number');
for(let numberKey of numberKeys) {
  numberKey.onclick = () => {
    calculator.updateNumberValue(Number(numberKey.textContent));
    updateDisplay();
  }
}
