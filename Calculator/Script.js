let currentvalue = "";
let previousvalue = "";
let operator = "";

//! displaying values
function updatedisplay(value) {
  document.getElementById("inputtext").value = value;
}
//! Appending values
function appendnumber(number) {
  if (number === "." && currentvalue.includes(".")) {
    return;
  }
  currentvalue += number;
  updatedisplay(currentvalue);
}
//! Backspace
function Backspace() {
  if (currentvalue.length > 0) {
    currentvalue = currentvalue.slice(0, -1);
    updatedisplay(currentvalue);
  } else if (operator.length > 0) {
    operator = "";
    updatedisplay(previousvalue);
  }
}
//! Operation inputs
function operation(op) {
  if (currentvalue === "") return;
  if (operator !== "") calculate();
  operator = op;
  previousvalue = currentvalue;
  currentvalue = "";
  updatedisplay(previousvalue + " " + operator);
}

//! AllClear
function Allclear() {
  currentvalue = "";
  previousvalue = "";
  operator = "";
  updatedisplay("");
}
//! Calculation part
function calculate() {
  let num1 = parseFloat(previousvalue);
  let num2 = parseFloat(currentvalue);
  let result = "";
  switch (operator) {
    case "+": {
      result = num1 + num2;
      break;
    }
    case "-": {
      result = num1 - num2;
      break;
    }
    case "*": {
      result = num1 * num2;
      break;
    }
    case "/": {
      if (num2 === 0) {
        alert("Division by zero is not allowed.");
        return;
      }
      result = num1 / num2;
      break;
    }
    case "%": {
      result = num1 % num2;
      break;
    }
    case "²": {
      result = num1 ** 2;
      break;
    }
    default:
      return;
  }
  currentvalue = result.toString();
  previousvalue = "";
  operator = "";
  let audio = document.getElementById("audio");
  audio.play();
  updatedisplay(currentvalue);
}
