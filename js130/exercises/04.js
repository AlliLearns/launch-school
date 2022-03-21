/* Delegate
  Write a `delegate` function that can be 
  used to delegate the behavior of a method 
  or function to another object's method. 
  `delegate` takes a minimum of two arguments: 
  (1) the object and (2) the name of the method 
  on the object. The remaining arguments, if any,
  are passed as arguments to the object's method
  that it delegates to. 

  Note that this is not the same thing as using `bind`.
  `bind` returns a new function, whereas `delegate`
  maintains the reference. 
*/

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

function delegate(context, methodName, ...args) {
  return function() { 
    return context[methodName].call(context, ...args);
  }
}

// function delegate(context, methodName) {
//   let args = Array.prototype.slice.call(arguments, 2)
//   return function() {
//     return context[methodName].apply(context, args);
//   };
// }

// delegate the behavior
// of a method/function 
// to another object's method. 

