/*  SIMPLE LINKED LIST
  Write a simple linked list implementation. The linked list is a fundamental
  data structure in computer science, often used in the implementation of other data structures.

  The simplest kind of linked list is a singly linked list. Each element in the 
  list contains data and a "next" field pointing to the next element in the list of 
  elements. This variant of linked lists is often used to represent sequences or 
  push-down stacks (also called a LIFO stack; Last In, First Out).

  Let's create a singly linked list whose elements may contain a range of data 
  such as the numbers 1-10. Provide functions to reverse the linked list and 
  convert a linked list to and from an array.
*/

/*
  PROBLEM
    A singly-linked list that represents a LIFO is a set of objects that contain: 
      - data of the element (in this case the numbers 1 - 10)
      - a 'next' property that contains the address of the next object in the list
      - a `reverse` method that reverses the linked list references
      - a `toArray` method that converts the entire linked list to an array
      - a `fromArray` method that creates a linked list from an array

  EXAMPLES AND TEST CASES
    class SimpleLinkedList
      constructor: takes no arguments
      `size` instance method returns the length of the stack
      `isEmpty` returns whether there are any elements in the stack
      `push` instance method that takes a value and creates a new Element in the list and correctly links the Element to the prev.
      `peek` instance method returns `null` for an empty list and (returns the value of the top-most element?)
      `head` instance method returns the top-most Element. 
      `pop` instance method removes the top-most element from the stack and returns it. 
      `toArray` instance method that returns an array of the list's values
      `reverse` instance method that reverses the references in the list.
      `fromArray` static method that creates a linked list from the array provided as an argument (empty array and `null` are treated the same)

    class Element
      constructor: 
        - takes the element's value as an argument and stores it for later use
        - optionally takes the element that it is pushed on top of if it's not the first element
      `datum` instance method that returns the value of the element
      `isTail` instance method that returns whether this element is the stack's tail (the stack's tail is the bottom element)
      `next` instance method that returns the element that's below it in the stack


  DATA STRUCTURES
  ALGORITHM
    visualization: stacks point down in their references.
    class Element
      constructor(value [, next])
        store `value` for later use
        store `next` for later use, default to `null` if not provided
      end constructor

      instance method datum()
        return this Element's `value`
      end datum

      instance method next()
        return this Element's `next` reference
      end next

      instance method isTail()
        return a boolean - true if `next` is `null`, false otherwise
      end isTail
*/

