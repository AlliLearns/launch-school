// Build a program that asks the user to enter the length
// and width of a room in meters, and then logs the area
// of the room to the console in both square meters and square feet.

// 1 sqm == 10.7639 sqft

const rlSync = require('../../node_modules/readline-sync');

const length = rlSync.question('Enter the length of the room in meters:\n');
const width = rlSync.question('Enter the width of the room in meters:\n');

const area = length * width;
const areaFeet = area * 10.7639;

console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
