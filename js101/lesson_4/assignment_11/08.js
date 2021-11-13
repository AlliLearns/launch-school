// Take a look at the following array

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where 
// the names are the keys and the values are the array positions. 

// ---------------------------

let result = {};

flintstones.forEach((name, index) => {
  result[name] = index;
})

console.log(result);