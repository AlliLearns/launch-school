# Variables and Variable Names
- A `variable` is a named area of a program's memory space where the program can store data. 
- Variables, in particular, represent named data that is meant to be changed after its instantiation. 
``` js
// When JS sees this, it sets aside a bit of memory and stores the value `41` in that area. 
// It also creates a variable named `answer` that we can use to access that value. 
let answer = 41;

// Here, we _reassign_ the value `42` to the variable named `answer`.
// That is, JS makes `answer` refer to a new value. 
// We're not changing the value of 41, we're completely replacing it in `answer`.
answer = 42;

// To determine what value needs to be logged, JS retrieves
// the value stored in the location used by the variable. 
console.log(answer);
```

## Variable Naming
- Properly naming variables is traditionally viewed as one of the most difficult tasks in computer programming. 
- This might seem odd, especially since the computer doesn't care about what you name your assigned memory pieces.
- But a variable name must accomplish some important things for its human readers:
    - Accurately and succinctly communicate programmer intent for that piece of data. 
    - Accurately and succinctly describe the data that the variable contains. 
    - It's easy to lose track of what variable is meant to hold what data when your variable names are ambiguous. 
    - It becomes a hassle for the people reading your program to go and suss out why that variable exists if the name doesn't tell them.
    - This isn't just for other readers - it's for you, too. 
    - When you come back to this program in six months, you're not going to remember why you structured your code the way you did. You won't remember the complicated decision making that went into it - and you don't want to have to traverse that work again to figure it out. Good variable names are a help to remind you of your intention.  
- You'll also hear the term `identifier` to refer to variables and the wider world of named data representation. 

## What else is a Variable?
<!-- The core point of this section is a little fuzzy...outside of nomenclature. -->
<!-- - JavaScript has lots of things that involve storing data in a named area of memory: 
    - Variables declared with the `let` and `var` keywords.
    - Constants declared with the `const` keyword.
    - Properties of the global object. 
    - Function names.
    - Function parameters.
    - Class names.
- We'll get to what these are later in the curriculum.
- Right now we just need to understand that  -->
- You'll hear a lot of data representations outside of what we just defined being referred to as a `variable`: 
- This is one of those things that's technically inaccurate, but were we don't need to be that pedantic to have a working conversation about it. 
- This applies to: 
    - Constants, which aren't meant to change but are sometimes called a variable in day-to-day anyway. 
    - todo; etc...
<!-- My wording is strange, I'll need to clear that up. -->

<hr>

# Declaring and Assigning Variables
``` js
// Variable declaration: telling JS we want a variable named 'firstName'
let firstName;  // `undefined` until assigned a value.

// Variable initialization: given a value with the definition.
let lastName = 'Mitchel';
```
- A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name. 
- Optionally, it also specifies an initial value for the variable. 
- JavaScript provides several ways to declare variables but the preferred way in modern JS is the `let` keyword. 
- JavaScript will not leave a variable unutilized when it's defined: 
    - If defined without an explicit value, JavaScript will give it a value of `undefined`. 
``` js
// There's a subtle difference between what the `=` token will do 
// when it's used in a variable definition and a variable reassignment,
// and the difference is in the return value of the operation: 

let a;      // will assign 'undefined' to b and will return `undefined`.
let b = 4;  // will assign 4 to b but will return `undefined`.
b = 7;      // will assign 7 to b but will return `7`

// There's something being implied here: that operations are functions. 
// We've been talking about 'return values' for operations. 
// I wish this was more explicit. 

// This is a problem I run into frequently though.
// Books whose target audience are beginners can't risk overwhelming 
// new programmers with all the little bits of information that can 
// swirl around in the depths. 
// The goal is to get them to understand the surface. 
```

<hr>

# Declaring Constants
- The `const` keyword is similar to `let` but it lets you declare and initialize constant identifiers. 
- Constants have an immutable binding to their values. (immutable meaning 'can't mutate - can't change')
- Unlike an ordinary variable, once you declare a constant, you cannot assign it a new value. 
- Using constants is a great way to label an unchanging value with a name that is easier to understand. 

<hr>

# Variable Scope 
- A variable's `scope` determines where it is available in a program. 
- The location where you declare a variable determines its scope. 
- In JavaScript, variables declared with the `let` or `const` keywords have __block__ scope. 
- A block is a related set of JavaScript statements and expressions between a pair of curly braces. 
- There's another type of variable declaration that uses the `var` keyword and follows different scope rules. 
- That will be addressed in Core. 

<hr>

# A Common Gotcha
- It's possible to declare a variable without any declarative keyword: `p = 'foo';`
- This looks harmless but JavaScript has some bizarre rules when working with so-called `undeclared variables`.
- Most notable: undeclared variables have global scope. 
- These are also discussed more in Core. 

<hr>

# Summary 

<hr>

# Exercises

<hr>
