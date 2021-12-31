// Problem 1
// What will the following code log to the console? Explain.
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

// 2 - yep
// It logs 2 because access to `baz.foo` and `qux.foo` 
// are both accessing `qux.foo`, which is `1`.

// ---------------------------------------------------------------------------

// Problem 2
// What will the following code log to the console? Explain.
qux = { foo: 1 };
baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

// 3 - yep
// It logs 3 because the assignment `baz.foo = 2` on `line 13`
// creates a new property `foo` on `baz`. When looking up the 
// prototype chain for a property called `foo`, it finds 
// the `foo` on `baz` rather than the `foo` on `qux`. 

// ---------------------------------------------------------------------------

// Problem 3
// What will the following code log to the console? Explain.
qux = { foo: 1 };
baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

// 4 - yep
// It logs 4 because we are reassigning the value of 
// `qux.foo` to `2` instead of `1`. When we try to 
// access `baz.foo`, it accesses the value of `qux.foo`,
// which is `2` - so it adds 2 twice and gets `4`.

// ---------------------------------------------------------------------------

// Problem 4
// Write a function that searches the prototype chain of an object 
// for a given property and assigns it a new value. If the property
// does not exist in any of the prototype object,s the function should 
// do nothing. 

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

/*
  PROBLEM
    input is the object to start searching from, 
    the name of the property to find 
    and the value that should be assigned to it
    output is nothing
    result of the function call should reassign
    the value of the given property if it exists
    and should do nothing otherwise.

  ALGORITHM
    create variable currentProto and init to prototype of input object
    iterate indefinitely
    if currentProto is Object.prototype, return
    if (currentProto has property `inputProperty`)
      reassign to value and return
    grab prototype of currentProto and reassign currentProto
    end iteration
*/

function assignProperty(childObj, property, value) {
  let currentProto = Object.getPrototypeOf(childObj);
  while (true) {
    if (currentProto === Object.prototype || currentProto === null) return;
    if (currentProto.hasOwnProperty(property)) {
      currentProto[property] = value;
      return;
    }
    currentProto = Object.getPrototypeOf(currentProto);
  }
}

// ---------------------------------------------------------------------------

// Problem 5
// Consider the following two loops:

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });

// If `foo` is an arbitrary object, will these loops always log 
// the same results to the console? Explain. If they don't always
// log the same information, show an example of when the results
// differ. 

// Had to look at the answer.
// They don't always produce the same results since the second 
// loop only iterates over `foo`'s 'own' properties, but the 
// first loop iterates over all of the object's enumerable 
// properties, including those inside its prototype chain. 

// ---------------------------------------------------------------------------

// Problem 6
// How do you create an object that doesn't have a prototype? 
// How can you determine whether an object has a prototype?

// Had to look at the answer.
// You can create an object that doesn't have a prototype with `Object.create(null)`
// You can test whether an object as a prototype with `Object.getPrototypeOf(obj)`