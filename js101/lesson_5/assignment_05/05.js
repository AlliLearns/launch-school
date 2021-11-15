// Consider the following nested object.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age 
// of the male members of the family.

/*
  INPUT   object
  OUTPUT  number
  RULES   assume the presence of 'age' and 'gender'
          sum the ages of the male members of the family
          assume a structure of nested objects
          not modifying the given object, only accessing data
  DATA    objects, arrays
  ALGORITHMS
    function sumAges(obj) 
      - create a variable `totalAge` and init to `0`
      - grab object values and store in array `values`
      - iterate over the object to attain internal objects.
        - if internal object's gender is male, add age to `totalAge`
      return `totalAge`
*/

function sumAges(obj) {
  let totalAge = 0;

  const values = Object.values(obj);
  values.forEach(person => {
    if (person.gender === 'male') {
      totalAge += person.age;
    }
  });

  return totalAge;
}

console.log(sumAges(munsters));

// Their solution
let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}