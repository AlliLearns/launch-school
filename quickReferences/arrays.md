# [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Array Static Methods

# Array Instance Methods
## Array Mutation
### `arr.concat(arr1 [, ...arrN])`
- Non-mutating. 
- Joins multiple arrays into one.
- Shallow copy. Object references are copied.
- Concatenates `arr` with `arr1 - arrN`.
- Returns a new array containing the concatenation.

### `arr.flat([depth])`
- Non-mutating.
- Flattens a nested array structure.
- Recursively concatenates elements of `arr` to new array.
- `depth` optionally specifies how deep we recurse. 
- If `depth` is omitted, default is `1`.
- Returns a new array containing the flattened elements.

### `arr.slice([start [, end]])`
- Non-mutating. 
- Isolates a subsection of `arr`.
- `start` is the index to start copying from.
- If `start` is omitted, default to `0`.
- `end` is the index to copy up to (exclusive).
- If `end` is omitted, default to `arr.length`
- Returns a new array containing the slice.

### `arr.pop()`
- Mutates `arr` (removes last element).
- Returns the removed from `arr`.
- Returns `undefined` if `arr` is empty.

### `arr.push(element1 [, ...elementN])`
- Mutates `arr` (adds `element1 - elementN` to the end).
- Returns the new value for `arr.length`. 

### `arr.shift()`
- Mutates `arr` (removes first element).
- Returns the removed element from `arr`.
- Returns `undefined` if `arr` is empty.

### `arr.unshift(element1 [, ...elementN])`
- Mutates `arr` (adds `element1 - elementN` to the start).
- Returns the new value for `arr.length`.

### `arr.reverse()`
- Mutates `arr`.
- Reverses the values within `arr`.
- Returns modified `arr`'s reference.

### `arr.splice(start [, deleteCount [, ...itemN]])`
- Mutates `arr`.
- 

### `arr.map(callback(element [, index [, array]]), [, thisArg])`
- Non-mutating in itself, but `callback` can mutate. 
- `callback` is called on every array element.
- `element` is the current array element in `callback`.
- `index` optionally passes the index of the element.
- `array` optionally passes array this was called on.
- `thisArg` optionally sets `this` context for `callback`.
- If `thisArg` is omitted, defaults to `undefined`.
- Returns a new array constructed from the callback's return values.
- The returned array is the same length as `arr`.
- If `callback` omits an explicit return, the new array contains `undefined`.
- Don't use `map` if you're not going to use the new array.

### `arr.sort([compareFn(firstEl, secondEl)])`
- Mutating. 
- `compareFn(...)` is an optional callback.
- If `compareFn(...)` is omitted: 
  - Array elements are converted into strings. 
  - Then sorted by their ascending UTF-16 values.
  - All `undefined` values are placed at the end.
- `firstEl` or `a` is the current element of the array.
- `secondEl` or `b` is the next element of the array. 
- `compareFn(...)` needs to return a numerical value.
  - return a number `< 0` if `a` will be before `b`.
  - return a number `> 0` if `a` will be after `b`.
  - return `0` if `a` and `b` are the same. 
- The sorted array is returned.


### `arr.fill(value [, start [, end]])`
- Mutates `arr`. 
- Fills `arr` with `value` from `start` to `end - 1`.
- `value` is the static value that will fill `arr`.
- `start` is the optional index from which to start filling.
- If `start` is omitted, default to `0`.
- `end` is the optional index at which to end filling.
- If `end` is omitted, default to `arr.length`.
- Returns modified `arr`'s reference.
- (Needs to be completed)

### `arr.copyWithin(target [, start [, end]])`
- Mutates `arr`.
- Copies values at `start` to `end - 1` to `target`.
- Does not change `arr`'s length.
- `target` is index at which to copy the sequence to.
- If `target` is negative, count back from the end.
- If `target >= arr.length` nothing is copied.
- If `target > start`, sequence will be trimmed.
- `start` is optional index to start sequence from.
- If `start` is negative, count back from the end. 
- If `start` is omitted, default to `0`.
- `end` is optional index to end sequence (exclusive).
- If `end` is negative, count back from the end.
- If `end` is omitted, default to `arr.length`.
- Returns modified `arr`'s reference.
- (Needs a better explanation)

<br>

## Array Searching
### `arr.includes(searchElement [, fromIndex])`
### `arr.indexOf(searchElement [, fromIndex])`
- `searchElement` is the element we should look for.
- `fromIndex` is optional starting index.
- If `fromIndex` is omitted, defaults to 0.
- If `fromIndex` is negative, will search up to value.
- If `fromIndex` is negative, will still search front to back.
- Returns the first index of a strict match.
- Returns -1 if not found. 

### `arr.lastIndexOf(searchElement [, fromIndex])`

<br>

## Array Extraction
### `arr.entries()`
### `arr.keys()`
### `arr.values()`
### `arr.filter(callback(element [, index [, array]]), [, thisArg])`
- Non-mutating in itself, but `callback` can mutate. 
- `callback` is called on every array element.
- `element` is the current array element in `callback`.
- `index` optionally passes the index of the element.
- `array` optionally passes array this was called on.
- `thisArg` optionally sets `this` context for `callback`.
- If `thisArg` is omitted, defaults to `undefined`.
- Looks at truthy value of `callback`'s return. 
- If truthy, `element` is added to a new array.
- If falsey, `element` is not added to new array. 
- The new array is returned by `filter`.


<br>

## Array Printing
### `arr.toLocaleString([locales [, options]])`
### `arr.toString()`
### `arr.join([separator])`

<br>

## Not Classified Yet
### `arr.every(callback(element [, index [, array]]), [, thisArg])`


### `arr.find(callback(element [, index [, array]]), [, thisArg])`

### `arr.findIndex(callback(element [, index [, array]]), [, thisArg])`

### `arr.flatMap(callback(currentValue [, index [, array]]), [, thisArg])`

### `arr.forEach(callback(element [, index [, array]]), [, thisArg])`
- Returns `undefined`. It can't be chained. 

### `arr.reduce(callback(previousValue [, currentValue [, currentIndex, [, array]]]), [, initialValue])`

### `arr.reduceRight(callback(accumulator [, currentValue [, index [, array]]]), [, thisArg])`

### `arr.some(callback(element [, index [, array]]), [, thisArg])`



<hr>
<br>
<br>
<br>
<hr>

# Array-Like Objects