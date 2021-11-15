// How would you order the following array of 
// objects based on the year of publication 
// from each book, from earliest to latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/*
  INPUT   array of objects
  OUTPUT  sorted array of objects
  RULES   years will be at the end of the object
          years are numeric strings
          years will be paired with the string 'published'
          input will be arrays of objects with consistent structure
          will not mutate original array.
  DATA    arrays and objects
  ALGORITHM
    function sortByDateAscending(arr) 
      - copy `arr` into new array `result`
      - start iteration over `result` up to but not including `result.length`
        - leave the same if `Number(result[i].published)` < `Number(result[i+1].published)`
        - swap if `Number(result[i].published)` > `Number(result[i+1].published)`
      return `result`
*/

function sortByDateAscending(arr) {
  const result = arr.slice();

  result.sort((a, b) => {
    return Number(a.published) - Number(b.published);
  })

  return result;
}

console.log(sortByDateAscending(books));