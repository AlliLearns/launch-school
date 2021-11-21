# Question Set 01
- Answer each question in essay form below the given snippet. 
- Time yourself for each question and record it a line below your answer.

<br>
<hr>
<br>

``` js
// Question 01
// What will the following code output and why?
let food = 'pizza';
function switchFood(food) {
  food = 'salad';
  console.log(food)
}

switchFood();
console.log(food);
```

<br>
<hr>
<br>

``` js
// Question 02
// Describe what the function below does(not implementation);
function whereAmI (letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let spot = alphabet.indexOf(letter.toLowerCase()) + 1;
  console.log(`${letter} is found on position ${spot} of the alphabet`)
}
```

<br>
<hr>
<br>

``` js
// Question 03
// What will the following code output and why?
let arr1 = [1, [2, 3, 4], 5];
let arr2 = arr1
arr2[1][2] = 'mutated';

console.log(arr1);
console.log(arr2);
```