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

## Object Content Access
### `Object.entries(obj)`
- `obj` is the object whose entries you want.
- Returns a 2D array whose values are `[key, value]`.
### `Object.keys(obj)`
- `obj` is the object whose property names we want.
- Returns an array of strings that are the object's property names.
- Own Enumerable properties only.
### `Object.values(obj)` 
- `obj` is the object whose values we want to know.
- Returns an array containing the object's values.
- Enumerable properties only.
### `Object.getOwnPropertyNames(obj)`
- `obj` is the object whose property names we want.
- Returns an array of strings that are the object's property names.
- All properties, including non-enumerables. (Excludes symbols.)
### `Object.getOwnPropertySymbols(obj)`


## Object Content Manipulation
### `Object.assign(target, ...sources)`
  - Copies values of enumerable own properties from `sources` to `target`.
  - Returns the modified `target` object.
  - Properties with existing keys get their values reassigned.
  - Both `string` and `symbol` properties are copied. 
### `Object.preventExtensions(obj)`
### `Object.freeze(obj)`
### `Object.seal(obj)`
### `Object.isExtensible(obj)`
### `Object.isFrozen(obj)`
### `Object.isSealed(obj)`


## Object Creation and Prototypes
### `Object.create(proto [, propertiesObj])`
  - Creates a new object.
  - `proto` is the prototype of the new object. 
  - The second argument has to do with property descriptors.

### `Object.fromEntries(iterable)`
- `iterable` contains `[key, value]` pairs for new obj.
- Returns a new object made from `iterable`'s entries.

### `Object.setPrototypeOf(obj, prototype)`
  - Sets the `[[Prototype]]` of `obj` to `prototype`.
  - Not recommended by MDN; make a new object with `create` instead.
### `Object.getPrototypeOf(obj)`
  - Returns the `[[Prototype]]` of `obj`.


## Object Property Descriptors
### `Object.defineProperty(obj, prop, descriptor)`
### `Object.defineProperties(obj, props)`
### `Object.getOwnPropertyDescriptor(obj, prop)`
### `Object.getOwnPropertyDescriptors(obj)`

## Use Object to make Comparisons
### `Object.is(value1, value2)`
- `value1` is the first value to compare.
- `value2` is the second value to compare.
- Returns a boolean saying whether they are the same value.


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