// Build a program that asks the user to enter the length
// and width of a room in meters, and then logs the area
// of the room to the console in both square meters and square feet.

// 1 sqm == 10.7639 sqft

/*
  INPUT   user input
  OUTPUT  floating point numbers
  RULES   get user input. 
          assume user will enter whole integer numbers.
  DATA    primitive numbers
  ALGORITHM
    - import readline-sync and store it in `readLine` variable.
    - declare a constant `SQFT` variable and initialize it to the conversion value. 
    
    - function prompt(question)
      - return the result of a readline call with a prompt and the given `question`. 
    
    - get user input for the length of the room in meters and store it in a new variable `lengthInMeters`
    - get user input for the width of the room in meters and store it in a new variable `widthInMeters`

    - Declare `areaInMeters` and initialize it to the area of the room in meters. Restrict to two decimals.
    - Declare `areaInSqft` and initialize it to the area of the room in square feet. Restrict to two decimals.

    - print `The area of the room is ${areaInMeters} square meters (${areaInSqft} square feet).`
*/

const readLine = require('readline-sync');
const SQFT = 10.7639;

function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

const lengthInMeters = Number(prompt("Enter the length of the room in meters"));
const widthInMeters = Number(prompt("Enter the width of the room in meters"));

const areaInMeters = (lengthInMeters * widthInMeters).toFixed(2);
const areaInSqft = (areaInMeters * SQFT).toFixed(2);

console.log(`The area of the room is ${areaInMeters} square meters (${areaInSqft} square feet).`);