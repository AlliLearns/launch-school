# [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

# String Methods
## String 'Mutation'
### `str.toLowerCase()`
- Returns a new string where `str` converted to lower-case.

### `str.toUpperCase()`
- Returns a new string where `str` converted to upper-case.

### `str.trim()`
- Returns new str, whitespace gone from both ends of `str`.
- (Useful when obtaining input from users.)

### `str.trimStart()`
- Returns new string, whitespace gone from start of `str`.

### `str.trimEnd()`
- Returns new string, whitespace gone from end of `str`.

### `str.concat(str1 [, ...strN])`
- `str1` and `strN` are one or more strings.
- Returns new string of `str` concatenated to `str1...strN`.

### `str.repeat(count)`
- `count` is the number of times `str` should repeat.
- `count` should be an integer between `0` and `+Infinity`.
- Throws an exception for a negative `count`.
- Throws an exception for `+Infinity` and overflow.
- Returns a new string with `str` repeating `count` times.

### `str.padStart(targetLength [, padString])`
- `targetLength` is desired length of new string.
- Returns `str` as-is if `targetLength < str.length`.
- `padString` optionally give string to pad with.
- `padString` truncated if `len > targetLength`.
- `padString` defaults to `" "` if omitted. 
- Returns new string padded from start with `padString`.

### `str.padEnd(targetLength [, padString])`
- `targetLength` is desired length of new string.
- Returns `str` as-is if `targetLength > str.length`.
- `padString` optionally give string to pad with.
- `padString` truncated if `len > targetLength`.
- `padString` defaults to `" "` if omitted. 
- Returns new string padded at end with `padString`.

### `str.replace(searchFor, replaceWith)`
### `str.replaceAll(searchFor, replaceWith)`

<br>

## String Searching 
### `str.charAt(index)`
- `index` is integer number from `0` to `str.length - 1`.
- `index` defaults to 0 if non-integer or absent.
- Returns the character at the given `index`.
- Returns empty string if `index` is out of range.

### `str.indexOf(searchString [, fromIndex])`
- Method is case-sensitive.
- `searchString` is the string it should search for.
- `searchString` is "undefined" if missing or not a string.
- Optionally `fromIndex` will set an index to start from.
- `fromIndex` defaults to 0 if it's not provided.
- Returns the index of the first character of the match.
- Returns `-1` if not found. 

### `str.lastIndexOf(searchValue [, fromIndex])`
- Method is case-sensitive.
- `searchValue` is the string it should search for.
- If `searchValue` is empty string, `fromIndex` is returned.
- Optionally `fromIndex` is an index to start backwards from.
- `fromIndex` defaults to +Infinity if it's not provided. 
- If `fromIndex` is `< 0`, it's set to 0. 
- Returns the index of the first character of the match.
- Returns `-1` if not found. 

### `str.includes(searchString [, position])`
- Method is case-sensitive.
- `searchString` is the string it should search for.
- (Does searchString have a default value if not given)?
- Optionally, `position` will set an index to start from.
- `position` defaults to 0 if it's not provided.
- Returns `true` if `searchString` was found.
- Returns `false` if `searchString` was not found. 

### `str.startsWith(searchString [, position])`
- Method is case-sensitive.
- `searchString` is the string it should search for. 
- (Does searchString have a default value if not given)?
- Optionally, `position` will set an index to start from.
- `position` defaults to 0 if it's not provided.
- Returns `true` if `searchString` was found at index 0.
- Returns `false` if `searchString` was not found at index 0.

### `str.endsWith(searchString [, length])`
- Method is case-sensitive.
- `searchString` is the string it should search for.
- (Does searchString have a default value if not given)?
- Optionally, `length` will restrict `str`'s length. 
- `length` defaults to `str.length` if it's not provided.
- Returns `true` if `searchString` was found at end of `str`.
- Returns `false` if `searchString` was not found at the end.

<br>

## String Extraction 
### `str.substring(indexStart [, indexEnd])`
- `indexStart` is the index to start from.
- `indexEnd` optionally is the first index to exclude.
- If `indexEnd` is omitted, will return the rest of `str`. 
- Returns a new string containing the specified part of `str`.

### `str.slice(beginIndex [, endIndex])`
- `beginIndex` is the index to begin extraction.
- `beginIndex` defaults to 0 if non-number or absent.
- If `beginIndex` is negative, starts from end of string.
- If `beginIndex` is `> str.length`, returns `""`.
- `endIndex` is last index (exclusive range).
- `endIndex` defaults to end of `str` if non-number or absent.
- If `endIndex` is negative --.
- If `endIndex` is before `beginIndex`, returns `""`.
- Returns a new string containing the extracted section.
- (Points (3) and (7) need better wording).

### `str.split([sep [, limit]])`
- `sep` is the optional separator `str` will be split on.
- `sep` can be a String or a Regular Expression.
- If `sep` is absent or does not occur, `['str']` is returned.
- If `sep` is `''`, returns array of `str`'s UTF-16 codeunits.
- (This means that it destroys surrogate pairs).
- If `sep` is at start or end of `str`, `''` included in arr.
- `limit` is the optional limit of returned array's length.
- `limit` should be a non-negative integer.
- If `limit` is `0`, then `[]` is returned.
- Returns array of strings, split at each occurrence of `sep`.
- (Clarify point (5)).


<br>

## String Comparisons
### `str.localeCompare(cmp [, locales [, opts]])`

<br>

## String Unicode Methods
### `str.charCodeAt(index)`
### `str.codePointAt(pos)`
### `str.normalize([form])` 

<br>

## String Searching with Regular Expressions
### `str.search(regexp)`
- `regexp` is a regular expression object.
- If `regexp` is not a RegExp obj, it's implicitly converted.
- Returns the index of the first match.
- Returns `-1` if no match was found. 

### `str.match(regexp)`
- `regexp` is a regular expression object.
- If `regexp` is not a RegExp obj, it's implicitly converted.
- Returns an array.
- If no parameter is given, returns `[""]`.
- If the `g flag` is used, all matches will be returned.
- If `g` isn't used, returns first match and capturing groups.
- Returns `null` if no matches are found.
- (More to add about the absence of the `g flag`).

### `str.matchAll(regexp)`
- (TODO when I understand regular expressions better).


<hr>
<br>
<br>
<br>
<hr>


## List Excludes
- String static methods (deal with unicode mostly)
- `str.at(...)` is an experimental method.
- `str.toLocaleLowerCase(...)` won't be used much.
- `str.toLocaleUpperCase(...)` won't be used much.
- `str.valueOf()` is generally used internally by JS. 
<hr>
