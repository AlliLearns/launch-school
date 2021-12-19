// Search Word (Part 01)
// Write a function that takes two arguments, a word and 
// a string of text, and returns an integer representing
// the number of times the word appears in the text. 
// You may assume that the `word` and `text` inputs will
// always be provided, and that all word breaks are spaces.
// Thus, some words will include punctuation such as 
// periods and commas. 

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

/*
  PROBLEM
    input is two args, a word and a string of text
    output is an integer 
    output integer represents the number of times the input word appears in the input text
    `word` and `text` will always be provided
    all word breaks are spaces
    watch for punctuation
    assume that we will ignore case (based on test output)

  ALGORITHM
    lowercase input word
    strip input text of punctuation
    create `count` and init to 0
    iterate over input text
      lowercase current word
      if current word is same as input word, increment count
    end iteration
    return `count`
*/

function searchWord(word, text) {
  word = word.toLowerCase();
  text = text.replace(/[^a-z\s]/gi, '');
  let count = 0;
  const words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word) count += 1;
  }

  return count;
}