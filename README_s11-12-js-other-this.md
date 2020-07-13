// DEFAULT PARAMETERS

- this approach allows to have a default argument, for the cases when argument was not specified.
- the old way:
  function multiply(a, b) {
  if (typeof b === 'undefined') {
  b = 1;
  }
  return a \* b;
  }

- the new way:
  function multiply(a,b = 1){
  return a\*b;
  }
- we can use array and object as a default value.
  const blah = (x,y = [1,2,3]) => {
  console.log(x,y)
  }

// SPREAD

- an iterable: array or object

- three types:
  (1) function calls,
  (2) array literals,
  (3) object literals.
  /// /// ///

  (1)

- spread allows to combine several strings or arrays into a new string or an array. To do this one need to and old arrays with three dots in front into the new array.
- spread is marked with three dots ... before parameter.
- spread makes not an array data.
- spread expands an iterable (array,string etc) into a list of arguments:
  -- Math.min(1,5,22,33,12,99,10093) - these are separate arguments /
  -- const nums = [1,5,22,33,12,99,10093] - this is a list of arguments, and Math.min will not work.
  -- in this case we use spread: console.log(...nums) and nums are treated as a separate arguments.

  (2)

- option similar to concat. It allows to make copies of arrays:
  array1.concat(array2);
- is usually used to combine more than two arrays together and to copy arrays.
- it does not allow to copy nested arrays.
- also it allows to spread a string, similar to split:
  'avberlkjs'.split('') // array
  [..."avberlkjs§"]

(3)

- copies properties from one object into object literal.
- can join several objects into one, new object.
- if there is a property that has same value, than value from the last property overwrites the first. Order is important.
- array/string can spread into an object, but not vice versa

// ARGUMENTS OBJECT

REST WITH ARRAYS

- similar to spread, uses of three dots, but works differently.
- rest combines data into array.
- it allows to pass in several arguments into funciton, like not 1-2, but unlimited amount of arguments.
- arguments object is not a thing in arrow function.

REST - old way
it works as an array, but it is not an array. -
EX:
function sumAll(...nums) { // here three dots make argument iterable.
let total = 0;
for (let n of nums) total += n;
return total;
}
sumAll(1,2,3) // 6

REST WITH ARRAYS

- also use to collect remaining arguments that passed in. it should go in as a last argument with three dots.
  EX:
  function filmName(name, secName, ...titles) {
  console.log('name', name);
  console.log('surname', secName);
  console.log('titles', ...titles);
  }
- it supports arrow funciton =>, because it makes an actual array.

DESTRUCTURING ARRAYS

- it is about unpacking an array into separate values, creating separate variables.

EX:
const raceResults = [
'Low Runner',
'Paul Red',
'Speedster Nap',
'Jared Ward',
'Glen Rupp',
'Captain Slow'
]

- if we use the syntaxis below we get three new variables based on the position in the array raceResults.
- position matters.
- it is possible to skip values with empty comma.
- and it is possible to use rest (... others)
  const [gold, silver, bronze] = raceResults;
  const [gold,, bronze] = raceResults;
  const [winner, ...others] = raceResults; // first in the array will be a winner, the rest - others.

DECONSTRUCTING OBJECTS

- similar approach, but we use value to unpack.
- it is possible to reassign new variable names, use rest operator.

EX:
const runner = {
first: 'Eliud',
last: 'Kipchoge',
country: 'Kenya',
title: 'Elder of the Order of the Golden Heart of Kenya',
};

const { first, last } = runner; // saves variables with values from the object above.
const { country: nation, title: honorific } = runner; // reassigned new variable names for the values.
const { first, last, ...other} = runner; // uses rest operator like with arrays.

DECONSTRUCTING NESTED

- it is possible to get info from nested arrays, buy using corresponding brackets and markeing the plance with commas.
- we can replace key names
  EX:
  const runner = [
  {
  first: 'Pease',
  last: 'Duke',
  country: 'Russia',
  title: 'Lower of the Order of the Golden Butt of Vlad',
  },
  {
  first: 'Paul ',
  last: 'Red',
  country: 'US',
  title: null,
  },
  {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
  },
  ];

const [, { first: second }] = runner; // we get 'Paul'

DECONSTRUCTING PARAMETERS

- this way we run function with parameters received from the object runner. And in the function itself we deconstruct parameters we want to use.

EX:
const runner = {
first: 'Eliud',
last: 'Kipchoge',
country: 'Kenya',
title: 'Elder of the Order of the Golden Heart of Kenya',
};

function print({ first, last, title }) {
console.log(`${first} ${last}, ${title}`);
}
print(runner);
