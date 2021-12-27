// Bubble Sort
// Bubble sort is one of the simplest sorting algorithms available.
// It is not an efficient algorithm, so developers rarely use it in
// real code. However, it is an excellent exercise for student 
// developers. In this exercise, you will write a function that 
// sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes through an array.
// On each pass, the two values of each pair of consecutive 
// elements are compared. If the first value is greater than the 
// second, the two elements are swapped. This process is repeated 
// until a complete pass is made without performing any swaps. 
// At that point, the array is completely sorted. 

// Write a function that takes an array as an argument and sorts that
// array using the bubble sort algorithm described above. The sorting
// should be done 'in-place', the function should mutate the array.
// You may assume that the array contains at least two elements. 

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*
  PROBLEM
    input is an array
    output is the sorted array 
    function mutates the input and returns it

  ALGORITHM
    create variable `madeSwap` and set to `false`
    start indefinite iteration
    set `madeSwap` to `false`
      iterate over input array
        if the current value is larger than the next value, swap elements and set `madeSwap` to `true`
      end inner iteration
      if `madeSwap` is set to `false`, break outer iteration
    end iteration
    return input array
*/

function bubbleSort(arr) {
  let madeSwap = false;
  do {
    madeSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeSwap = true; 
      }
    }
  } while (madeSwap)

  return arr;
}

// First solution done in six minutes