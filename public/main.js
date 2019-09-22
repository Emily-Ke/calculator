const Calculator = require('./calculator');
const calculator = new Calculator;

const keys = [
  [ { text: 'AC', span: 3, id: 'all-clear'},
    { text: String.fromCharCode(247), type: 'operator', id: 'divide' },
  ],[
    { text: '7', type: 'number', id: 'seven' },
    { text: '8', type: 'number', id: 'eight' },
    { text: '9', type: 'number', id: 'nine' },
    { text: 'x', type: 'operator', id: 'multiply'}
  ],[
    { text: '4', type: 'number', id: 'four' },
    { text: '5', type: 'number', id: 'five' },
    { text: '6', type: 'number', id: 'six' },
    { text: String.fromCharCode(45), type: 'operator', id: 'subtract' }
  ],[
    { text: '3', type: 'number', id: 'three' },
    { text: '2', type: 'number', id: 'two' },
    { text: '1', type: 'number', id: 'one' },
    { text: '+', type: 'operator', id: 'add' }
  ],[
    { text: '0', type: 'number', span: 3, id: 'zero' },
    { text: '=', type: 'operator', id: 'equal' }
  ],
]

const keysToIds = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '=': 'equal',
  'Backspace': 'all-clear'
};

const calculatorElement = document.querySelector('.calculator');

// create output display and keyboard
const display = document.createElement('input');
display.type = 'number';
display.value = 0;
display.disabled = true;
display.setAttribute('id', 'display');
display.setAttribute('aria-label', 'display screen');
calculatorElement.appendChild(display);

const calculatorKeyboard = document.createElement('div');
calculatorKeyboard.classList.add('calculator-keyboard');
calculatorElement.appendChild(calculatorKeyboard);

function updateDisplay() {
  display.value = calculator.currentValue();
}

function handleClear() {
  calculator.clear();
  updateDisplay();
}

function handleCalculate() {
  try {
    calculator.calculate();
  }
  catch(error) {
    console.log(error);
  }
  updateDisplay();
}

function handleOperatorChange(operator) {
  let operation;
    switch(operator) {
      case '+':
        operation = 'add';
        break;
      case String.fromCharCode(45):
      case '-':
        operation = 'subtract';
        break;
      case 'x':
      case '*':
        operation = 'multiply';
        break;
      case String.fromCharCode(247):
      case '/':
        operation = 'divide';
        break;
      default:
        break;
    }
    calculator.updateOperator(operation);
    updateDisplay();
}

function handleNumberChange(value) {
  calculator.updateNumberValue(Number(value));
  updateDisplay();
}

// create keys
for(let row of keys) {
  for(let key of row) {
    const keyButton = document.createElement('button');
    const keyButtonText = document.createTextNode(key.text);
    keyButton.appendChild(keyButtonText);
    keyButton.setAttribute('id', key.id);
    if(key.id === 'all-clear') {
      keyButton.setAttribute('aria-label', 'reset the calculator');
      keyButton.addEventListener('click', () => handleClear());
    }
    if(key.type) {
      keyButton.classList.add(key.type);
      if(key.type === 'number') {
        keyButton.addEventListener('click', () => {
          handleNumberChange(key.text);
        });
      } else if (key.type === 'operator') {
        if(key.text === '=') {
          keyButton.setAttribute('aria-label', 'calculate');
          keyButton.addEventListener('click', () => handleCalculate());
        } else {
          keyButton.setAttribute('aria-label', key.id);
          keyButton.addEventListener('click', () => {
            handleOperatorChange(key.text);
          });
        }
      }
    }
    if(key.span) {
      keyButton.classList.add(`span-${key.span}`);
    }
    calculatorKeyboard.appendChild(keyButton);
  }
}

// enables keyboard input
document.addEventListener('keydown', e => {
  const element = document.getElementById(keysToIds[e.key])
  if(element) { element.focus(); }
});

document.addEventListener('keyup', e => {
  const element = document.getElementById(keysToIds[e.key]);
  if(element) {
    element.blur();
    if(/\d/.test(e.key)) {
      handleNumberChange(e.key);
    } else if(/[+\-*/]/.test(e.key)) {
      handleOperatorChange(e.key);
    } else if(e.key === '=') {
      handleCalculate();
    } else if(e.key === 'Backspace') {
      handleClear();
    }
  }
});
