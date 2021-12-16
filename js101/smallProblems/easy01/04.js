// Build a program that asks the user to enter the length
// and width of a room in meters, and then logs the area
// of the room to the console in both square meters and square feet.

// 1 sqm == 10.7639 sqft

/*
  PROBLEM
    input is user input that will specify the length and width of a room in meters
    output is a string that states the area of the room in square meters and square feet
    conversion factor is 10.7639sqft

  ALGORITHM
    define constant SQFT and init to 10.7639
    get user input for length in meters and store in `length`
    get user input for width of room in meters and store in `width`

    calculate area of room with `length * width` and store in `meterArea`
    calculate area of room with `meterArea * SQFT` and store in `sqftArea`

    log `The area of the room is ${meterArea} square meters (${sqftArea} square feet).`
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