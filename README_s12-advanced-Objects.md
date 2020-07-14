# Objects

secret life of objects:

- add methods to objects
- use new object shorthand
- use computed properties
- understand prototype
- explaing how the fuck this works

// SHORTHAND SYNTACX

- when we combine an object from several calculated variables we can create array but input only variable names. They will automatically create same names for the keys and provide calculated valuse.

EX:
let arr = [2, 3, 4.5, 1.2, 2.5, 4.51, 6.12];

const getStats = (arr) => {
const max = Math.max(...arr);
const min = Math.min(...arr);
const sum = arr.reduce((sum, r) => sum + r);
const avr = sum / arr.length;
return {
max: max,
min: min, // this is how it should look like
sum: sum,
avr: avr,
};
};

const stats = getStats(arr);

// Computed properties

- computed properties are just an improvment for object literal syntax, where we can add a property with dynamic key.
- it is for the keys in objec key-value pairs, they are treated as a stings and putting them into square brackets we me them checkable.

ex:
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

if i want to have an object with a dynamic key, I have to set.

V1
const team = {
role: person, // we get {role: Jools Holland}
}
// in this case person is evaluated and replaced with the value, but not the role. It is turned into a string, it is not checked if it is a variable.

V2
const team = {};
team[role] = person;

V3
computed properties use
const team = {
[role]: person,
}

// ADDING METHODS TO OBJECTS

- we store function in arrays (need to refresh)
- we can store function as argruments
- we can return them from a function
- finally we can store them in objects
- why? the simplest reason just to store them together.

EX:
const add = function (x,y) {
return x + y
}
const math = {
add
}
// we can now use the method
math.add(2,3) // this results in adding 2+ 3= 5;
// or even more common to add functions into the function
const math = {
add: function(x,y){
return x+y;
},
multiply: function(x,y){
return x\*y;
},
}

// Shorthand for adding methods into object

- it is possible to add a nested function into an object with shorter syntaxis.
- like in example below. We do not write key and word 'function'.
- still this objects works as before.

const auth = {
array: [1, 3, 4, 5, 2, 5],
login() {
console.log('You are logged in');
},
logout() {
console.log('Your are logged out');
},
};
// run function
auth.logout()
auth.login() // as method

// KEYWORD THIS

- 'this' is a reference for current execution scope or the 'window',
- Window is the global scope of our browser
- when we add a function (with function declaration or var) it is added to the window object
- but let and const do not add functions into 'window'
- this is useful when we work with methods in the objects. it refers to the object where the method is used.

EX: now we have an object with selfcontained world, values functions etc.
const person = {
name: 'Cherilyn',
last: 'Sarkisan',
nickName: 'Cher',
fullName() {
const { name, last, nickName } = this;
console.log(`${name} ${last} AKA ${nickName}`);
},
};
// run function
person.fullName(); // returns whole object back.

// THIS: INVOCATION CONTEXT (how you execute the code or run the function)

- the value of this depends on the invocation context of the function it is used in. The value is changed based on how the function is executed.
- if this refered to as a part of method --> person.fullName() // this will refer to the object of the function.
- if we just use this and refer to --> person // this refers to global object which is window.
- arrow function does not get their own version of this.
