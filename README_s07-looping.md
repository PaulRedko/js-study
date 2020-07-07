LOOPING
how do we repeat code?
It allows not to hard code something, but make it iterative, with possibility to update.

goals:
1: for loops
2: while loops
3: avoid infinite loops
4: iterate over arrays and objects

types:
for loops
while loops
for... of loop  
for... in loop

for (
[inititalExpression - variable usually called i];
[condition - condition which checks if it should be running];
[incrementExpression - what operation is done on i, usually simple math]
) {
// code to execute
}

task examples:

1. console.log numbers from 1 to 20 in every 5.
2. console.log powers of numbers from 10 to -10 in every 3.
3. console.log powers from 9 to 0 in every 1.

loops with Arrays and Objects:
const animals = ['tigers', 'lions', 'cats', 'bears']
for (let i = 0; i <= animals.length; i++){
console.log(i);
}

Nested Loops
same as we can nest arrays and objects and IF statements in themselves, we can nest for loops.

once there is a loop in another loop, inner loop will make whole calculation on every step of outer loop.

ex:
for (let i = 0; i < 11; i++) {
console.log("Outer loop:", i);
for(let j = 10; j >= 0; j -= 2){
console.log(" Inner loop:", j)
};
}

While Loops
it is similar to `if` statement but with loop.

example:
let j = 6;
while(j > 0){ // it checks here if the loop is still true and allows to next step.
j-=2;
console.log(" ",j)

while loops are used for games to allow working process till all live are used / spent.

while (livesLeft > 0)
while (!gameOver)
while (stillAlive)

EX:
let sum = 0;
let i = 0;
while (i <= 7) {
sum += i;
i++; // iterative line for the function. If we place it before sum, we launch next iteration before adding to the sum. And it answers 36, but if place after the sum update, we get 28 as expected.
}
console.log(sum); // 36

break; Can be used inside of loops to stop execution.

- it is not very common in For loops, because we already set how long should the loop run.
- if there are several nested loop, break stops only the loop where it is nested in.

EX: for (let i = 0; i < 15; i++){
console.log(i);
if (i === 12){
break;
}
}

for... of Loop
not supported in IE.

for (variable of iterable) {
statement
}

let subreddits = ['soccer', 'roku', 'streaming-TV', 'books'];

for(let i = 0; i < subreddits.length; i++) {
console.log(subreddits[i]);
}

// for ... of loop example
for(let sub of subreddits) {
console.log(sub);
}

It is good for accessing arrays.
'For... of' good in most cased, but when we need to access certain position of a string of an array. In this case conventional for loop works better.

"For... of" with Objects

it is not iterable, that is why we cannot apply same approach as in Array.

But we can loop over keys and values of an object.

Object.keys(movieReviews)
Object.values(movieReviews)

Ex:
const movieReviews = {
Ameile: 7,
"Kill bill": 8,
"Die hard": 9,
"Home alone": 5,
Alien: 9,
"Speed 5": 4,
"Scary movie": 5
}

for(let movie of Object.keys(movieReviews)) {
console.log(movie)
}

For... in Loop
for(variable in object){
statement
}

- It is usually used with objects, less convenient for arrays.
- for... in loop iterates between object.keys.
