OBJECTS
Allows to specify label and data;

- in some languages Objects are called dictionaries.
- array is a special type of object where keys are numbers.

Object is a collection of properties, and properties have key-value pairs.
Rather than accessing data with index, we use custom keys.
Dictionary is a good example of key value pairs.
Key are automatically stored as strings in JS (but for symbols). This mean that numeric keys for data cannot be accessed directly with dot syntax. If you want to access numeric key, you need to put it in square brackets, which turn the requested number in a string:
ex:
const numbers = {
100 : "one hundred",
16 : "sixteen" ,
20 : "twenty"
}

numbers[100] // 'one hundred'
Square brackets notation allows to access numbered keys and also allows for dynamic access, as it was shown with const palette.

WE need to have qual sign, curly brackets, key, colon, value, comma, another key-value, closing curly bracket. Comma after last value is not needed.

ex:
const fitbitData = {
totalSteps : 308727,
totalMiles : 211.7,
avCalorieBurn : 5755,
avGoodSleep : '3:12',
workoutsPerWeek : '0 of 7'
};

how to access data in the object?
--1-- bracket notation similar to array
fitbitData["totalMiles"] // 211.7

--2-- dot notation
fitbitData.totalMiles // 211.7

Differences between notations:

1. not possible to use with number in the beginning
   someObject.1blah // invalid
   someObject['1blah'] // valid
2. you cannot use dot notation if the propernty has space in it
   someObjec.fav color // invalid
   someObjec['fav color'] // valid
3. square brackets allow the use of another variable or function
   let str = 'name';
   someObject.str // looks for object key;
   someObject[str] // looks for variable str

Adding or updating properties in objects:
it is done similary to viewing the data with dot or square brackets notation. The only difference, we use an equal sign to assign the value.
Ex:
const userReview = {}
userReview['paulred11'] = 'good';
userRevie.value = 5;
userRevie.value += 1;

creating Objects:
// make an empty object
const person = {}
person.name = 'Paul';
person.age = 39;
person.city = 'Kyiv'
can I add into object nested in the array?

//all at once
let person = {
name: 'Paul',
age: 39,
city: 'Kyiv'
}

//object expression
let person = new Object();
person.name = 'Paul';
person.age = 39;
person.city = 'Kyiv'

Nested Objects
we can nest objects under objects or mix them with arrays.

Comparing array/objects:
it is not possible to directly compare two arrays, becuase the comparison is done based on their address, and not actual content.

First step is to compare two array length. it will be also possible to compare arrays with loops.
