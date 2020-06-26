OBJECTS 
Allows to specify label and data; 

Object is a collection of properties, and properties have key-value pairs. 
Rather than accessing data with index, we use custom keys.
Dictionary is a good example of key value pairs. 
Key are automatically stored as strings in JS (but for symbols). This mean that numeric keys for data cannot be accessed directly with dot syntax. If you want to access numeric key, you need to put it in square brackets, which turn the requested number in a string: 
ex:
const numbers = {
    100 : "one hundred",
    16 : "sixteen" ,
    20 : "twenty"
    }

numbers[100] // 'one hundred'
Square brackets notation allows to access numbered keys and also allows for dynamic access, as it was shown with const palette. 


WE need to have qual sign, curly brackets, key, colon, value, comma, another key-value, closing curly bracket. Comma after last value is not needed. 

ex:
const fitbitData = { 
    totalSteps      : 308727, 
    totalMiles      : 211.7, 
    avCalorieBurn   : 5755, 
    avGoodSleep     : '3:12', 
    workoutsPerWeek : '0 of 7' 
 };  

how to access data in the object? we use dot syntax. 
fitbitData.totalMiles // 211.7

Adding or updating properties in objects:
it is done similary to viewing the data with dot or square brackets notation. The only difference, we use an equal sign to assign the value. 
Ex:
const userReview = {}

userReview['paulred11'] = 'good'
