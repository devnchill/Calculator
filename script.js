//Variables
let firstNumber = "";
let possibleOperators = ["+", "-", "*", "/"];
let operator;
let secondNumber = "";
let waitingForSecondNumber = false;
let operatorButtons = document.querySelectorAll(".operator");
let displayScreen = document.querySelector("#display-p");
let equalTo = document.querySelector("#equalto");
let clear = document.querySelector("#clear");
let result;

//functions for calculations
function add(param1, param2) {
  result = param1 + param2;
  displayScreen.textContent = result;
  console.log(result);
}
function subtract(param1, param2) {
  result = param1 - param2;
  displayScreen.textContent = result;
  console.log(result);
}
function multiply(param1, param2) {
  result = param1 * param2;
  displayScreen.textContent = result;
  console.log(result);
}
function divide(param1, param2) {
  result = param1 / param2;
  displayScreen.textContent = result;
  console.log(result);
}
function handleOperator() {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (firstNumber != "" && secondNumber != "") {
        operate(firstNumber, operator, secondNumber);
        firstNumber = result;
        secondNumber = "";
        displayScreen.textContent = result;
      }
      operator = button.textContent;
      waitingForSecondNumber = true;
    });
  });
}

function operate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
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
function populate() {
  let allNumberButtons = document.querySelectorAll(".numbers");
  allNumberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!waitingForSecondNumber) {
        if (displayScreen.textContent == "Clear") {
          displayScreen.textContent = "";
        }
        firstNumber += button.textContent;
        displayScreen.textContent = firstNumber;
      } else {
        secondNumber += button.textContent;
        displayScreen.textContent = secondNumber;
      }
    });
  });
}
clear.addEventListener("click", () => {
  displayScreen.textContent = "Clear";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  waitingForSecondNumber = false;
});
equalTo.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    operate(firstNumber, operator, secondNumber);
  }
});
populate();
handleOperator();
