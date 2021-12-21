# Template for Chart
### This chart is meant to do a couple of things: 
- Primarily, it's used to build an understanding of the return values of nested callback structures.
- It's used to build an understanding of the evaluation of each step of a code snippet.

### Copy this thing from the markdown file to start your own chart
| Stack Depth | Iteration |  Caller | Body | Returns | 
| - | - | - | - | - |
| 0 | - | - |  |  | 
|  | - |  |  |  | 
| __Stack Depth__ | __Iteration__ |  __Caller__ | __Body__ | __Returns__ | 
| 1 | 1 |  |  |  | 
|  |  |  |  |  | 

### Header Explanations
- **Stack Depth** keeps track of how deeply we are in nested array functions like `map` and `filter`.
- **Iteration** keeps track of which iteration we're on while evaluating their callbacks.
- **Caller** is somewhere to keep track of whose function body is being run.
- **Body** is the body of the callback function.
- **Returns** is the return value of the callback function.

### What's with the two header rows? 
The table is broken into two parts: 
- The top part is an overall look at the structure of the code snippet.
- The bottom part is a detailed look at what's going on at every step of the code snippet. 

<hr>
<br>
<br>
<br>
<hr>


# Examples
## Let me know if looking at these examples isn't enough to explain what's going on and I'll elaborate. 
``` js
/* Example 0.a */
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

// Looks like this when broken out:
const topArr = [[1, 2], [3, 4]];
const result = topArr.map(callback01);

function callback01(arr) {
  return console.log(arr[0]);
} // implicit arrow function return made explicit.

// Result
// log `1` to console
// log `3` to console
// Returns [undefined, undefined]
```

| Stack Depth | Iteration |  Caller | Body | Returns | 
| - | - | - | - | - |
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `console.log(arr[0])` | `undefined` from `console.log` eval. | 
| __Stack Depth__ | __Iteration__ |  __Caller__ | __Body__ | __Returns__ | 
| 1 | 1 | `callback01(topArr[0])` | `console.log(topArr[0][0])` | `undefined` from `console.log` eval. | 
| 1 | 2 | `callback01(topArr[1])` | `console.log(topArr[1][0])` | `undefined` from `console.log` eval. | 

<hr>
<br>
<br>
<br>
<hr>

``` js
/* Example 0.a - with a larger top-level array */
[[1, 2], [3, 4], [5, 6], [7, 8]].map(arr => console.log(arr[0]));

// Becomes
const topArr = [[1, 2], [3, 4], [5, 6], [7, 8]];
const result = topArr.map(callback01);

function callback01(arr) {
  return console.log(arr[0]);
} // implicit arrow function return made explicit.

// Result
// log `1` to console
// log `3` to console
// log `5` to console
// log `7` to console
// Returns [undefined, undefined, undefined, undefined]
```
| Stack Depth | Iteration |  Caller | Body | Returns | 
| - | - | - | - | - |
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `console.log(arr[0])` | `undefined` from `console.log` eval. | 
| __Stack Depth__ | __Iteration__ |  __Caller__ | __Body__ | __Returns__ | 
| 1 | 1 | `callback01(topArr[0])` | `console.log(topArr[0][0])` | `undefined` from `console.log` eval. | 
| 1 | 2 | `callback01(topArr[1])` | `console.log(topArr[1][0])` | `undefined` from `console.log` eval. | 
| 1 | 3 | `callback01(topArr[2])` | `console.log(topArr[2][0])` | `undefined` from `console.log` eval. | 
| 1 | 4 | `callback01(topArr[3])` | `console.log(topArr[3][0])` | `undefined` from `console.log` eval. | 
 
- We get a return value of `[undefined, undefined, undefined, undefined]`.
- We print `1`, `3`, `5` and `7` on their own lines. 


<hr>
<br>
<br>
<br>
<hr>