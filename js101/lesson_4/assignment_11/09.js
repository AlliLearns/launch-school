// Add up all of the ages from the munsters family object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// ---------------------------

let agesArray = Object.values(ages);
const totalAge = agesArray.reduce((prev, currentAge) => prev + currentAge);

console.log(totalAge);


// forEach and summing to an initial value would have worked fine too.
