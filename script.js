function add(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

function subtract(numbers) {
  return numbers.reduce((total, current) => total - current);
}
function multiply(numbers) {
  return numbers.reduce((multiplicand, multiply) => multiplicand * multiply);
}
function divide(numbers) {
  return numbers.reduce((dividend, divisor) => dividend / divisor);
}
function modulo(numbers) {
  return numbers.reduce((dividend, divisor) => dividend % divisor);
}
//paspaudus skaiciu ideti ji i array(NEZINAU AR TEISINGAI CIA)-mintis
