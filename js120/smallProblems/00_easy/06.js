// Refactoring Vehicles

// Consider the following classes: 

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 2;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// Refactor these classes so they use a common superclass and inherit behavior as needed. 

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() { return `${this.make} ${this.model}` }
}

class Car extends Vehicle {
  getWheels() { return 4 }
}

class Motorcycle extends Vehicle {
  getWheels() { return 2 }
}

class Truck {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() { return 6 }
}