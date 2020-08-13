# Arrays

GOALS:
Arrays
Reference types
Array/Object methods

ARRAYS: ordered collection of values. All primitive data types are arranged in arrays for storing.
examples: list of comments in a post; levels in a game; list of songs in a playlist.
One can store different data types in array, not only strings or numbers. It can be combined.
Array are indexed same as strings. Every data value has it number from 0 to n.
Array is declared with sqare brackets [] and also passed data as new Array(1,2,3,1,"didko")
In comparison to the stings, arrays are mutable: they can be changed with different methods.

Arrays has 12 main methods: concat, indexOf, include, push, pop, unshift, shift, length(object), slice, splice, join, reverse, sort.

EX:
let students = ["Paul","22",14,"Sofia",null,NaN]
students.length // 'Paul'

Modifyng arrays: directly, when you know array length and value places.
let myShoppingList = ["Paper","Potato","Cheese","water"]
myShoppingList[0] = 'Gas' // let myShoppingList = ["Gas","Potato","Cheese","water"]
it is possible to change the item, in this case I need to know the item number in the row.
Or it is also possible to add an item to the list. In this case I need to know the length of the array.
myShoppingList[4] = 'milk' or
myShoppingList(myShoppingList.length) = 'milk'

Array methods:
push() - add value to the end
pop() - remove value from the end. If I remove all items, and the array becomes empty, it return undefined. one do not need to specify the item, it just removes the last one.
unshift() - add value to the start. if several values are added, we get the list at the start, in a different way if we add the values separately.
shift() - remove value from the start

ex:
myShoppingList.push("wine");
myShoppingList.pop();
myShoppingList.unshift('sugar');
myShoppingList.shift(); // removes 'sugar' and returns it back to me.

More Array Methods:
concat - merge two arrays into one.
let array1 = ["Paper","Potato","Cheese","water"]
let array2 = ["Paul","22",14,"Sofia",null,NaN]
let array3 = array1.concat(array2)

includes() - method returns true or false if the value is present in the array
ex: array3.includes("Paul") // true
array3.includes("Paul",5) // false, because Paul is on place #4 and after 5 there is no Paul.

indexOf() - search for a value and return the index where it is. If it is not present, returns -1. In the same way it can search after the specifed index.

join() - combines all elements of the array into one single string. However it does not change the array itself. it is possible to join items with some symbol specified in brackets.

reverse() - returns same array in a back order, and actually changes the order in array.

slice(start, stop) - takes a portion of an array and creats a new array. But it does not delete the values in the initial array. We can use negative numbers to splice in reverse.
ex: let shopping = array3.slice(0,4)

splice(startItem, deletCount, "insert item") - adds, inserts, removes, updates elements. usually in the middle of an array.
let addDeleteIndex = array.splice(startPlace[, deletCount[, item1[, item2[]]]])

inserting/adding in the center of an array w/Splice
let animals = ["shark", "salmon", "whale", "bear", "lizard","tortoise"];
animals.splice(1,0,"pig");

removing two first items w/Splice
let animals = ["shark", "salmon", "whale", "bear", "lizard","tortoise"];
animals.splice(0,2);

replacing last item w/Splice
let animals = ["shark", "salmon", "whale", "bear", "lizard","tortoise"];
animals.splice(5,1,"tiger","aligator");

SORT
sort() - is good to arrange array items(strings) by name.
but for numbers it is not possible to use, only with the use of functions.

// REFERENCE TYPE VARIABLE
Value type variable - we create first when we save a primitive data type with a variable (let or const). In this case information is stored in memory, and it is only applicable for primitive data types.

let nums = 45;
let otherNums = nums;
// nums -> 45
// otherNums ->45

nums= 44
// nums -> 44
// otherNums ->45 - still remains the same, because the number data is stored in memory.

Reference type - with Array storing is different. Variable when created, does not store data in memory, it stores the link/reference to the data in memory - it is called Reference Type Variable. So in this case, when saving an array we save the link and reuse the link to the memory storage.

let nums = [45];
let otherNums = nums;

// nums -> [45]
// otherNums ->[45]

nums = [44]
// nums -> [44]
// otherNums -> [44]

CONST with Arrays
it is impossible to change const variable. However it is possible to change the array created with const variable. I happens due to changing the data, not the reference.

const is used with arrays more often than let.

NESTED ARRAYS
EX of nested array:
const animalPairs = [
[ 'doe', [ 'buck', 'stag' ] ],
[ 'ewe', 'ram' ],
[ 'peahen', 'peacock' ]
];

//To access 'ram'
animalPairs[1][1];

//To access 'stag'
animalPairs[0][1][1];

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'. idk.

however the example with animalPairs is not really relevant, because in array the order of adding values is important.
