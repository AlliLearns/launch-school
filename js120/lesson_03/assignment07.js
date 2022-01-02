// Problem 01
// What does the following code output to the console?
// Can you explain why? 
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle1(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle1(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

// NaN 
// NaN
// It's printing NaN because we're trying to add and multiply
// `undefined` values. 

// ---------------------------------------------------------------------------

// Problem 02
// How would you fix the problem in the code from problem 1?
// I had to look it up. 
RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle2(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

rect1 = new Rectangle2(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

// ---------------------------------------------------------------------------

// Problem 03
// Write a constructor function called `Circle` that takes a radius as
// an argument. You should be able to call an `area` method on any objects
// created by the constructor to get the circle's area. Test your 
// implementation with the following code: 

// Had to look at the answer.
const Circle = function(radius) {
  this.radius = radius;
}; 

// Circle had to be a function expression
// for adding a property to its prototype 
// to work.

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

// ---------------------------------------------------------------------------

// Problem 04
// What will the following code output and why?
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

// It'll return `true` and lot it to the console.


// ---------------------------------------------------------------------------

// Problem 05
// What will the following code output and why? 
function Ninja1() {
  this.swung = true;
}

let ninja1 = new Ninja1();

Ninja1.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// console.log(ninja1.swingSword());

// It won't work because we're overwriting the prototype.
// It'll throw a TypeError since it won't be able to 
// find `swingSword` on `ninja`.

// ---------------------------------------------------------------------------

// Problem 06
// Implement the method described in the comments below

function Ninja2() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja2.prototype.swing = function() {
  this.swung = this.swung ? false: true;
  return this;
}

let ninjaA = new Ninja2();
let ninjaB = new Ninja2();

console.log(`\n`);
console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

// ---------------------------------------------------------------------------

// Problem 07
// In this problem, we'll ask you to create a new instance of an 
// object without having direct access to teh constructor
// function: 

let ninjaC;

{
  const Ninja3 = function() {
    this.swung = false;
  };

  ninjaC = new Ninja3();
}

// create a `ninjaB` object here; don't change anything else
// let ninjaD = Object.assign(ninjaC);
// Their answer
let ninjaD = new ninjaA.constructor();

console.log(`\n`);
console.log(ninjaC.constructor === ninjaD.constructor); // => true

// ---------------------------------------------------------------------------

// Problem 08
// Since a constructor is just a function, you can call it without the `new` 
// operator. However, that can lead to unexpected results and errors, 
// especially for inexperienced programmers. Write a constructor function 
// that you can use without the `new` operator. The function should return 
// the same result with either form. Use the code below to check your 
// solution:

// My solution was not in the spirit of the exercise
// function User(first, last) {
//   return { name: `${first} ${last}` }
// }

// Their solution
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

