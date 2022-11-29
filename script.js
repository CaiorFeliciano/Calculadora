var newCalculation = false;

function insertChar (char) {
  var displayValue = document.getElementById('display').innerHTML;

  if (newCalculation) {
    displayValue = " ";
    newCalculation = false;
  }

  document.getElementById('display').innerHTML = displayValue + char;
}

function clearDisplay() {
  document.getElementById('display').innerHTML = " ";
}

function back() {
  var displayValue = document.getElementById('display').innerHTML;

  document.getElementById('display').innerHTML = displayValue.substring(0, displayValue.length -1);
}

function calculate() {
  var displayValue = document.getElementById('display').innerHTML;

  if (displayValue) {
    document.getElementById('display').innerHTML = eval(displayValue);
    newCalculation = true;
  }
}

