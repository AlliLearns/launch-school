// Perform the same transformation in the previous
// exercise but sort them in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortDescending(arr) {
  return arr.map((internalArr) => {
    switch (typeof internalArr[0]) {
      case 'string': return internalArr.slice().sort(sortStrings);
      case 'number': return internalArr.slice().sort(sortNumbers);
      default: return internalArr;
    }
  })
}

// Meant for use in Array.prototype.sort(sortStrings)
function sortStrings(a, b) {
  if (a < b) return 1;  //switch if b > a
  if (a > b) return -1; //remain if a > b 
  return 0;
}

// Meant for use in Array.prototype.sort(sortNumbers)
function sortNumbers(a, b) {
  return b - a;
}

console.log(sortDescending(arr));
console.log(arr);