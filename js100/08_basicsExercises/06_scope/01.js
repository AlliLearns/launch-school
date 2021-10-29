// What will the following log and why?

console.log(greeting);
var greeting = 'Hello world!';

// It'll log 'undefined'.
// The variable is hoisted when decalred with `var`.
// Hoisted means that the variable can be declared after its use.
// JavaScript internally declares the variable at the top of the file with no initilization.
// So it logs 'undefined,' because that's the value of declared but not defined variables. 
// Variables declared with `let` and `const` are not hoisted.