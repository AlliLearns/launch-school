// Consider the following object: 
let flintstones = { 
  Fred: 0,
  Wilma: 1, 
  Barney: 2, 
  Betty: 3, 
  Bambam: 4,
  Pebbles: 5,
 };

// Create an array from this 
// object that contains only 
// two elements: 
// Barney's name and number

let barney = [];

Object.entries(flintstones).forEach( element => {
  const [key, _] = element;
  if (key === "Barney") {
    barney = element;
  }
})

console.log(barney);

// Their solution
const barney2 = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
console.log(barney2);

