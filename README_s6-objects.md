OBJECTS 
Allows to specify label and data; 

Objects are collection of properties, and properties are key value pairs. 
Rather than accessing data with index, we use custom keys.
Dictionary is a good example of key value pairs. 
Key are automatically stored as strings in JS (but for symbols). This mean that numeric keys for data cannot be accessed directly with dot syntax.
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



