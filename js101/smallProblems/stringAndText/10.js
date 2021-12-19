// Search Word (Part 02) 
// The function from the previous exercise returns the 
// number of occurrences of a word in some test. Although
// this is useful, there are also situations in which 
// we just want to find the word in the context of the 
// text. 

// For this exercise, write a function that takes a word 
// and some text as arguments, and returns the text with 
// every instances of the word highlighted. To highlight
// a word, enclose the word with two asterisks on each side
// and change every letter of the word to uppercase. 

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';
const result = "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"

// console.log(searchWord('sed', text));
console.log(searchWord('sed', text) === result);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem 
// accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
// ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
// explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
// odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione 
// voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
// quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam 
// eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
// voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
// corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
// **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit 
// esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis 
// nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
// ex ea commodi consequatur? blasedbla"

const test = "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

findDiffIndex(result, test);
function findDiffIndex(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      console.log(`str1 is ${str1[i]} and str2 is ${str2[i]} at index ${i}`);
    }
  }
}
/*
  PROBLEM
    input is a word and some text
    output is the text with every instance of the word highlighted
    highlight a word by changing `word` to `**WORD**`
    words are separated with a single whitespace
    assume case should be ignored
    assume punctuation will always be at the end of a word

  ALGORITHM
    lowercase input word
    create `result` and init to empty array
    iterate over input text
      separate word into word and punctuation
      if the copy of current word lowercased is the same as the input word, 
        push modified word onto `result` with punctuation restord at end of word
      else push current word
    end iteration
    return joined `result`

    function separateWord(word) {
      if the last character in the word is punctuation, 
        separate punctuation and return [word, punc]
      else reuturn [word, '']
    }
*/

function searchWord(word, text) {
  word = word.toLowerCase();
  const words = text.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const [currWord, punc] = separateWord(words[i]);
    if (currWord.toLowerCase() === word) {
      result.push(`**${currWord.toUpperCase()}**${punc}`);
    } else {
      result.push(words[i]);
    }
  }

  return result.join(' ');
}

function separateWord(word) {
  if (word[word.length - 1].match(/[^a-z]/i)) {
    const thisWord = word.slice(0, word.length - 1);
    const punc = word.slice(-1);
    return [thisWord, punc];
  }

  return [word, ''];
}