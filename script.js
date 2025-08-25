let val1;
let val2;
let operator;

const add = function(val1, val2) {
    return val1 + val2;
      
  };
  
  const subtract = function(val1, val2) {
    return val1 - val2;
      
  };
  
  const multiply = function(arr) {
    return  arr.reduce((acc, val) => acc * val, 1);
  
  };
  
    const divide = function(val1, val2) {
      if (val2 === 0) {
        return "Error: Division by zero";
      } else {
        return val1 / val2;
      }
    }


function operate(val1, val2, operator) {
    if (operator === "sum") {
      return add(val1, val2);
    } 
    else if (operator === "minus") {
      return subtract(val1, val2);
    }
    else if (operator === "product") {
      return multiply([val1, val2]);
    } 
    else if (operator === 'quotient') {
        return divide(val1, val2);
      }
    else {
      return "Invalid operator";
    }
}

