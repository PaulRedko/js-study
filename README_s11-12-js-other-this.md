// Default Parameters

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

// Spread

- an iterable: array or object

- three types:
  (1) function calls,
  (2) array literals,
  (3) object literals.
  (1)
- spread is marked with three dots ... before parameter.
- spread expands an iterable (array,string etc) into a list of arguments:
  -- Math.min(1,5,22,33,12,99,10093) - these are separate artuments /
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

- it works as an array, but it is not an array.
-
