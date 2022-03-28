/*  DIAMOND
  The diamond exercise takes as its input a letter, and outputs it in a diamond shape. 
  Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

    The first row contains one 'A'.
    The last row contains one 'A'.
    All rows, except the first and last, have exactly two identical letters.
    The diamond is horizontally symmetric.
    The diamond is vertically symmetric.
    The diamond has a square shape (width equals height).
    The letters form a diamond shape.
    The top half has the letters in ascending order.
    The bottom half has the letters in descending order.
    The four corners (containing the spaces) are triangles.
*/

/*
  PROBLEM
    takes a letter and prints a symmetric diamond the size of that letter's index in the alphabet. 
    the top half of the diamond has the letters in ascending order
    the bottom half of the triangle has the letters in descending order

    Notes: 
      0, A:     A
      1, B:    B B    (one space between them)
      2, C:   C   C   (three spaces between them)
      3, D:  D     D  (five spaces between them)
      4, E: E       E (seven spaces between them)

  EXAMPLES AND TEST CASES
    class Diamond
      static `makeDiamond`: takes the letter up to which the diamond should be created. Prints the diamond. 

  DATA STRUCTURES: array to hold the alphabet
  ALGORITHM
    declare a static property `alphabet` and init to array of letters

    static makeDiamond(letter)
      if `letter` is `'A'`, print 'A' and return

      isolate the alphabet up to and including letter and store in `letters`
      create variable `mirroredRows` and init to the letter `'A'` preceded by `letters.length` spaces

      iterate over `letters`, stopping short of the final letter
        declare `frontSpaces` and init to length of `letters` minus one minus the loop iterator
        declare `middleSpaces` and init to the next odd number based on the loop iterator ((2 * iterator) - 1)

        declare `row` and concat `frontSpaces` spaces + current letter + 
                                 `middleSpaces` spaces + current letter + 
                                 `frontSpaces` spaces 

        push `row` onto `mirroredRows`
      end iteration

      declare `middleRow` and init to the final letter twice with (2 * `letters.length` - 1) spaces between them.

      print `mirroredRows`, one element per line, forwards
      print `middleRow` 
      print `mirroredRows`, one element per line, backwards
    end makeDiamond
*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    if (letter === 'A') {
      return `${letter}\n`;
    }

    const indexOfLetter = Diamond.alphabet.split('').indexOf(letter);
    const letters = Diamond.alphabet.slice(0, indexOfLetter + 1);
    let middleSpaces = -1;

    const mirroredRows = [`${'A'.padStart(letters.length)}${''.padEnd(letters.length - 1)}\n`];

    for (let i = 1; i < letters.length - 1; i++) {
      const char = letters[i];
      const frontSpaces = letters.length - 1 - i;
      middleSpaces += 2;

      const row = `${char.padStart(frontSpaces + 1)}` +
                   `${char.padStart(middleSpaces + 1)}` +
                   `${''.padStart(frontSpaces)}\n`;

      mirroredRows.push(row);
    }

    const finalLetter = letters[letters.length - 1];
    const middleRow = `${finalLetter.padEnd(middleSpaces + 3)}${finalLetter}\n`;

    return mirroredRows.join('') + middleRow + mirroredRows.reverse().join('');
  }
}

module.exports = Diamond;

