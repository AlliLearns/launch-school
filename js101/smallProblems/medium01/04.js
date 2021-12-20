// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. 
// A stack may be implemented as an `Array` that uses two `Array` 
// methods: `Array.prototype.push` and `Array.prototype.pop`.

// A stack-and-register programming language is a language that uses
// a stack of values. Each operation in the language operates on a 
// register, which can be thought of as the current value. The 
// register is not part of the stack. An operation that requires 
// two values pops the topmost item from the stack (ie the operation
// removes the most recently pushed value from the stack), operates
// on the populated value and the register value, and stores the 
// result back on the register. 

// This sounds complex, but the behavior is straightforward and easy
// to walk through manually. Consider a `MULT` operation in a stack-
// and-register language. It removes the value from the `stack`, 
// multiplies the removed `stack` value with the `register` value,
// then stores the result back in the `register`. For example, if we
// start with a stack of `[3, 6, 4]` (Where `4` is the topmost item
// in the stack) and a register value of `7`, the `MULT` operation
// mutates the stack to `[3, 6]` (the `4` is removed), and the result 
// of the multiplication, `28`, is left in the register. If we do 
// another `MULT` at this point, the stack is mutated to `[3]`, and 
// the register is left with the value `168`.

// Write a function that implements a miniature stack-and-register based 
// programming language that has the following commands (also called 
// operations or tokens): 

// `n`: Place a value `n` in the register. Do not modify the stack.
// `PUSH`: Push the register value on the stack. Leave the value in the register.
// `ADD`: Pop a value from teh stack and add it to the register value, storing the result in the register. 
// `SUB`: Pop a value from the stack and subtract it from the register value, storing the result in the register.
// `MULT`: Pop a value from the stack and multiply it by the register value, storing the result in the register. 
// `DIV`: Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// `REMAINDER`: Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register. 
// `POP`: Remove the topmost item from the stack and place it in the register. 
// `PRINT`: Print the register value.

// All operations are integer operations (which is only important with DIV and REMAINDER).
// Programs will be supplied to your language function via a string argument. 
// Your function may assume that all arguments are valid programs - they will not do anything
// like trying to pop a non-existent value from the stack, and they won't contain any unknown
// tokens. Initialize the stack and register to the values of `[]` and `0` respectively. 

/*
  PROBLEM
    input is a string that represents a program
    output is the result of the various tokens
    crate a stack-and-register language
    implement the given methods

  ALGORITHM
    create an object `data` and store the initial register and stack values in it
    create an object `tokens` that will map the value of each token to a given function

    function n(value) {
      reassign the current value of the register to `value`
    }

    function push() {
      push the register value onto the stack
      Leave the value in the register
    }

    function add() {
      pop a value from the stack and add it to the register value
      store the result in the register
    }

    function sub() {
      pop a value from the stack and subtract it from the register value
      store the result in the register
    }

    function mult() {
      pop a value from the stack and multiply it by the register value
      store the result in the register
    }

    function div() {
      pop a value from the stack and divide the register value by the popped stack value
      store the integer result back in the register
    }

    function remainder() {
      pop a value from the stack and divide the register value by the popped stack value 
      store the integer remainder of hte division back in the register.
    }

    function pop() {
      remove the topmost item from the stack and place it in the register
    }

    function print() {
      print the register value
    }

    function minilang(program) {
      split the input string into an array
      iterate over the array
        if the value is a number, store it in the register
        else run the command from the `tokens` object
      end iteration
    }
 */

const data = {
  register: 0,
  stack: [],
};



function minilang(program) {
  const progWords = program.split(' ');
  for (let i = 0; i < progWords.length; i++) {
    const word = progWords[i];
    if (!Number.isNaN(Number(word))) n(Number(word));
    else {
      if (tokens.hasOwnProperty(word)) {
        tokens[word]();
      }
    }
  }
}

const n = value => data.register = value;
const print = () => console.log(data.register);
const pop = () => data.register = data.stack.pop();
const push = () => data.stack.push(data.register);
const add = () => data.register += data.stack.pop();
const sub = () => data.register -= data.stack.pop();
const mult = () => data.register *= data.stack.pop();
const div = () => data.register = Math.round(data.register / data.stack.pop());
const remainder = () => data.register = Math.round(data.register % data.stack.pop());



const tokens = {
  PRINT: print,
  POP:   pop,
  PUSH:  push,
  ADD:   add,
  SUB:   sub,
  MULT:  mult,
  DIV:   div,
  REMAINDER:  remainder,
};



minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// Took forty-five minutes first time around.