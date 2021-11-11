# [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

# Object Static Methods
<!-- ### `Object.assign()`
### `Object.create()`
### `Object.defineProperty()`
### `Object.defineProperties()`
### `Object.entries()`
### `Object.freeze()`
### `Object.fromEntries()`
### `Object.getOwnPropertyDescriptor()`
### `Object.getOwnPropertyDescriptors()`
### `Object.getOwnPropertyNames()`
### `Object.getOwnPropertySymbols()`
### `Object.getPrototypeOf()`
### `Object.is()`
### `Object.isExtensible()`
### `Object.isFrozen()`
### `Object.isSealed()`
### `Object.keys()`
### `Object.preventExtensions()`
### `Object.seal()`
### `Object.setPrototypeOf()`
### `Object.values()` -->

### `Object.assign(target, ...sources)`
### `Object.create(proto [, propertiesObj])`
### `Object.defineProperty(obj, prop, descriptor)`
### `Object.defineProperties(obj, props)`
### `Object.entries(obj)`
- `obj` is the object whose entries you want.
- Returns a 2D array whose values are `[key, value]`.

### `Object.freeze(obj)`
### `Object.fromEntries(iterable)`
- `iterable` contains `[key, value]` pairs for new obj.
- Returns a new object made from `iterable`'s entries.


### `Object.getOwnPropertyDescriptor(obj, prop)`
### `Object.getOwnPropertyDescriptors(obj)`
### `Object.getOwnPropertyNames(obj)`
- `obj` is the object whose property names we want.
- Returns an array of the object's property names.
- All properties, including non-enumerables.

### `Object.getOwnPropertySymbols(obj)`
### `Object.getPrototypeOf(obj)`
### `Object.is(value1, value2)`
- `value1` is the first value to compare.
- `value2` is the second value to compare.
- Returns a boolean saying whether they are the same value.

### `Object.isExtensible(obj)`
### `Object.isFrozen(obj)`
### `Object.isSealed(obj)`
### `Object.keys(obj)`
- `obj` is the object whose keys we want to know.
- Returns an array of strings that are the object's keys.
- Enumerable properties only.

### `Object.preventExtensions(obj)`
### `Object.seal(obj)`
### `Object.setPrototypeOf(obj, prototype)`
### `Object.values(obj)` 
- `obj` is the object whose values we want to know.
- Returns an array containing the object's values.
- Enumerable properties only.

<hr>
<br>
<br>
<br>
<hr>

# Object Instance Methods
### `obj.hasOwnProperty(prop)`
- `prop` is the string or symbol of the property to test.
- Returns `true` if `prop` is defined on the object.
- Returns `false` otherwise.
- Only checks for own properties, not inherited properties.

### `obj.isPrototypeOf(object)`
### `obj.propertyIsEnumerable(prop)`
### `obj.toLocaleString(locale)`
### `obj.toString()`
### `obj.valueOf()`