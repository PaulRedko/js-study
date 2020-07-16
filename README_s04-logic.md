# Basic logic is everywhere.

- is something valid?
- if I select something, what I can do?

Section goals:

1. understand comparison operators
2. write conditionals
3. work with boolean operators

Comparisons: less and greater

> // greater than -> retuns true or false answer, a boolean.
> < // less than
> = // greater than or equal
> <= // less than or equal

"hello".length >= "Hello".length

Comparisons: equality
== // equality of value, but not type. it coerses both values to the same type and compares them. this may lead to some unexpected results. In this case Null and undefined are considered equal, same as 1 and "1".
!= // not equal
=== // strickt equality
!== // strickt nonequality
\*(one equal is used to assign the value)

REPL - read evaluate print loop. This is what we do in developer counsel.
We cannot simply open JS file in the browser. We need to have an html file with a reference to the JS file.

Notification methods for JS, in order to get a response on our code in contrast with REPL for browser console:
console.log(“message”);
console.error(“error message!”);
alert();

Conditionals are used to make decisions. We can use comparison oprators in conditionals.
If (something) {
Run code(xxx);
}
We can add as many ‘else if’ conditionals as we want if it is reasonable. And for the error messages that are not evaluated for a condition we apply ‘else’. This one goes without condition statements in parentheses.
We can nest one conditinal inside the other.

Truthy and falsy values:
All numbers are truthy, but for 0, NaN, 0/0, empty string, which are falsy.
It can be used to check if the user is signed in, usually, it checks if a variable has any value like a number or a string. Otherwise, if it does not have any value, it fires falsy.
It is used to make conditional logic for sign in (if signed in show one message, if not ask to sign in) or for showing a button.

Logical operators:
And (&&) both sides must be true in order for the whole thing to be true. Ampersand character.
Or (||) only one side needs to be true. Pipe character.
Not (!=) it is truthy when it is not equal: !null; // true. it can be used to nagate single values and expressions.

Operator precedence:
&& operator takes precedance for ||
Let x = 7; // x == 7 || x === 3 &&& x > 10; // true, because we do && eqation first and after that ||.
“!” -> “&&” -> “||” this is the order.

Switch statement:
Is used to check one variable against many others.
Let day = 1
switch(day) {
case 1: console.log("MONDAY"); break;
case 2: console.log("TUESDAY"); break;
case 3: console.log("WEDNESDAY"); break;
case 4: console.log("THURSDAY"); break;
case 5: console.log("FRIDAY"); break;
case 6: console.log("SATURDAY"); break;
case 7: console.log("SUNDAY"); break;
default: console.log("INVALID DAY"); break;
}// output: MONDAY.
break is used to stop the code from running.

Ternary operator:
possibility to use shortcuts for IF statements in JS
Ternary is a term for three peases, and we have three parts in it
Condition ? expIfTrue : expIfFalse
let status = "online";
let color = status === "online" ? "green" : "red"
