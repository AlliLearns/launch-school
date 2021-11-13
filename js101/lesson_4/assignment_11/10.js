// Pick out the minimum age from our current object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// --------------------------

let agesArray = Object.values(ages);
const smallest = Math.min(...agesArray);

console.log(smallest);