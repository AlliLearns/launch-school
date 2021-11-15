// How would you order the following array of numeric 
// strings by descending numeric value?

let arr = ['10', '11', '9', '7', '8'];

// -----------------------------

/*
  INPUT:  array of numeric strings
  OUTPUT: new array of numeric strings
  RULES:  order the strings in descending numeric value
          don't mutate the original array
  DATA STRUCTURE(S): Arrays
  ALGORITHM
    func descendingOrder(arr)
      - Create a new array `result` and copy `arr` into it.
      - start an iteration over `result` up to but not including `result.length - 1`
        - compare the numerical equivalent of the current and next values
        - leave the values the same if a > b
        - swap the values if a < b
      - return `result`
*/ 

function descendingOrder(arr) {
  const result = arr.slice();

  // Their solution
  result.sort((a, b) => b - a);

  return result;
}

console.log(descendingOrder(arr));



// result.sort((a, b) => {
//   a = Number(a);
//   b = Number(b);

//   if (a > b) return -1;
//   if (a < b) return 1;
//   return 0;
// });

// Their solution relied on implicit 
// coercion of the subtraction 
// operator to make them numbers.
// However, it's best not to do this.
// I'm leaving it for now anyway.