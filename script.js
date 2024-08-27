//Variables
let firstNumber = "";
let possibleOperators = ["+", "%", "-", "*", "/"];
let operator;
let secondNumber = "";
let waitingForSecondNumber = false;
let operatorButtons = document.querySelectorAll(".operator");
let displayScreen = document.querySelector("#display-p");
let equalTo = document.querySelector("#equalto");
let clear = document.querySelector("#clear");
let point = document.querySelector("#point");
let result;
let activeOperatorButton = null;

//functions for calculations
function roundToTwo(param) {
  return Math.round(param * 100) / 100;
}
function add(param1, param2) {
  result = roundToTwo(param1 + param2);
  displayScreen.textContent = result;
  console.log(result);
}
function remainder(param1, param2) {
  result = param1 % param2;
  displayScreen.textContent = result;
  console.log(result);
}
function subtract(param1, param2) {
  result = roundToTwo(param1 - param2);
  displayScreen.textContent = result;
  console.log(result);
}
function multiply(param1, param2) {
  result = roundToTwo(param1 * param2);
  displayScreen.textContent = result;
  console.log(result);
}
function divide(param1, param2) {
  if (param2 == 0) {
    alert(
      "Seems like you skipped your middleschool . No Problem I'll teach you . If you divide a no by 0 it'll won't be defined.",
    );
    firstNumber = "";
    secondNumber = "";
    operator = "";
    return;
  }
  result = roundToTwo(param1 / param2);
  displayScreen.textContent = result;
  console.log(result);
}
function handleOperator() {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (activeOperatorButton) {
        activeOperatorButton.style.background = "";
      }
      button.style.background = "lightblue";
      activeOperatorButton = button;
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
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if (possibleOperators.includes(operator)) {
    if (operator == "+") {
      add(firstNumber, secondNumber);
    } else if (operator == "-") {
      subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
      multiply(firstNumber, secondNumber);
    } else if (operator == "%") {
      remainder(firstNumber, secondNumber);
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
      if (activeOperatorButton) {
        activeOperatorButton.style.background = "";
        activeOperatorButton = null;
      }

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
  point.addEventListener("click", () => {
    if (!waitingForSecondNumber) {
      if (!firstNumber.includes(".")) {
        firstNumber += ".";
        displayScreen.textContent = firstNumber;
      }
    } else {
      if (!secondNumber.includes(".")) {
        secondNumber += ".";
        displayScreen.textContent = secondNumber;
      }
    }
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
  } else {
    alert("Invalid Input. Enter again");
  }
});
populate();
handleOperator();
