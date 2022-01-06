// Fake Cat
// Without calling the `Cat` constructor, create an object
// that looks and acts like a `Cat` instance that doesn't
// have a defined name. 

class Cat {
  constructor(name) {
    this.myName = name;
  }
  speaks() {
    return `${this.myName} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.myName);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.


// For the `fakeCat` to act like a `Cat` without
// access to the instance property `name`...
// `instanceof` looks in the [[Prototype]] chain.

// Object.create(...) will set a [[Prototype]] but it will 
// be an empty object, otherwise. 

let cat = new Cat('Jack');
console.log(Object.getOwnPropertyNames(Cat));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Cat)));
console.log(Object.getOwnPropertyNames(Cat.prototype));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Cat.prototype)));

console.log(Object.getOwnPropertyNames(cat));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(cat)));
