function createBook(title, author, read = false) {
  const newBook = {
    title: title,
    author: author,
    read: read,

    readBook() {
      this.read = false;
    },

    getDescription() {
      const firstSentence = `${this.title} was written by ${this.author}. `;
      const secondSentence = `I ${this.read ? 'have' : "haven't"} read it.`;
      return firstSentence + secondSentence;
    },
  };

  return newBook;
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());