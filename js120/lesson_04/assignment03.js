// Problem 1
// Use a factory function to create pet objects.
// The factory should let us create and use pets like this: 
let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

function createPet(animal, name) {
  const newPet = {
    animal, 
    name, 
    sleep() { console.log(`I am sleeping`) },
    wake() { console.log(`I am awake`) },
  };

  return newPet;
}

// ---------------------------------------------------------------------------

// Problem 02
// Use the OLOO pattern to create an object prototype that we 
// can use to crete pet objects. 

const PetPrototype = {
  sleep: function() { console.log(`I am sleeping`) },
  wake:  function() { console.log(`I am awake`) },
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
};

// The prototype should let us create and use pets like this: 

let pudding2 = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding2.animal}. My name is ${pudding2.name}.`);
pudding2.sleep(); // I am sleeping
pudding2.wake();  // I am awake

neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// ---------------------------------------------------------------------------

// Problem 03
// Consider the objects created by the programs in problems 1 and 2.
// How do objects for the same animal differ from each other?

// pet instance:
// __proto__: createPet
// constructor: Object

// createPet: 
// __proto__:   Object.prototype
// constructor: Object

// pet instance:
// __proto__: 
// constructor: 