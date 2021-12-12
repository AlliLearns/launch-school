// How Many?
// Write a function that counts the number of 
// occurrences of each element in a given array. 
// Once counted, log each element alongside the
// number of occurrences. Consider the words 
// case sensitive.

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

/*
  PROBLEM
    array of elements
    printing the number of times each element occurs
    words are case-sensitive
    assume any type of element is allowed

  ALGORITHM
    create an empty object 
    iterate through array and for every value, add a key or increment count on key
    print formatted output

    function printOutput(obj) 
      iterate through object
      print each property with `key => value`


*/

function countOccurrences(arr) {
  const obj = {};
  arr.forEach(elem => obj[elem] = obj[elem] + 1 || 1);
  printOutput(obj);
}

function printOutput(obj) {
  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}