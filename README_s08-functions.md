# Functions

+ Functions allow to write reusable, modular code
+ we define a 'chunck' of code that execute at a later point
+ we use them all the Time 

2 step Process:
!1 define function: function functionName() {// do something}; //  word function, name of the function in camel case convention, brackets, curly brackets for execution code.  
!2 run the function. it can run one time or 100 Times. 

Methods are functions that have already been defined for us. They are a chuncks of code the accomplish certain jobs. 

Parameters or Arguments or Inputs:
Argument - is when we call the function.
Paramiter - is when we define the function, it is a place holder. 

We can write functions that accept inputs or arguments. The argument name is added into function brackets, after that we mention this placeholder in the output field, and pass this data when we call the function to run. 

Functions with multiple arguments
+ The order of parameters should match the arguments or vice versa. 
+ if the argument is missing we get NaN, because missing parameter is undefined. 

EX:
function devide(x,y){
    console.log(x+y);
}

Return Statement
+ return values are returned from the function and can be used of a fucntion or save in variable. 

+ console.log method is used for testing or checking the code, it only prints the output. Usually we use return statement to use the data. 

+ it is possible to return only one value. It can be an array or string of combined values, but not several values. 

+ return statement ends function execution - the function is done. That is why console.log will never be executed after the return. 