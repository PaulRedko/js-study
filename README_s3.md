Boolean: 
just words true / false. No quotes needed to show booleans.

In JS booleans can change type in variable: from number to boolean or string. it is not a good idea and many programmers do not like it due to this fact. 

String:
we wrap them in quotes. 
what is the limit?

typeof <smth> - operator to check the type of data. you dont need to use paranthes. 

concatenating - combining two strings. 

strings are indexed. Every letter has its number, and the row starts with 0. 

property: every sting has a property. 
"hello".length // 5 - it gives the number of letter in the sting. 

if i want to select certain letter in the string i use square brackets [], and identify which letter to use. 

undefined - means that there is no such data in a string.

it is not possible to change one letter in a sting. 

STING METHODS:
sting.method() - we need to have closing brackets, without 
them it will not work. 
stings are immutable. So with sting methods acutal stings don't change. 
use MDN website to check correct use of the methods.
msg.toLocalUpperCase()
.trim - removes spaces before and after the quotes in a sting.
.indexOf(arg) -> 
let tvShow = "ChasTime";
tvShow.indexOf("Time"); 
this method is case sensitve. 
if there is no such letter in the string it retund -1.
.slice()
'$50.99'.slice(1) // '50.99'.
.replace(fist word, replacer). but it only replaces the first occurance. 
"my life if good".replace('good', 'okay') // 'my life is okay'

String escape characters or escape notations: 
\' -> 'he said he ain\'t happy'
\n -> new line for the text // "hello\nGoodbye"
\\ -> returns one backslash

String embeded expressions:
`` - backticks and `${}` (dollar sign and curly brackets)
`you owe me ${100+223}`
let animal = 'pig'
let sound = 'oink'
`${animal} says ${oink}` // "pig says oink"

Null / underfined
Null: intentional absense of smth, when you tell that it is nothing.
Undefined: does not have the value assigned to variable. 

Math Object:
Math.PI
Math.round(1.9) // 2
Math.floor(1.2324) // 1 
Math.pow(7,2) // 49
Math.floor(Math.random() * 205) + 1;

parseInt - it converts numbered sting into integer. need to use with all numbers. it selects numbers from beginining. 
parseFloat - it converts numbered sting whole decimal number 

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