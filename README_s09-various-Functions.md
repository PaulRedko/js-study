#Advanced Functions and Variables

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
- let and const have different scoping rules in comparison to var: let and const are limited with the block they are included in, while var is not limited (explained in the topic of hoisting).
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

Function expressions

- in JS functions are objects. it means that they can be stored in variable.
- function expression is a different syntax of defining the function. such function can be anonamous(w/o name) or can have names.
- as long as function are objects, we can store that in array and apply loops and automate them.
- based on the feature we can create own methods: we create variable with object and function as a value in the array. and apply variable.key(arg) to implement

EX1:
const square = function (num){ // this is anonamous function, without name. function expression
return num\*num;
}
square(9);

function power(n) { // and this function is named. function statement.
return n\*n;
}
power(9)

// basically above are the same functions. we can use console.dir(function) to get proof about the origin of the functions.

EX2:
function add (x,y){
return x+y;
}
const substract = function(x,y){
return x-y;
}
function mutiply (x,y){
return x\*y;
}
const divide = function(x,y){
return x/y;
}

const operate = [add, substract, multiply,divide]

Functions as Arguments

Higher Order Functions: are the functions that operate on/with other functions. They can: accept other functions as arguments and return a function.
// EX: FUNCTION AS AN ARGUMENT
function cryThreeTimes(f) {
f();
f();
f();
}

function cry() {
console.log('Iam so sad!!!');
}
function rage() {
console.log('I hate you all!!!');
}

Functions as Return Values

- in this case function returns other function and executes it. So it is a kind of function inside of function.
- (!) it is worth to play and remind this topic to myself in a while. Almowst clear but do not know how to apply it.

EX:
function multiplyBy(num){
return function (x) {
return x \* num;
}
}
EX2:
function makeBetweenFunc(x, y) {
return function (num) {
return num >= x && num <= y;
};
}

makeBetweenFunc(3, 15);
const isChild = function (num) {
return num >= 3 && num <= 15;
};

isChild(17);

Callback Functions

- a callback function is a function passed into another function as an argument, which is than invoked inside the outer function.
- there are build in functions that require to pass arguments:
  Ex1:
  function grumpus(){
  alert("Go AWay!!! Otebites'")
  }
  setTimeout(grumpus, 5000)
  // in this build in function setTimeout we pass arguments on the message(or other function to implement and time when is should appear);
  EX2:
  setTimeout(function () {
  // in this case we add anonymous function, because we do not plan to repeat it somewhere.
  alert('welcome!');
  }, 2000);
  EX3: we use anonymous function inside a different function.
  const btn = document.querySelector('button');
  btn.addEventListener('click', function () {
  alert('Why havae you clicked me!!??');
  });

EX0:
function callTwice(callback);{
callback();
callback();
}
function laugh() {
console.log("hahahahahahahahhah!");
}
callTwice(laugh);

HOISTING

- JS runs code for var first and after that runs for var value and other commands. Such behaviour is called hoisting.
- that is why: make sure that you declare varibale before requesting or doing anything with them.
- let / const declarations are not hoisted same as var declaration, that is why we use them instead.
- function statements are hoisted
- function expressions are not hoisted
