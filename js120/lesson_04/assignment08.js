// Mixin practice problems
// If we have a `Car` class and a `Truck` class, how can you use the 
// `Speed` object as a mix-in to make them `goFast`? How can you check 
// whether your `Car` or `Truck` can now go fast?

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

const car = new Car();
const truck = new Truck();
car.goFast();
truck.goFast();

// ---------------------------------------------------------------------------

// Problem 02
// In the last question, we used a mix-in named `Speed` that contained a 
// `goFast` method. We included the mix-in in the `Car` class and then called
// the `goFast` method from an instance of the `Car` class. You may have 
// noticed that the string printed when we call `goFast` includes the name of 
// the type of vehicle we are using. How is that done?

// Had to look at the solution for this one
// We used `this.constructor.name`
// 1. Within `goFast`, `this` refers to the object that invoked the method.
// 2. The `constructor` property of an object references the class it belongs to.
// 3. Constructors have a `name` property that contains the name of the class as a string.

// ---------------------------------------------------------------------------

// Problem 03
// TODO

function hello() { return 'hello' } // The word 'hello' can be used like a value.
console.log(hello());               // `hello` is being invoked, and it's return value is printed.
console.log(hello);                 // `console.log` is being used as a higher-order function.

console.log(hello.name);

function ello() {}
console.log(ello instanceof Object);
console.log(ello instanceof Function);

// const hi = function() {};
// console.log(hi instanceof Object);
// console.log(hi instanceof Function);
// console.log(hi.name); // Was not expecting 'hi' to be the value...

const yo = () => {};
console.log(yo instanceof Object);
console.log(yo instanceof Function);


const yeller = function yell() {console.log('HI!')};
yeller();
console.log(yeller.name);

const sayHi = function(count = 0) {
  if (count) return ['hi', count];
  return sayHi(1);
}
console.log(sayHi());
