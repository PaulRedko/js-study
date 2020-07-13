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
