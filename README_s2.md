# js-study

ECMA - is the standards organisation, which updates JS. ECMAScript is the section and it has different version based on the year. 

Key JS concepts:
1. apply JS via console
2. 5 JS primitive data types
3. define and write var or variables: used to store things
4. write code with the use of console.log, alert, prompt
5. ??

Primitive Datatypes: numbers, string (words), booleans, undefined, null.

Numbers (only one type for all numbers): full, fraction, negative. Numbers types are all live under the same category of numbers. We can do all number operations in console. Modulo: shows the reminder for divided numbers, is marked by % between numbers. 25%5 // 0. Exponents: marked with double **.  NaN: not a number with a numeric value, for example 0/1 is NaN; case sensitive. 

Strings: text. All data in quotes is a single string: "hello world!", "22". We can add words combinations.  

Escape character: use backslash before necessary symbol. "she said \"goodbye!\""
[2] - spits back the second number in a string, starts counting with 0; 
.length - counts the length of the string from 1 to x.

Booleans: true / false 

Undefined: we set a var for age, but never add value. Like var age; And that is it no value added. 
Null: 

var currentPlayer = "paul"; 
currentPlayer = null // game over for the player. 

Variable: 
V1: common concept for all programming languages, basically it is a container with name to store information. The idea here is not only to name, but also to store under clear naming the naming which has real sense. 
V2: 
.1 we add the value: var age = 22;
.2 change the value:  age = age - 1
V3: Reserved words for variables: let, document, var, 
V4: there is a convention to use camel cases for variable. 
V5: it is impossible to redeclare a variable. the variable can be changed only without var/let: age = age +1 or age += 1;

var yourVariableName = yourValue;

JS Methods: 
//alert - popup a message to user.
//prompt - collect data from user. 
var userName = prompt("what is your user name?")
//console.log - message to console
//clear() - clear console
two slashes are comments in JS. Commands after them will not be executed. 

Objectives: 
1. evaluate complex logical expressions.
2. write three part conditional statements: with if logic
3. write JS While loops and For loops
4. translate from For to White loop or vice versa

Boolean logic:
true == "1" // true
0 == false // true
null == undefined // true
NaN == NaN // false

Logical operators: 
AND &&
OR ||
NOT ! 

Truthy or falsey valuse
Falsy: false; 0; ""; null; undefined; NaN.
all the reset is Truthy.
