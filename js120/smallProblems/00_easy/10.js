// Pet Shelter
// Consider the following code: 
// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// // shelter.printAdoptions();
// console.log(shelter.adoptions);
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// Write the classes and methods that will be necessary to make this code run,
// along with the following output: 
// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  describe() {
    return `a ${this.type} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }

  adoptPet(pet) {
    this.pets.push(pet);
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    owner.adoptPet(pet);
    if (!this.adoptions.hasOwnProperty(owner.name)) {
      console.log(`${owner.name} is adopting ${pet.name}`);
      this.adoptions[owner.name] = [pet]
    } else {
      this.adoptions[owner.name].push(pet);
    }
  }

  printAdoptions() {
    for (let ownerName in this.adoptions) {
      console.log(`${ownerName} has adopted the following pets:`);
      const pets = this.adoptions[ownerName];
      for (let i = 0; i < pets.length; i++) {
        console.log(`  ${pets[i].describe()}`);
      }
      console.log('');
    }
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);