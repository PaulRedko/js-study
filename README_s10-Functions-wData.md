# Apply Functions to Collections of Data

Array Callback/Build-in Methods

- callback functions are essential for JS and they are widely used.

Goals:

- use the new arrow function syntax (shorter syntax)
- understand the methods:
  ++ forEach
  ++ map
  ++ filter
  ++ find
  ++ reduce
  ++ some
  ++ every

forEach()

- accepts a callback function. Calls the function once per element in the array.
- forEach is similar to for loops, but it only passes idx of the array element on every request, event if it is not there.

const nums = [9,8,7,6,5,4,3,2,1];
nums.forEach(function(n){ // anonymos function.
console.log(n\*n)
});
// prints squares for each number in the descending order.
// it is very similar to for loop.

map()

- is used to create a new array out of exsisting array, manipulating with its portions

const texts = ['wow', 'dos', 'fiff','sixes'],
const caps = texts.maps(function(t){
return t.toUpperCase();
})

- map is sometimes can be replaced by for loop, when it is about simple number functions. If it needs to have additional manipulations, than only map is applicable.

const words = ['asap', 'byob','rsvp','eob','diy'];
const wordsCap = words.map(function(w){
return w.toUpperCase();
})

- map is similar to forEach, but forEach does not store the array or change it, it only retrieves information. map() stores into array.

Arrow functions

- different simplified symantics of the function. they work the same way, but they are shorter.
- different behaviour with this method.
- rules: if there is only one parameter, we can omit brackets: const square = f => {return f\*f};
- rules 2: if we need to pass empty parences, we need to add them empty, we cannot omit them
  // const square = function (x) { // old
  // return x _ x;
  // };
  const square = (x) => {
  return x _ x;
  };

Arrow functions: implicit return

- allows to write even shorter arrow functions without return statement: in case one have single return function one can write parenthes instead of curly braces.

const square = n => (
n \* n
)

- implisit return can even be shortened to:
  const square = (n) => n \* n;
- in the above case we add parenthies to show that whole array or expression are connected to the function expression. Parenthes are used to show grouping or connection.
- if there are several expressions in parenthes, js will not know what to return, hence we need to specify.

find()

- find method finds and sends back the requested value. If there are several same values in the array it sends only the first one.
- find works the same way as for loop, it checks every value till finds the requested value.
- find is good to find based on ID. Like deleting a certain post.

let movies = [
'Die hard',
'Die hard 2',
'Terminator',
'Hangover',
'Mrs. Doubtfire',
'Mr. Deeds',
];

const movie = movies.find((movie) => {
return movie.includes('Terminator');
});

filter()

- creates a copy of an array values based on a given requiremnts/filter.
- it filters through an array arr.filter( specified function of filtering)

const nums = [8, 7,8,9,2,3,4,5,6,7,9,1,2]
const odds = nums.filter( n => {
return n % 2 === 1;
})

Every and Some

- boolean methods
- every verifies if all values have same criteria? If they have, it returns true, if one does not have - false.

const words = ['dog', 'cat', 'dig', 'rat', 'log','bag', 'wag'];

const is3Letters = words.every(w => w.length() === 3 );

- some - checks the same, but returns true if there is at least one element that has the feature.

words.some(word => word[0] === 'c');

- in arrays .length is a property (does not need parenthies for an argument) the rest are array methods.

Sort // arr.sort(compareFunc(a,b))

- if compareFunc(a,b) returns less than 0 - sort a before b.
- if compareFunc(a,b) returns 0 - leave unchanged order.
- if compareFunc(a,b) returns more than 0 - sort b before a.

* converts all array values into strings and arrange them alfabetically by the first number (not actual value).
* to add actual comparison we can pass function compare(a,b) and specify the method of comparison. If a - b = ascending order; b - a = descending order. Equal values will not change
* sort changes the order in an array. Once we apply two contrary functions as below they refer to the last saved array, which has descending order. We need to add slice() method, so that create a different array.

const prices = [20, 50, 33, 799, 14, 900, 3120, 1450,3]
prices.sort()
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

const ranking = books.sort((a, b) => a.rating - b.rating); // we refer to exact place (rating value) in the objects of the array.

reduce()

- build in array method, as all in this section
- this method takes an array of values and reduces them to a single value (max value, min value)
- it is called reduce because we boiling down/reducing to the first parameter - accumulator.

[3,5,7,9,11].reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 10) // if passing the number at the end(second argument), total will add to the number.

Callback // Accum // CurrentValue // return
firstCall // 3 // 5 // 8 // on the first call it passes first current value first
secondCall// 8 // 7 // 15
thirdCall // 15 // 9 // 24
fourthCall // 24 // 11 // 35

Reduce for Tallying (podschet, or counting)

- we can count number of votes or items in the strings.
- we use reduce and add compare and add logic: is this item already in the list? if yes, add one and return total, if not, add one.
