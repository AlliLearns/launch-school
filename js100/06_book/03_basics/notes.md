# Data Types 
- `String`, `Number`, `Null`, `Undefined`, `Boolean` are the five primitive types. 
- `Object` is the only composite type. 
- `Symbol` and `BigInt` are newer primitive types that will not be covered. 

<br>

- Data type values can be represented by something called `literals`.
- A literal is any notation that lets you represent a fixed value in source code. 
``` js
// Examples of data type literals
'Hello, world!';    // string literal
3.141528;           // numeric literal
true;               // boolean literal
undefined;          // undefined literal
{a: 1, b: 2};       // object literal
[1, 2, 3]           // array literal (arrays are not their own data type)
```

## Strings
- A `string` is a list of characters in a specific sequence. 
- Strings can be represented in either double or single quotes. 
- If you need to represent either a single or a double quote in your string literal:
    - Use the opposite quotation type.  `"He said, 'Hi there!'"`
    - Escape the characters.            `'He said, \'Hi there!\'"`
- The backslash (`\`) is the 'escape character' and tells the computer that the next character should be taken literally as part of the string rather than having any syntactic significance as part of the language. 
- If we did not escape the single quotes in the second example above, JavaScript would end the string early. 

<br>

- `String interpolation` is something new in JavaScript, implemented through `template literals`.
- It uses backticks to cleanly merge JavaScript expressions and strings: 
    - `Blah ${expression} blah.` Where `${expression}` is replaced with the value of `expression`.

## Numbers
- The `number` data type represents all types of real numbers in JavaScript. 
- Some programming langauges have different data types for different number types (such as ints and floats).

## Booleans 
- Boolean values represent an 'on' or 'off' state. 
- `true` and `false` are the only two values that this type can have. 

## Undefined
- The `undefined` data type is used as a way to express the absense of a value. 
- When a variable is not given a value during its declaration, it's given a value of `undefined` by JavaScript. 
- We can also explicitly assign `undefined` to a variable. (But I think it's discouraged? That's `null's` job.)

## Null
- Represents the intentional absense of a value. 
- The main difference between `null` and `undefined` is that you must use `null` explicitly if you want it.
- The two types are so similar that many people think that having them both in the language is a mistake.
- We'll explore this more later.  

## The `typeof` Operator
``` js 
console.log(typeof 1);          // number
console.log(typeof 'foo');      // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object
console.log(typeof [1, 2, 3]);  // object
```
- Every value in a JavaScript program will have a type. 
- You'll see what that type is if you use the `typeof` operator. 
- The `undefined` data type has the value of 'undefined' but the `null` data type has the type of 'object'
- This is a bug that's been in the language since the start, and fixing it now would break too many applications.
- You'll see that an array is also an object. You'll see why as we get deeper. 

<hr>

# Operations

<hr>

# Explicit Coercion

<hr>

# Data Structures

<hr>

# Expressions and Return Values 

<hr>

# MDN Statements

<hr>

# Summary

<hr>

# Exercises

<hr>
