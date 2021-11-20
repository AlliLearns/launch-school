// Build a program that asks the user to enter the length
// and width of a room in meters, and then logs the area
// of the room to the console in both square meters and square feet.

// 1 sqm == 10.7639 sqft

const SQFT = 10.7639;

const readLine = require(`readline-sync`);

const length = readLine.question("What's the length of the room in meters? ");
const width = readLine.question("What's the width of the room in meters? ");

const area = length * width;
const impArea = area * SQFT;

console.log(`The area of the room is ${area.toFixed(2)} square meters (${impArea.toFixed(2)} square feet).`);

/*
  

*/