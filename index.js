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
  var num = parseInt(a);
  if (num === NaN) {
    return NaN;
  }
  return parseInt(num);
}

function perserveDecimal(a) {
  var num = parseFloat(a);
  if (num === NaN) {
    return NaN;
  }
  return parseFloat(num);
}
