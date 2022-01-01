// Creating Objects
// Topic: Object Literals

// 
const person1 = {
  name: 'John',
  age:  33,
  greet: function() { console.log("Hello from person1") }, 
  // Method assigned to `greet` property
}
person1.greet();

const person2 = {
  name: 'John',
  age:  33,
  greet() { console.log("Hello from person2") }, 
  // Compact method syntax
}

person2.greet();

const person3 = {
  name: 'John',
  age:  33,
  greet() { console.log(`Hello from ${person3.name}`) }, 
  // Access `name` property from object's variable name
}

person3.greet();

const person4 = {
  name: 'John',
  age:  33,
  greet() { console.log(`Hello from ${this.name}`) }, 
  // Access `name` property from implicit execution context.
}

person4.greet();