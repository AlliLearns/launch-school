// Problem 1
// What will the following code output? 
function func() {
  return this;
}

let context = func();

console.log(context);

// It'll output the global object.

// ---------------------------------------------------------------------------

// Problem 02
// What will the following code output? 
// Explain the difference, if any, between 
// this and the last problem.

let obj = {
  func: function() {
    return this;
  },
};

context = obj.func();

console.log(context);

// This will also output the func function.
// We invoked the `func` function and assigned
// the return value to the variable `context`.
// The `this` that would have been evaluated
// was in the implicit context of the `obj`.

// ---------------------------------------------------------------------------

// Problem 03
// What will the following code output?
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

// It'll first output 'Hello from the global scope!'
// from the call on line 46. It'll then output
// "Hello from the function scope!" because it's being
// called in the context of the `foo` object.

// ---------------------------------------------------------------------------

// Problem 04
// What built-in methods have we learned about 
// that we can use to specify a function's 
// execution context explicitly?

// `call` and `apply` - the only difference 
// being how they take their function arguments.
// `call` takes a comma-separated list and 
// `apply` takes an array.

// ---------------------------------------------------------------------------

// Problem 05
// Take a look at the following code snippet. 
// Use `call` to invoke the `add` method but 
// with `foo` as execution context. What will
// this return?

let foo2 = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo2));

// Will return 3, adding 1 and 2.
// I'm assuming this is because an 
// explicit execution context is given
// and method calls on objects are 
// implicitly-defined execution contexts.