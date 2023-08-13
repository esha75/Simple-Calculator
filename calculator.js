let num1 = ""; 
let operator = "";
let num2 = ""; 
let result = 0;
let output = document.getElementById("display");
function appendNumber(num) {
  if (operator === "") {
    num1 += num; 
  } else {
    num2 += num; 
  }
  updateDisplay();
}
function appendDecimal() {
  if (operator === "" && !num1.includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.includes(".")) {
    num2 += ".";
  }
  updateDisplay();
}
function updateDisplay() {
  output.value = num1 + " " + operator + " " + num2;
}
function clearDisplay() {
  num1 = "";
  operator = "";
  num2 = "";
  result = 0;
  updateDisplay();
}
function setOperator(op) {
  if (num1 !== "") {
    operator = op;
    updateDisplay();
  }
}

function del(){
  if (operator === "") {
      num1 = num1.slice(0, -1);
    } 
  else {
      num2 = num2.slice(0, -1);
    }
    updateDisplay();
}
function calculate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let equation = num1 + " " + operator + " " + num2;
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      case "%":
        result = parseFloat(num1) % parseFloat(num2);
        break;
      
    }
    num1 = result.toString();
    operator = "";
    num2 = "";
    updateDisplay(equation);
  }
}