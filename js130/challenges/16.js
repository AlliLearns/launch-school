
Math.seedrandom = require('seedrandom');
const SAME_INITIAL_ROBOT_NAME_SEED = 1000;
/*
  PROBLEM
    Write a program that manages robot factory settings.
    Robots off the floor are powered off and have no name. 
    The first time you boot them up, a random name is generated.
    If a robot gets reset to factory settings, the name gets wiped. 
    The next time you ask, it will respond with a new name.
    The names of robots must be unique. 
    Assume that names take the form of a 5-character string whose:
      - first two values are in the set [A-Z]
      - last three values are in the set [0-9]

  STRUCTURES
    Robot class {
      name    will contain a random name for the robot. 
      name()  will return the robot's name or generate a new one if it has none. 
      reset() will clear the robot's name. 
      static names[] will contain an array of existing robot names. 

      createName() will return a new random name for the robot that does not conflict with existing names and add it to the static `names` array
    }

  ALGORITHM
    constructor() { create a new instance of the robot and initialize its name }

    name() {
      if this instance has a value for `name`, return it
      else, generate a new name for the robot, assign it to `name` on the instance, and return it. 
    }

    reset() {
      remove the name from the static `names` array. 
      reassign the `name` property on the instance to `null` 
    }

    createName() {
      create `nameArr` and init to an empty array
      iterate 2 times 
        generate random character in the set [A-Z]
        push that character onto `nameArr`
      end iteration

      iterate 3 times 
        generate random character in the set [0-9]
        push that character onto `nameArr`
      end iteration

      create `robotName` and init to joined `nameArr`

      if `robotName` is not in static `names` array, push it onto `names` array
      else, generate new name

      return `robotName`
    }
*/

class Robot {
  static names = [];

  constructor() { this.name() }

  name() {
    if (this.robotName) return this.robotName;
    this.robotName = this.createName();
  }

  reset() {
    const idx = Robot.names.indexOf(this.name);
    Robot.names.splice(idx, 1);
    this.robotName = null;
  }

  createName() {
    const ALPHABET_DIGITS = 26;
    const DIGITS = 10;
    const startChar = 'A'.charCodeAt(0);
    const startDigit = '0'.charCodeAt(0);
    let robotName = '';
    
    do {
      const nameArr = [];
      for (let i = 0; i < 2; i++) {
        const code = Math.floor(Math.random() * ALPHABET_DIGITS) + startChar;
        const char = String.fromCharCode(code);
        nameArr.push(char);
      }

      for (let i = 0; i < 3; i++) {
        const code = Math.floor(Math.random() * DIGITS) + startDigit;
        const char = String.fromCharCode(code);
        nameArr.push(char);
      }

      robotName = nameArr.join('');
      debugger;
    } while(Robot.names.includes(robotName));
    
    if (!Robot.names.includes(robotName)) Robot.names.push(robotName);

    return robotName;
  }
}

Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
let robot1 = new Robot();
Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
let robot2 = new Robot();

module.exports = Robot;

