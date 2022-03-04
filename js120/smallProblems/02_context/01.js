// Read the following code carefully.
// What do you think is logged on line 7? 
// Try to answer before you run the code. 

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// NaN is logged. 
// `this` is the global object if it's not provided context
// and only function calls create context. 