//Variables
let firstNumber;
let possibleOperators = ["+", "-", "*", "/"];
let operator;
let secondNumber;

//functions for calculations
function add(param1, param2) {
  result = param1 + param2;
  console.log(result);
}
function subtract(param1, param2) {
  result = param1 - param2;
  console.log(result);
}
function multiply(param1, param2) {
  result = param1 * param2;
  console.log(result);
}
function divide(param1, param2) {
  result = param1 / param2;
  console.log(result);
}
function operate(firstNumber, operator, secondNumber) {
  if (possibleOperators.includes(operator)) {
    if (operator == "+") {
      add(firstNumber, secondNumber);
    } else if (operator == "-") {
      subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
      multiply(firstNumber, secondNumber);
    } else {
      divide(firstNumber, secondNumber);
    }
  } else {
    console.log("Invalid Operator Found");
    return;
  }
}
