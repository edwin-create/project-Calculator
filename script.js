let val1;
let val2;
let operator;
let clearDisplay= true;

function add(val1, val2) {
    return val1 + val2;
      
  };
  
  function subtract(val1, val2) {
    return val1 - val2;
      
  };
  
  function multiply(arr) {
    return  arr.reduce((acc, val) => acc * val, 1);
  
  };
  
    function divide(val1, val2) {
      if (val2 === 0) {
        return "Oops, LOL!";
      } else {
        return val1 / val2;
      }
    }


function operate(val1, val2, operator) {
    if (operator === "add") {
      return add(val1, val2);
    } 
    else if (operator === "subtract") {
      return subtract(val1, val2);
    }
    else if (operator === "multiply") {
      return multiply([val1, val2]);
    } 
    else if (operator === 'divide') {
        return divide(val1, val2);
      }
    else {
      return "Invalid operator";
    }
    
}

const displayPanel = document.querySelector("#userInput");
const numberButtons = document.querySelectorAll(".num");
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
       if (clearDisplay) {
        displayPanel.value = '';
        clearDisplay = false;
       }
       displayPanel.value += numberButton.id;
      });
    
  });

  const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
      const hasOperator = displayPanel.value.includes('+') || displayPanel.value.includes('-') || displayPanel.value.includes('*') || displayPanel.value.includes('/');
      if (hasOperator) {
        // If an operator exists, it's time to evaluate the current expression
        let expression = displayPanel.value;
        let result;
        if (expression.includes('+')) {
          operator = "add";
          val1 = parseFloat(expression.split('+')[0]);
          val2 = parseFloat(expression.split('+')[1]);
          result = operate(val1, val2, operator);
      } else if (expression.includes('-')) {
          operator = "subtract";
          val1 = parseFloat(expression.split('-')[0]);
          val2 = parseFloat(expression.split('-')[1]);
          result = operate(val1, val2, operator);
      } else if (expression.includes('*')) {
          operator = "multiply";
          val1 = parseFloat(expression.split('*')[0]);
          val2 = parseFloat(expression.split('*')[1]);
          result = operate(val1, val2, operator);
      } else if (expression.includes('/')) {
          operator = "divide";
          val1 = parseFloat(expression.split('/')[0]);
          val2 = parseFloat(expression.split('/')[1]);
          result = operate(val1, val2, operator);
      }
         // Update the display with the result and the new operator
         if (typeof result === 'number') {
          displayPanel.value = parseFloat(result.toFixed(2));
        } else {
          displayPanel.value = result;
        }
        displayPanel.value += operatorButton.textContent;
      } else {
        // If no operator exists, just add the new one to the display
        displayPanel.value += operatorButton.textContent;
      }
      clearDisplay = false;
    });
  });     

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    displayPanel.value = "";
});     

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    displayPanel.value = displayPanel.value.slice(0, -1);
}); 

equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
let expression = displayPanel.value;
    if (expression.includes('+')){
        operator = "add";
        val1=parseFloat(expression.split('+')[0]);
        val2=parseFloat(expression.split('+')[1]);
    expression = add(val1, val2);
    clearDisplay = true;
}
else if (expression.includes('-')){
        operator = "subtract";
        val1=parseFloat(expression.split('-')[0]);
        val2=parseFloat(expression.split('-')[1]);
    expression = subtract(val1, val2);
    clearDisplay = true;
}
else if (expression.includes('*')){
        operator = "multiply";
        val1=parseFloat(expression.split('*')[0]);
        val2=parseFloat(expression.split('*')[1]);
    expression = multiply([val1, val2]);
    clearDisplay = true;
}
else if (expression.includes('/')){
        operator = "divide";
        val1=parseFloat(expression.split('/')[0]);
        val2=parseFloat(expression.split('/')[1]);
    expression = divide(val1, val2);
    clearDisplay = true;
}
if (typeof expression === 'number'){
  displayPanel.value = parseFloat(expression.toFixed(2));
}
else {
  displayPanel.value = expression;
}
});

const enterKey = document.querySelector('#equals');

document.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    enterKey.click(); // Use the correct variable name
  }
});