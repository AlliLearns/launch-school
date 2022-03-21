/* myBind() Improved
  Our earlier implementation of `Function.prototype.bind` as `myBind`
  was simplistic. `Function.prototype.bind` has another trick up its 
  sleeve besides hard-binding functions to context objects. It's called
  partial function application. 

  Alter the `myBind` function written in the previous exercise to 
  support partial function application.
*/

// Ex of how bind works
function printArgs(...args) {
  console.log(`Context is bound to: ${this}.`);
  args.forEach(arg => console.log(`Argument is: ${arg}.`));
}

const obj = { obj: 1 }

const boundArgs = printArgs.bind(obj, 3, 4);
boundArgs(1, 2);
console.log(``);

/*
  PROBLEM
    input is a function to be bound, the given context and any arguments
    output is a function that applies context and arguments when called
    output function will apply additional arguments behind bound arguments if invoked with more arguments.
    `myBind` will use partial function application.

  ALGORITHM
    myBind(func, thisArg, ...args)
      ...
    end myBind
*/

function myBind(func, thisArg, ...args) {
  function bound(...args2) {
    func.call(thisArg, ...args, ...args2);
  }

  return bound;
}

const boundArgs2 = myBind(printArgs, null, 3, 4);
boundArgs2(1, 2);