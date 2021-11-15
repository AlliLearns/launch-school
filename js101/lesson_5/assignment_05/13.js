// Given the following data structure, 
// sort the array so that the sub-arrays 
// are ordered based on teh sum of the odd 
// numbers that they contain. 

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/*
  INPUT   array of numeric arrays
  OUTPUT  array of numeric arrays
  RULES   sort in ascending order of the sum of their odd values
          mutate original array
          input array will only hold arrays of numbers
  DATA    arrays
  ALGORITHMS
    function oddSumSort(arr)
      - iterate over outer array elements
        - sum current element's odd values
        - sum next element's odd values
        - order in ascending based on sum
*/

oddSumSort(arr);
console.log(arr);


function oddSumSort(arr) {
  arr.sort((a, b) => {
    const sumA = sumOddValues(a);
    const sumB = sumOddValues(b);

    return sumA - sumB;
  })

  return arr;
}


function sumOddValues(arr) {
  return arr.filter(num => num % 2 === 1)
            .reduce((prev, curr) => prev + curr);
}