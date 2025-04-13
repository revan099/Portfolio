let operation = "";

function setOperation(op) {
  operation = op;
}

function calculate() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result;

  if (operation === "add") {
    result = a + b;
  } else if (operation === "subtract") {
    result = a - b;
  } else if (operation === "multiply") {
    result = a * b;
  } else if (operation === "divide") {
    if (b !== 0) {
      result = a / b;
    } else {
      result = "0 bolmek olmaz";
    }
  } else {
    result = "emeliyyat secilmeyib";
  }

  document.getElementById("result").innerText = "netice: " + result;
}