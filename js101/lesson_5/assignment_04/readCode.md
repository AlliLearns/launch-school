# Reading Iterative and Callback Code
Reading nested functions can get messy, and it's easy to get lost in your head.  
We will provide an informal method that can help you analyze the code when this happens.  

## Understanding Program Execution with Words
``` js
/* Example 0.a */
/* Print the first values of a single-level nested array. */ 
/*  
  This solution is a misuse of map. 
  You shouldn't use map unless you intend to use its return values.
  But it's useful to look at something like this and know that there could be a better solution.
  However, you can't improve it if you can't read it. 
  (Bonus: Can you come up with a better solution and explain what it's doing?)
*/
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

// Outputs:
// 1
// 3
// Returns: [undefined, undefined]

/*
  How do we know what will happen without running the code?
  How do we know what `console.log()` will output?
  How do we know what `map` will return? 
  What pieces of data do we need in our head to read this thing? 
*/
```

### Let's outline what this program does <br> (Don't worry about reading/remembering any of this) <br> (It's an example meant to show how complicated even simple lines of code can be under the hood.) <br> (Especially when you're dealing with a language that allows functions to be first-class values.)
- Program starts.
- Program finds `topArr.map(callback(arr => console.log(arr[0])))`.
- Program captures `map` and starts its run on `topArr`.
  - `map` starts first iteration of `callback`.
  - `map` assigns `arr` to `topArr[0]`.
    - `callback` runs first statement: `console.log(arr[0])`
      - `console.log(arr[0])` evaluates `arr[0]`.
        - `arr[0]` evaluates to `topArr[0][0]` evaluates to `1`.
      - `console.log(arr[0])` prints `1` to output. ***
      - `console.log(arr[0])` returns `undefined`. 
    - `callback` looks for another statement and finds none.
    - `callback` sees that the given arrow function is not enclosed in brackets, and uses implicit return.
    - `callback` returns the `undefined` that `console.log(...)` evaluated to.
  - `map` captures `callback`'s return and stores `undefined` in `returnArr`. ***
  - `map` starts the next iteration of `callback`. 
  - `map` assigns `arr` to `topArr[1]`.
    - `callback` runs first statement: `console.log(arr[0])`
      - `console.log(arr[0])` evaluates `arr[0]`.
        - `arr[0]` evaluates to `topArr[1][0]` evaluates to `3`.
      - `console.log(arr[0])` prints `3` to output. ***
      - `console.log(arr[0])` returns `undefined`. 
    - `callback` looks for another statement and finds none.
    - `callback` sees that the given arrow function is not enclosed in brackets, and uses implicit return.
    - `callback` returns the `undefined` that `console.log(...)` evaluated to.
  - `map` captures `callback`'s return and stores `undefined` in `returnArr`. ***
  - `map` encounters the end of `topArr`.
  - `map` returns `returnArr`, which contains `[undefined, undefined]`.
- Program sees the return value of `map` but it's not captured and it's discarded.
- Program ends.

Clearly, we can see there's a lot going on. Around 30 steps in this _one line_ of code and nested 5 layers deep. How do you keep 5 layers of action in your head at once? Practice. Most programmers don't break down what's going on to this level of detail and try to keep it in their heads. Experience helps you zone in on the important bits. In this process, those are the four lines identified by `***`. Four pieces of information are a lot easier to remember than 30!

Experience is great, but experienced programmers had to go through _some_ sort of process to move this level of evaluation into a more unconscious part of their mind. So what did they do when they were learning? It depends on the person, of course, but this section is about providing a suggestion of what you can do. 

<br>


### Let's go through this again with something more complicated
``` js
/* Example 0.b */ 
/* Print the values larger than 5 in this nested array. */
/* Return the nested structure of those values larger than 5 in a new array `myArr` */ 
/* 
  This solution is incorrect (and problematic - it's doing two things).
  You can encounter this situation in the wild. 
  Maybe you're viewing open-source code with a complicated test environment you don't want to take days to set up.
  However, you can't catch the bug if you can't read it. 
  (Bonus: Can you fix it and explain why the fix works? Ignoring the bad taste of a two-requirement problem.)
*/ 
const topArr = [[18, 3], [7, 12]];
const myArr = topArr.forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```


- Program starts.
- Program finds `topArr.forEach(callback1(arr => arr.map(callback2(num => return console.log(num)))))`.
- Program captures `forEach` and starts to run it on `topArr`.
  - `forEach` starts first iteration of `callback1`.
  - `forEach` assigns `arr` to `topArr[0]`.
    - `callback1` runs first statement: `return arr.map(...)`
    - `callback1` notes the return and calls `map` on `arr`.
    - `callback1` captures `map` and starts to run it on `arr`.
      - `map` starts first iteration of `callback2`.
      - `map` assigns `num` to `arr[0]`.
        - `callback2` runs first statement: `if (num > 5) return console.log(num)`
        - `callback2` notes the return and calls `if (num > 5)`
          - `if (num > 5)` evaluates `num > 5`
            - `num > 5` evaluates `num` to `arr[0]` evaluates to `topArr[0][0]` evaluates to `18`.
            - `num > 5` evaluates to `18 > 5` evaluates to `true`.
          - `if (num > 5)` evaluates to `true` and `if` looks at content `return console.log(num)`.
            - program notes the return and calls `console.log(num)`.
              - `console.log(num)` evaluates `num` to `arr[0]` evaluates to `topArr[0][0]` evaluates to `18`.
              - `console.log(num)` prints `18`.
              - `console.log(num)` returns `undefined`.
            - Program notes `return` and returns the evaluation of `console.log(....)` which is `undefined`
          - `callback2` returns `undefined` and ends execution.
        - `map` notes return value of `undefined` and stores it in `returnArr`.
        - ...
        - ...
  - `forEach` returns `undefined` by definition.
- Program finds `undefined` returned by `forEach` and assigns it to `myArr`.
- Program ends.

I didn't bother puzzling it all out. As you can see at the end, the return value of `map` isn't even used by `forEach`. If you fix it by changing `forEach` to `map` and return `num` after the innermost print, then you'll care about tracking both `map`'s returns. Either way, this program will result in at least 100 operations, and it gets to 8 levels deep. This thing is a monster, and it's only 8 lines of code. 

<br>

## Visualizing Program Execution with Expansion and Tables
### 1 - Break the program out into its component functions.
``` js
/* Example 0.a */
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

// Becomes

const topArr = [[1, 2], [3, 4]];
const result = topArr.map(callback01);

function callback01(arr) {
  return console.log(arr[0]);
} // implicit arrow function return made explicit.
```

### 2 - Fill the below table with content from those functions.
| Stack Depth | Iteration |  Caller | Body | Returns | 
| - | - | - | - | - |
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `console.log(arr[0])` | `undefined` from `console.log` eval | 

- We only increase the 'depth' of our program by each callback function call.
- For simple programs, we might be able to see what our program will do with just this.
  - We know that `map` will call `callback01` `topArr.length` times.
  - We can see that `callback01` will only ever be able to return `undefined`.
  - So, we can conclude that the `map` function will return an array of `topArr.length` filled with `undefined`.
- But, for more complicated problems, we may need to fill out the 'iterations' rows. 

### 3 - Run through the program's iterations.
Let's use this format to go through the program's iterations. The first two rows are copied from above.  
- Go top-down to fill in the 'returns' column. 
- Because we have two rows that return `undefined`, we can see pretty clearly that `map` is gonna be `[undefined, undefined]`.
- We can also see what each evaluation of `callback01` will do. Specifically, print `1` and `3`.

| Stack Depth | Iteration |  Caller | Body | Returns | 
| - | - | - | - | - |
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `console.log(arr[0])` | `undefined` from `console.log` eval. | 
| __Stack Depth__ | __Iteration__ |  __Caller__ | __Body__ | __Returns__ | 
| 1 | 1 | `callback01(topArr[0])` | `console.log(topArr[0][0])` | `undefined` from `console.log` eval. | 
| 1 | 2 | `callback01(topArr[1])` | `console.log(topArr[1][0])` | `undefined` from `console.log` eval. | 


<br>

Let's see what our iteration table will look like if we call this on a different `topArray`.
``` js
/* Example 0.a */
[[1, 2], [3, 4], [5, 6], [7, 8]].map(arr => console.log(arr[0]));

// Becomes

const topArr = [[1, 2], [3, 4], [5, 6], [7, 8]];
const result = topArr.map(callback01);

function callback01(arr) {
  return console.log(arr[0]);
} // implicit arrow function return made explicit.
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

<br>

### Revisiting Example 0.b with Tables
``` js
/* Example 0.b */
const myArr = [[18, 3], [7, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// Becomes

const topArr = [[18, 3], [7, 12]];
const myArr = topArr.forEach(callback01);

function callback01(arr) {
 return arr.map(callback02);
}

function callback02(num) {
  if (num > 5) {
    return console.log(num);
  }
}
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - |  - | - | - | 
| 0 | - | - | `topArr.forEach(callback01)` | `undefined` by definition. |  
| 1 | - | `callback01(arr)` | `arr.map(callback02)` | array of `callback02`'s returns |  
| 2 | - | `callback02(num)` | `if(num > 5) return console.log(num)` | `undefined` from `console.log()` eval. <br> `undefined` from no explicit return. | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `arr.map(callback02)` | array of `callback02`'s returns |  
| 2 | 1 | `callback02(topArr[0][0])` | `if(18 > 5) return console.log(18)` | `undefined` from `console.log()` eval. |  
| 2 | 2 | `callback02(topArr[0][1])` | `if(3 > 5) return console.log(3)` | `undefined` from no explicit return. |  
| 1 | 2 | `callback01(topArr[1])` | `arr.map(callback02)` | array of `callback02`'s returns |  
| 2 | 1 | `callback02(topArr[1][0])` | `if(7 > 5) return console.log(7)` | `undefined` from `console.log()` eval. |  
| 2 | 2 | `callback02(topArr[1][1])` | `if(12 > 5) return console.log(12)` | `undefined` from `console.log()` eval. | 

- You can see that the inclusion of an `if` statement means that we can possibly have more than one return value here.

<br>

Let's check the logic on our fixed program: 
``` js
const myArr = [[18, 3], [7, 12]].map(arr => {
  return arr.map(num => {
    if (num > 5) {
      console.log(num);
      return num;
    }
  });
});

 // Becomes 

const topArr = [[18, 3], [7, 12]];
const myArr = topArr.map(callback01);

function callback01(arr) {
 return arr.map(callback02);
}

function callback02(num) {
  if (num > 5) {
    console.log(num);
    return num;
  }
}
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns |  
| 1 | - | `callback01(arr)` | `arr.map(callback02)` | array of `callback02`'s returns |  
| 2 | - | `callback02(num)` | `if(num > 5) {console.log(num); return num}` | `num`  from `return num`. <br> `undefined` from no explicit return. | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `arr.map(callback02)` | `[18, undefined]` |  
| 2 | 1 | `callback02(topArr[0][0])` | Prints `18` to output. | `18` from `return num`. |  
| 2 | 2 | `callback02(topArr[0][1])` | If evaluates to `false` | `undefined` from no explicit return. |  
| 1 | 2 | `callback01(topArr[1])` | `arr.map(callback02)` | `[7, 12]` |  
| 2 | 1 | `callback02(topArr[1][0])` | Prints `7` to output. | `7` from `return num`. |  
| 2 | 2 | `callback02(topArr[1][1])` | Prints `12` to output. | `12` from `return num`. | 

- If your function bodies and program depth are getting complicated, it can help to sub in the actual evaluation results. 
- Uh oh - looks like our 'fix' didn't work after all. 
- This is gonna store `[[18, undefined], [7, 12]]`, not `[[18], [7,12]]` like we wanted.

<hr>
<br>
<br>
<br>
<hr>

# Assignment 04 Examples
``` js
/* Example 1 */
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.forEach(callback01)` | `undefined` by definition | 
| 1 | - | `callback01(arr)` | `console.log(arr[0])` | `undefined` from `console.log` eval | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | Prints `1` to output | `undefined` from `console.log` eval | 
| 1 | 2 | `callback01(topArr[1])` | Prints `3` to output | `undefined` from `console.log` eval | 
- Prints `1` and `3` to output and returns `undefined`.

<br>

``` js
/* Example 02 */
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `{ console.log(arr[0]); return arr[0] }` | `arr[0]` from explicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | Prints `topArr[0][0]` to output. <br> Returns `topArr[0][0]` | `1` from explicit return | 
| 1 | 2 | `callback01(topArr[1])` | Prints `topArr[1][0]` to output. <br> Returns `topArr[1][0]` | `3` from explicit return | 
- Prints `1` and `3` to output and returns `[1, 3]`.

<br>

``` js
/* Example 03 */
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns | 
| 1 | - | `callback01(arr)` | `arr.map(callback02)` | array of `callback02`'s returns | 
| 2 | - | `callback02(num)` | `num * 2` | `num * 2` from implicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `topArr[0].map(callback02)` | `[2, 4]` from map | 
| 2 | 1 | `callback02(topArr[0][0])` | `topArr[0][0] * 2` | `2` from implicit return | 
| 2 | 2 | `callback02(topArr[0][1])` | `topArr[0][1] * 2` | `4` from implicit return | 
| 1 | 2 | `callback01(topArr[1])` | `topArr[1].map(callback02)` | `[6, 8]` from map | 
| 2 | 1 | `callback02(topArr[1][0])` | `topArr[1][0] * 2` | `6` from implicit return | 
| 2 | 2 | `callback02(topArr[1][1])` | `topArr[1][1] * 2` | `8` from implicit return | 
- Returns `[[2, 4], [6, 8]]`. 

<br>

``` js
/* Example 04 */
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});
```

| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.filter(callback01)` | new array with elements that pass `callback01`'s test | 
| 1 | - | `callback01(object)` | `objKeys.every(callback02)` | `true` if callback02 returns are all `true` | 
| 2 | - | `callback02(key)` | `object[key][0] === key` | `object[key][0] === key` from implicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `objKeys.every(callback02)` | `false` from the `false` value in the second iteration |
| 2 | 1 | `callback02(objKeys[0])` | `'ant'.[0] === 'a'` | `true` |
| 2 | 2 | `callback02(objKeys[1])` | `'elephant'.[0] === 'b'` | `false` |
| 1 | 2 | `callback01(topArr[1])` | `objKeys.every(callback02)` | `true` from both being `true`. |
| 2 | 1 | `callback02(objKeys[0])` | `'cat'.[0] === 'c'` | `true` |
| 2 | 2 | `callback02(objKeys[1])` | `'dog'.[0] === 'c'` | `true` |
- Only one of the objects, the one at `topArray[1]` met the criteria for `every`
- The return value is `[{c: 'cat', d: 'dog'}]`.

<br>

``` js
/* Example 05 */
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
```
| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | new array from `callback01` returns | 
| 1 | - | `callback01(arr)` | `return arr.filter(callback02)` | returns result of filter on `callback02` | 
| 2 | - | `callback02(item)` | `if (typeof item === 'number) {` <br> `return item > 13` <br> `} else {` <br> `return item.length < 6` <br> `}` | `boolean` from explicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `return arr.filter(callback02)` | `[27]` |
| 2 | 1 | `callback02(topArr[0][0])` | `8 > 13` | `false` |
| 2 | 2 | `callback02(topArr[0][1])` | `13 > 13` | `false` |
| 2 | 3 | `callback02(topArr[0][2])` | `27 > 13` | `true` |
| 1 | 2 | `callback01(topArr[2])` | `return arr.filter(callback02)` | `[apple]` |
| 2 | 1 | `callback02(topArr[1][0])` | `'apple'.length < 6` | `true` |
| 2 | 2 | `callback02(topArr[1][1])` | `'banana'.length < 6`- | `false` |
| 2 | 3 | `callback02(topArr[1][2])` | `'cantaloupe'.length < 6` | `false` |
- This program will return `[[27], ['apple']]`.

<br>

``` js
/* Example 06 */
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

```
| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | array from return values of `callback01` | 
| 1 | - | `callback01(element1)` | `return element1.forEach(callback02)` | `undefined` per definition | 
| 2 | - | `callback02(element2)` | `return element2.filter(callback03)` | result of filter on `callback03` | 
| 3 | - | `callback03(element3)` | `return element3.length > 0` | `boolean` by explicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `return element1.forEach(callback02)` | `undefined` per definition |
| 2 | 1 | `callback02(topArr[0][0])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[0][0][0])` | `1 > 0` | `true` |
| 2 | 2 | `callback02(topArr[0][1])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[0][1][0])` | `1 > 0` | `true` |
| 2 | 3 | `callback02(topArr[0][2])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[0][2][0])` | `1 > 0` | `true` |
| 2 | 4 | `callback02(topArr[0][2])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[0][2][0])` | `1 > 0` | `true` |
| 1 | 2 | `callback01(topArr[1])` | `return element1.forEach(callback02)` | `undefined` per definition |
| 2 | 1 | `callback02(topArr[1][0])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[1][0][0])` | `1 > 0` | `true` |
| 2 | 2 | `callback02(topArr[1][1])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[1][1][0])` | `1 > 0` | `true` |
| 2 | 3 | `callback02(topArr[1][2])` | `return element2.filter(callback03)` | `true` because all are true |
| 3 | 1 | `callback03(topArr[1][2][0])` | `1 > 0` | `true` |
- Returns `[undefined, undefined]`.


<br>

``` js
/* Example 07 */
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```
| Stack | Iter |  Caller | Body | Returns | 
| - | - | - | - | - | 
| 0 | - | - | `topArr.map(callback01)` | array of `callback01`'s returns |
| 1 | - | `callback01(arr)` | `arr.map(callback02)` | array of `callback02`'s returns | 
| 3 | - | `callback02(elem)` | `if (typeof elem === 'number'` <br> `return elem + 1` <br> `} else {` <br> `return elem.map(callback03)` | `number` if element is a number <br> `array` from `callback03` if not | 
| 4 | - | `callback03(number)` | `return number + 1` | `number` from explicit return | 
| __Stack__ | __Iter__ |  __Caller__ | __Body__ | __Returns__ |  
| 1 | 1 | `callback01(topArr[0])` | `arr.map(callback02)` | array of `callback02`'s returns |
| 2 | 1 | `callback02(topArr[0][0])` | `return elem.map(callback03)` | array of `callback03`'s returns |
| 3 | 1 | `callback02(topArr[0][0][0])` | `1 + 1` | `2` |
| 3 | 2 | `callback02(topArr[0][0][1])` | `2 + 1` | `3` |
| 2 | 2 | `callback02(topArr[0][1])` | `return elem.map(callback03)` | array of `callback03`'s returns |
| 3 | 1 | `callback02(topArr[0][1][0])` | `3 + 1` | `4` |
| 3 | 2 | `callback02(topArr[0][1][1])` | `4 + 1` | `5` |
| 1 | 2 | `callback01(topArr[1])` | `arr.map(callback02)` | array of `callback02`'s returns |
| 2 | 1 | `callback02(topArr[1][0])` | `5 + 1` | `6` |
| 2 | 2 | `callback02(topArr[1][1])` | `6 + 1` | `7` |
- Returns `[[[2, 3], [4, 5]], [6, 7]]`




