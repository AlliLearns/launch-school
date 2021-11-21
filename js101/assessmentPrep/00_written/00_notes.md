<hr>

# Variable Terms
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/variables#variablesandvariablenames) - Identifiers and Variable Names

| Identifiers are any of | Variable Names are any of | 
| :- | :- |
| Property names of objects | Properties of the global object |
| Variable names declared by `let` and `var` | Variable names declared by `let` and `var` |
| Constant names declared by `const` | Constant names declared by `const` |
| Function names | Function names |
| Function parameters | Function parameters |
| Class names | Class names |

- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/variables) - Variable Definition
  - Variables provide a way to label data with a descriptive name. 
  - Their purpose is to label and store data so that your program can use it.
  - A variable is a named area of a program's memory space.
  - `let answer = 41` will:
    - Set aside a bit of memory and stores the value `41` in that area. 
    - Create a variable named `answer` that we can use to access that value. 
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/variables#declaringandassigningvariables) - Variable Nomenclature
  - A **variable declaration** is a statement that asks the JS engine to reserve space for a variable with a particular name. 
  - A **variable declaration** can optionally specify an initial value for the variable (called 'using an **initializer**'). 
  - The **assignment operator** `=` is used to both **assign** and **reassign** new values to variables. 

<hr>
<br>
<hr>

# The Mutability of Variables


# Naming Conventions
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/preparations#namingconventions) - Case Conventions
  - Use **camelCase** for most variable and function names. 
  - Use **PascalCase** for constructor functions.
  - Use **SCREAMING_SNAKE_CASE** for unchanging configuration values. 
  - Use **SCREAMING_SNAKE_CASE** for magic numbers (literals which need context to have meaning). 
  - Use personal preference for all other constants that aren't function expressions.
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/variables#variablesandvariablenames) - Naming Guidelines
  - Accurately and succinctly describe the data that the variable is meant to represent.

# Logging vs Returning
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues)
  - Expressions can do something _and_ evaluate to a value. 
  - `console.log('hello')` will **print 'hello' to output** _and_ **evaluate to undefined**.
  - Logging does not return the value that was printed. 
  - So, `let str = console.log('hello')` will **print 'hello'** and **set `str` to `undefined`**.
  - Output and the return value are different concepts. 

# Other Nomenclature
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues) - Expressions
  - An **expression** is anything that JavaScript can evaluate to a value.
  - Expressions include function calls (`console.log(...)` will evaluate to `undefined`).
  - All JavaScript expressions have return values (`5 + 7` evaluates to _and_ returns `12`).
  - All values taken in isolation will evaluate to itself (executing `"hi"` will return `'hi'`).
- [JavaScript Intro Book](https://launchschool.com/books/javascript/read/basics#statements) - Statements
  - A **statement** is a line of code commanding a task.
  - A statement's value cannot be captured and reused later in your code. 
  - This does not mean they have no return values (`let num = 3` will return `undefined` in Node REPL).
