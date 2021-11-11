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
### `arr.lastIndexOf(searchElement [, fromIndex])`

<br>

## Array Extraction
### `arr.entries()`
### `arr.keys()`
### `arr.values()`

<br>

## Array Printing
### `arr.toLocaleString([locales [, options]])`
### `arr.toString()`
### `arr.join([separator])`

<br>

## Not Classified Yet
### `arr.every(callback(element [, index [, array]]), [, thisArg])`

### `arr.filter(callback(element [, index [, array]]), [, thisArg])`

### `arr.find(callback(element [, index [, array]]), [, thisArg])`

### `arr.findIndex(callback(element [, index [, array]]), [, thisArg])`

### `arr.flatMap(callback(currentValue [, index [, array]]), [, thisArg])`

### `arr.forEach(callback(element [, index [, array]]), [, thisArg])`

### `arr.map(callback(element [, index [, array]]), [, thisArg])`

### `arr.reduce(callback(previousValue [, currentValue [, currentIndex, [, array]]]), [, initialValue])`

### `arr.reduceRight(callback(accumulator [, currentValue [, index [, array]]]), [, thisArg])`

### `arr.some(callback(element [, index [, array]]), [, thisArg])`

### `arr.sort(compareFn(firstEl, secondEl))`

<hr>
<br>
<br>
<br>
<hr>

# Array-Like Objects