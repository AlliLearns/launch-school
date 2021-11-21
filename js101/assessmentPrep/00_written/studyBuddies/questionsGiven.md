# Question Set 01 - 19.11.2021
- Answer each question in essay form below the given snippet. 
- Time yourself for each question and record it a line below your answer.

<br>
<hr>
<br>

``` js
// Question 01
// What will the following code output and why?
const num = 10;
if (num === 10) 
  console.log('num is 10.');
  console.log('num is even.');
```
[ Your answer here ]  
[ Time taken to answer: ]

<br>
<hr>
<br>


``` js
// Question 02
// Describe what's happening in this snippet.
let x;
let y = 3;
x = 10;
y = x;
```
[ Your answer here ]  
[ Time taken to answer: ]

<br>
<hr>
<br>


``` js
// Question 03
// What will the following code output and why?
const arr1 = [3, 5];
const arr2 = [3, 5];
console.log(arr1 === arr2);
console.log(arr1 == arr2);
```
[ Your answer here ]  
[ Time taken to answer: ] 

<hr>
<br>
<br>
<br>
<hr>

# Question Set 02 - 20.11.2021
- Answer each question in essay form below the given snippet. 
- Time yourself for each question and record it a line below your answer.

<br>
<hr>
<br>

``` js
// Question 01
// What will the following code output and why?
let x;
let z = [x];
x = 10;

console.log(z);
```
[ Your answer here ]  
[ Time taken to answer: ] 

<hr>
<br>
<hr>

``` js
// Question 02
// What will the following code output and why?
const dog = {
  name: "Jack",
  age: 6,
  breed: "Terrier",
}

let cat = {
  name: "Atticus",
  age: 11,
  breed: "short-hair",
}


console.log(dog.name = cat.name);
console.log(cat.age = dog[age]);
```
[ Your answer here ]  
[ Time taken to answer: ] 

<hr>
<br>
<hr>

``` js
// Question 03
// What will the last two lines of code do and why?
const dog = {
  name: "Jack",
  age: 6,
  breed: "Terrier",
}

let cat = {
  name: "Atticus",
  age: 11,
  breed: "short-hair",
}

cat = dog;
dog = cat;
```
[ Your answer here ]  
[ Time taken to answer: ] 

<hr>
<br>
<br>
<br>
<hr>

# Question Set 03 - 21.11.2021
- Answer each question in essay form below the given snippet. 
- Time yourself for each question and record it a line below your answer.

<hr>
<br>
<hr>

``` js
// Explain what each of these variables contain in terms of memory references.
let str = "Wooo! I'm a string!";
let arr = [str, str];

// EXTRA CONTEXT
let answer = 41;
answer = 42;
console.log(answer)
// Set aside a bit of memory and store the value 41 in it. 
// Create a variable named answer that we can use to access that value. 

// What is this picture in words?
// str
// -------
// | val | 
// -------

// arr          mem
// -------      --------------
// | mem |  --> | [str, str] |
// -------      --------------


```
[ Your answer here ]  
[ Time taken to answer: ]  
[This discussion](https://launchschool.com/posts/e34dc172) is a good follow-up read. 

<hr>
<br>
<hr>

``` js
// Why does this code throw an error? 
console.log(let num = 5);

// EXTRA CONTEXT
// This problem has to do with the difference
// between 'statement' and 'expression.'

// https://launchschool.com/books/javascript/read/basics#statements

// An expression is anything that JavaScript can evaluate to a value.

// A Statement is a line of code commanding a task. 
// A statement's value cannot be captured and returned. 

// How many expressions are in the following statement? 
let num;
console.log(num = 5);
// 3: 
// 5 evaluates to `5`.
// num = 5 evaluates to `5`.
// console.log(5) evaluates to `undefined`.
// There are no statements since `console.log()`'s value can be captured. 

// So for the purposes of the assessment, we can 
// probably think in terms of the following: 
// Can the expression be substituted with a statement?
// If not, we should use the term 'expression' only 
// to describe a piece of code. 
```
[ Your answer here ]  
[ Time taken to answer: ]  
[Hint](https://launchschool.com/books/javascript/read/basics#statements) - Let it load all the way and it'll take you to the right section. 

<hr>
<br>
<hr>

``` js
// What will this code output?
// What's going on inside this array and why is it allowed?

const arr = [1, 2, 3];
arr.length = 5;
arr.name = 'Number array';
console.log(arr);
```
[ Your answer here ]  
[ Time taken to answer: ] 