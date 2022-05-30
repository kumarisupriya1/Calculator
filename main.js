function add() {
  var a, b;
  a = Number(document.getElementById("n1").value);
  b = Number(document.getElementById("n2").value);
  c = a + b; 
  document.getElementById("res").value = c;
 
}
function sub() {
  var a, b;
  a = Number(document.getElementById("n1").value);
  b = Number(document.getElementById("n2").value);
  d = a - b;
  document.getElementById("res").value = d;
}

function mul() {
  var a, b;
  a = Number(document.getElementById("n1").value);
  b = Number(document.getElementById("n2").value);
  e = a * b;
  document.getElementById("res").value = e;
}

function div() {
  var a, b;
  a = Number(document.getElementById("n1").value);
  b = Number(document.getElementById("n2").value);
  f = a / b;
  document.getElementById("res").value = f;
}
function reset() {
  document.getElementById("res").value = null;
  document.getElementById("n1").value = null;
  document.getElementById("n2").value = null;
}
