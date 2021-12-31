// Problem 01
// What method can we use to bind a function permanently to 
// a particular execution context? 

// `func.bind(contextObj)` method

// ---------------------------------------------------------------------------

// Problem 02
// What will the following code log to the console?
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

// Nothing, we haven't called `foo` or
// captured the returned function from
// `bind`.

// ---------------------------------------------------------------------------

// Problem 03
// What will the following code output?
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());

// `foo` will log NaN
// `bar` will log 5.

// ---------------------------------------------------------------------------

// Problem 04
//What will the code below log to the console?
let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

// It'll log 'JavaScript makes sense!'
// `bar` is bound to `positivity`, so 
// the explicit context is followed
// and the implicit context is ignored.

// ---------------------------------------------------------------------------

// Problem 05
// What will the code below output?
let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

// It'll print 'Amazebulous!'
// The bind is permanent, so even though
// we tried giving `bar` another execution
// context through `call`, it is ignored.