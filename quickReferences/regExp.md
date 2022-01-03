# [JavaScript Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
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

# [Regular Expression Patterns](https://www.regular-expressions.info/tutorial.html)
## Introduction
- What's a Regular Expression? (Matching/locating specific sequences of characters of text...)
- What's a `match`? ()
- What's a regular expression engine/flavor?

## Classifying Characters and Structure
- What's a character? (Unicode? What, exactly, gets compared to find a 'match'?)
- What's a Special (or Meta) Character? 
  - (Introduce the concept that some characters have a special meaning.)
  - (Introduce how to escape them)
  - (List 'em but explain that their meaning can change depending on context and flavor)
- What's a 'shorthand'? 
  - (Introduce the concept of a shorthand here, but don't go into detail until after character classes)
- What's a flag? (List 'em and explain them, if they're consistent.)
- How does the engine find a match? 

## Classifying Concepts
(The goal here is to just explain what the concept is, not go into detail)
- What's a simple match?
- What's grouping?
- What's a backreference?
- What's lookahead and lookbehind?
- What's a lookaround? 
(And others)


## Simple Matching - Literal Matches (Characters and whitespace)
## Simple Matching - Alternation
## Simple Matching - Character Classes
## Simple Matching - The dot Special Character
## Simple Matching - Repetition
## Simple Matching - Anchors
## Simple Matching - Word Boundaries
