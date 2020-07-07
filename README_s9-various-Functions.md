#Advanced Functions

- Scope
- Higher Order Functions
- Pass functions as callback

Scope is a variable visibility. The location where a variable is defined dictates where we have access to that variable.

function helpMe(){
let msg = "I am on fire!"
msg; // the msg scoped to the help me function.
}
msg; // not defined over the helpMe().

- variable is scoped into function, and if it is the case it cannot be used outside of the function.
- And it is possible to use variable of the same names under different functions.

Block Scope

- blocks in JS are marked with curly braces, this is the basic scope for a function.
- let and const have different scoping rules in comparison to var: let and const are limited with the block they are included in, while var is not limited.
- it is possible to redeclare var, while it is not possible to do the same with let and const.

Lexical Scope

- it means that if we have a nested function the variable defined in the scope will be unavailable out of this scope, but can be accessed in the nested functions.

function outer(){
let movie = 'Die Hard 2';
function inner(){
console.log(movie.toUpperCase())
} inner();
}
// and after the above, I call outer() function and get an expected response.
// it is not important now, but later for React it will become important to know and apply
