# [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
## Regular Expression Patterns

## Creating a Regular Expression
- Construct a regular expression with `/pattern/flags`. 
  - EX: `let re = /ab+c/g;`
  - RegExp literals provide compilation when the script is loaded.
  - Better used when your RegExp won't change, can improve performance.
- Construct a regular expression with `new RegExp('pattern', 'flags')`. 
  - EX: `let re = new RegExp('ab+c', 'g');`
  - RexExp constructors provide runtime compilation. 
  - Best used when your know the RegExp pattern will change.
  - Best used when you don't know what the pattern will be. 