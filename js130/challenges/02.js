/* POINT MUTATIONS
  Write a program that can calculate the Hamming distance between two DNA strands.

  A mutation is simply a mistake that occurs during the creation or copying 
  of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular 
  functions, mutations tend to cause a ripple effect throughout the cell. 
  Although mutations are technically mistakes, a very rate mutation may equip
  the cell with a beneficial attribute. In fact, the macro effects of evolution
  are attributable by the accumulated result of beneficial microscopic mutations
  over many generations. 

  The simplest and most common type of nucleic acid mutation is a point mutation, 
  which replaces one base with another at a single nucleotide. 

  By counting the number of differences between two homologous DNA strands taken
  from different genomes with a common ancestor, we get a measure of the minimum
  number of point mutations that could have occurred on the evolutionary path 
  between the two strands. 

  This is called the Hamming distance. 

  GAGCCTACTAACGGGAT
  CATCGTAATGACGGCCT
  ^ ^ ^  ^ ^    ^^

  The Hamming distance between these two DNA strands is 7. 

  The Hamming distance is only defined for sequences of equal length. If you have 
  two sequences of unequal length, you should compute the Hamming distance over 
  the shorter length. 
*/

/*
  PROBLEM
    A DNA strand is a sequence of capitalized alphabetical characters
    The Hemming distance is the number of different characters between the two
    Check only up to the length of the shorter strand

  EXAMPLES AND TEST CASES
    DNA is going to be represented by a class:
      - constructor: takes a string that represents a strand of DNA
      - hammingDistance: takes a string that represents a strand of DNA and returns the hamming distance

  DATA STRUCTURES:  possibly arrays for the DNA sequence

  ALGORITHM
    DNA is going to be represented by a class:
      - constructor: takes a string that represents a strand of DNA and saves it for later use
      - hammingDistance: takes a string that represents a strand of DNA and returns the hamming distance
          turn both the `originalSequence` and the given sequence into arrays, split on characters
          Swap the values so that the shortest length array is in the first variable
          iterate over the shortest-length array
            if there is a difference between the current character and the character in the second array in the current index
              push it onto a difference array
          end iteration
          return the length of the difference array
*/

const dnaClosure = (function() {
  let sequence;

  return class DNA {
    constructor(DNASequence) { sequence = DNASequence }

    hammingDistance(comparingSequence) {
      let seq1 = sequence.split('');
      let seq2 = comparingSequence.split('');

      if (seq1.length > seq2.length) { [seq1, seq2] = [seq2, seq1] }

      const diffSequence = seq1.filter((elem, idx) => {
        if (elem !== seq2[idx]) return elem;
      });

      console.log(diffSequence);

      return diffSequence.length;
    }
  }
})();

module.exports = dnaClosure;