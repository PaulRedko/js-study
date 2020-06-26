// let animals = ["shark", "salmon", "whale", "bear", "lizard","tortoise"];
// animals.splice(5,1,"tiger","aligator");

// let numbers = [12,78,1121,541,]

// console.log("  ******  ")
// console.log("  ******  ")
// console.log("  ******  ")
// console.log("BIG ANIMALS LIST!")
// console.log("  ******  ")
// console.log(animals.reverse().join(" - "))
// console.log(numbers.join(" - "))
// console.log("  ******  ")

// let nums = [42];
// let otherNums = nums; 

// console.log(nums,otherNums);

const food = ["water", "milk", "bananas"];
food.splice(0,0,"pork","floar")
console.log(food.sort());

const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.

animalPairs[2].splice(1,0,"peafowl");