// Given the following data structure write 
// some code to return an array containing 
// the colors of the fruits and the sizes of 
// the vegetables. The sizes should be uppercase
// and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*
  INPUT   object of objects
  OUTPUT  array of arrays or string values
  RULES   don't mutate `obj`
  DATA    objects and arrays
  ALGORITHMS
    function filterData(obj) 
      - Grab `values` from `obj`
*/

console.log(filterData(obj));


function filterData(obj) {
  const values = Object.values(obj);

  return values.map(food => {
    switch (food.type) {
      case "fruit":     return food.colors.map(capitalizeStrings);
      case "vegetable": return food.size.toUpperCase();
      default: return [];
    }
  })
}

function capitalizeStrings(str) {
  return str[0].toUpperCase() + str.slice(1);
}