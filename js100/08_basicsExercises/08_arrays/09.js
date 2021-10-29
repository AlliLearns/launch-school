// The `destinations` array contains a list of travel destinations.
// Write a function that checks whether or not a particular 
// destination is included with `destinations`, without using 
// the built-in method `Array.prototype.includes()`.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'
];

function contains(destination, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === destination) {
            return true;
        }
    }

    return false;
}

// OR
function contains2(element, list) {
    return list.indexOf(element) >= 0;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false