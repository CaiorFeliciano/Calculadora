function insert (num) {
  var number = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = number + num;
}

function clean(){
  document.getElementById('display').innerHTML = " ";
}

function back() {
  var result = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
  var result = document.getElementById('display').innerHTML;
  if (result) {
    document.getElementById('display').innerHTML = eval(result);
  }
}

