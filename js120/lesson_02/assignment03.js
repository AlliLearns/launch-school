// Object Prototypes
// Topic: Introducing the concept of a prototype.

// I think they needed to introduce other things before they got into
// this topic...what would have made more sense to me?

// The concept of a hidden / internal property
// JavaScript's view of an object
// JavaScript's view of a function as an object
// Object and Function and what they look like. 

/* The concept of a hidden / internal property
  JavaScript programs are executed in the environment of a JavaScript engine.
  ECMAScript is a standard that provides the creation guide for JavaScript engines. 
  To be compliant with the spec, JS engine developers ...
  'The actual implementation an engine uses may be very different from what the internal methods sketch out'
  'but to be compliant they have to produce behavior or results that are consistent with the internal methods'
  There are many design details whose implementation ECMAScript leaves up to the developers of JS engines.
  One of those are how "internal slots" and "internal methods" are defined, accessed and handled. 
  These are denoted in the standard by a double-bracket notation eg. [[StringData]]
  One that we will reference in this section is called [[Prototype]]
  The [[Prototype]] internal slot is a conceptual home for the value of an object's prototype. 
  
*/ 





// The topics on this page...
// What is a prototype?
// The Default Prototype
// Iterating over Objects with Prototypes
// The Prototype Chain
// The `__proto__` Property
// Property Look-Up in the Prototype Chain
// Methods on Object.prototype
// Objects Without Properties

// An object factory serves two purposes: 
// 1. Returns an object that represents data of a specific type
// 2. Reuses code.
// Downsides to object factories: 
// (Not their direction of presentation)
// They chose: Prototypes as an alternate method to accomplish the above.

// What is a prototype?
// In JavaScript, objects can inherit properties and behavior from other objects.
// (They introduced the idea of the concept with collaboration...but they don't mention that here)
// This is called "prototypal inheritance".
// The parent object that your child object inherits from is called the child's "prototype"
// They introduce `Object.create` as the first way to do this...
// The child object does not receive copies of the paren't object's properties with inheritance.
// Instead, the child object "delegates" property access to its parent (the prototype).

// A child object's prototype value is stored in the internal [[Prototype]] property.
// [[Prototype]] is a notation used by ECMAScript to denote internal properties on objects.
// Internal properties may or may not be given an interface when a JavaScript engine is implemented.
// In most cases, [[Prototype]] is exposed to the programmer, and can be accessed in one of two ways:
// `childObj.__proto__` which is depreciated, but useful in learning.
// `Object.getPrototypeOf(childObj)` which should be used in production. 
// They return the same value, a reference to the parent object.
// You can also set the value with `Object.setPrototypeOf(childObj, parentObj);`

// The Default Prototype
// All JavaScript objects inherit from a prototype. 
// If no prototype is explicitly set, a new object literal will receive the Default Prototype.
// The Default Prototype is the prototype of the `Object` constructor (not explained yet).

// Iterating over Objects with Prototypes
// Ignoring for now.

// The Prototype Chain
// Every JavaScript object has a prototype.
// The Top-level prototype is the Default Prototype.
// All newly-created object literals have the Default Prototype as their prototype. 
// However, you can make a chain of prototype inheritance.
// This is done by setting the prototype of each object literal to a parent...needs better wording.
// Also needs an example.

// The `__proto__` Property
// Ignoring for now.


