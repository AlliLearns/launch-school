// Collaborator Objects
// Topic: Connecting objects so they can read from one another


// Two objects, a person and their pet:
const owner = { name: "John" }
const someonesPet = {
  name: 'Jake',
  printName() { console.log(`My pet's name is ${this.name}`) },
}

// How can we associate the pet with their owner? 
// With "collaborator objects" or "collaborators".

// Object properties can hold any value including other objects.
// So, we can associate them with: 
const owner2 = {
  name: 'Josh',
  pet: someonesPet, 
  // The `someonesPet` is the collaborator object here.
}

owner2.pet.printName();


// Collaborator objects represent connections between different classes.
// They play an important role in OO design.

// (We also use collaboration when we assign a built-in object as a property value.)

// Collaborator objects let you chop up and modularize the problem domain into cohesive
// pieces. They play an important role in modeling complicated problem domains in OOP. 