// Before CSS we used spaces to align 
// things on the screen. If we have a 
// 40-character wide table of 
// Flintstone family members
// how can we center the following
// title above the table with spaces? 

let title = "Flintstone family members";

// ---------------------------------

let padding = Math.floor((title.length / 2) + 20);
const centeredTitle = title.padStart(padding, ' ');

console.log(centeredTitle);
console.log(''.padStart(40, '-'));

