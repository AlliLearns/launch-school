// Messing around with execution context to get a better image

/*
  Execution context is a concept that refers to the environment 
  in which a function executes...in JavaScript, this is usually
  the value of the `this` keyword.

  Functions have execution context through the `this` keyword.


  I guess...the `this` keyword can be thought of like a variable
  whose value changes when a function is called? 

  JavaScript looks for the properties by the object that called
  the function or method...
  (`this` is usually used in the context of an object property access)

  The execution context is determined by 
  how you invoke a function or method. 
*/

// "use strict"

console.log(this);    // {} (global object?)
                      // {} in strict mode

function func() {return this}
console.log(func());  // {...} (printed the contents of what appears to be the node global object)
                      // `undefined` in strict mode (specific to regular function calls?)

const obj1 = {a: 'a', print() { console.log(this.a)}};
obj1.print();                                         // a in both modes
const print1 = obj1.print(); console.log(print1);     // a (from obj1.print()) and `undefined` (from print1)
const print2 = obj1.print;   console.log(print2);     // [Function: print]
                             console.log(print2());   // `undefined` twice... (from print2() and logging return value of internal console.log)

// Where does the body of a Function get stored when it's created? ([[Code]])
// What, exactly, gets assigned to `print2`? 
// A reference to the Function object? 

const obj2 = {a: 'a', print() { return `${this.a}` }};
console.log(obj2.print);  // [Function: print] 

