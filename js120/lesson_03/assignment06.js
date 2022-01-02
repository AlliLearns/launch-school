// Wrapping my head around constructor prototypes

// All objects   have `.__proto__`
// All functions have `.prototype`
// All functions are objects, so
// all functions have both `.__proto__` and `.prototype`

// When you call a function with the `new` keyword
// JavaScript sets the new object's prototype to
// the current value of the constructor function's
// `prototype` property. 
// (Object.getPrototypeOf(newObj) === Constructor.prototype)
// So where does the value of `Constructor.prototype` come from?
// You have to set it. 
// Constructor.prototype.methodName = a function
// Setting methods here allows us to create objects 
// of the same 'type' that don't have copies of method code.

console.log(Object.prototype);
console.log(Object.__proto__);
console.log(Object.constructor);


console.log(`\n`);
const obj = {};
console.log(obj.__proto__   === Object.prototype);
console.log(obj.constructor === Object);


console.log(`\n`);
function Dog() {}

const aDog = {}; // `new Object;` behind scenes.
console.log(aDog.__proto__   === Object.prototype);
console.log(aDog.constructor === Object);

const bDog = new Dog();
console.log(bDog.__proto__   === Dog.prototype);
console.log(bDog.constructor === Dog);

// aDog contains: 
// __proto__:   Object.prototype
// constructor: Object

// bDog contains:
// __proto__:   Dog.prototype
// constructor: Dog

// Dog contains:
// prototype: {} //Some empty object because we have not stored any methods in this...

// Object contains: 
// prototype: {hasOwnProperty() {}, ...and other methods},
// and other methods and properties...
// Since Object is the constructor form of JavaScript objects.

