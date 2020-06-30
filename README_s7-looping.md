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
    console.log("   Inner loop:", j)
    };
} 
