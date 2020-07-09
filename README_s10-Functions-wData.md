# Apply Functions to Collections of Data

Array Callback Methods

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
