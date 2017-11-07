function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  var num = n
  num += 1;
  return num;
}

function dec(n) {
  var num = n;
  num -= 1;
  return num;
}

function makeInt(a) {
  if (a === NaN) {
    return NaN;
  }
  return parseInt('a');
}

function perserveDecimal(a) {
  if (a === NaN) {
    return NaN;
  }
  return parseFloat('a');
}
