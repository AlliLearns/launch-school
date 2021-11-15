// Using the `forEach` method, write some code 
// to output all vowels from teh strings in the 
// arrays. Don't use a `for` or `while` loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const vowels = 'aeiouAEIOU'

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    const chars = word.split('');
    chars.forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    })
  })
})