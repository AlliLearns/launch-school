// Write a `for` loop that loops over the elements 
// of the array `cities` and logs the length of 
// each string to the console. 
// If the element is `null`, skip forwrd. 

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === null) {continue}
    console.log(cities[i].length);
}