/*
  `Function.prototype.bind` is a method on all function
  objects that allows us to hard-bind a function to a 
  particular object. The way this works is that you pass 
  a context object to the `bind` method and it returns a 
  new function that is essentially teh same function but 
  hard-bound to the context object supplied.

  Create a function `myBind` that accepts two arguments: 
  - The function to bind.
  - The context object.

  And returns a new function that's hard-bound to the passed
  in context object.
*/

/*
  PROBLEM
    inputs are a function to bind and the context object. 
    output is a new function that's hard-bound to the passed context object. 

  ALGORITHM
    myBind(func, thisArg)
    return a function that calls `func` and binds it to `thisArg`
*/

function myBind(func, thisArg) {
  return function() {
    func.apply(thisArg, arguments);
  }
}

function hello() {
  console.log(`Hello ${this.name}.`);
}

const jack = { name: 'Jack' };
const mary = { name: 'Mary' };

const helloJack = myBind(hello, jack);
helloJack();
helloJack.call(mary);
