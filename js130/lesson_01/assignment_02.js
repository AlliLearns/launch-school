// Implement forEach
function forEach1(array, callback) {
    for (let index = 0; index < array.length; index++) {
      callback(array[index]);
    }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));


// After adding optional `thisArg` context
function forEach2(array, callback, thisArg) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index]);
  }
}


class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem); // errors without context

forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem); // errors without context



// After adding optional `index` and `array` arguments
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, arr);
  }
}

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});