
//Upon first glance, the code below looks like it should work. 
//But it throws a TypeError, saying: Cannot read property 
// 'forEach' of undefined. Why is that?


let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail


// The code above throws a type error because 
// the semicolon on line 7 is missing. 
// The code is being interpreted as an access on an empty string
// which will return `undefined`, which `forEach` can't be called on.