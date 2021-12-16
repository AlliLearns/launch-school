// The `||` operator returns a truthy value
// if either or both of its operands are truthy
// and a falsey value if both operands are falsey.
// The `&&` operator returns a truthy value if 
// both its operands are truthy, and a falsy value
// if either operand is falsey. This works great
// until you only need one, but not both, of two
// conditions to be truthy: the so-called 
// exclusive or. 

// In this exercise, you will write a function 
// named `xor` that takes two arguments and 
// returns `true` if exactly one of its arguments
// is truthy and `false` otherwise. Note that we
// are looking for a boolean result instead of a
// truthy/falsey value as returned by `||` and `&&`.

/*
  PROBLEM
    input is two values of any type
    output is a boolean based on the exclusive or of those values
    return `true` if exactly one of its arguments is truthy and `false` otherwise

  ALGORITHM
    return whether exactly one operand is true...
    if AND is true, then both operands are true, so return false
    if OR is true, and we're passed the AND, then exactly one operand is true, so return true
    if neither of these were true, then return false
*/

function xor(operand1, operand2) {
  if (operand1 && operand2) return false;
  if (operand1 || operand2) return true;
  return false;
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);