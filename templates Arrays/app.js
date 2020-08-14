//1***printReverse*** - resolved with forEach and for loop
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// function printReverse(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log('//' + arr[i]);
//   }
// arr.reverse().forEach(function (i) {
//   console.log('//' + i);
// });
// printReverse();

//2***isUniform*** - done with video help. forgot how to assign variable to an array value.
// function isUniform(arr) {
//   let first = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }

//3 ***sumArray*** - done with forEach and video help. For loop was a bit more complicated for me. I have included undefined(the last number of the array and it spitted into me NaN).
// function sumArray(arr) {
//   let sum = 0;

// solution 1
// arr.forEach(function (element) {
//   sum += element;
// });

// solution 2
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//4// max - didnt know what to do. especially in equation with max = arr[i];
//solution 1
// function max(arr) {
//   let max = arr[0];
//   arr.forEach(function (i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   });
//   // solution 2
//   // for (let i = 1; i < arr.length; i++) {
//   //   if (arr[i] > max) {
//   //     max = arr[i];
//   //   }
//   // }
//   return max;
// }

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

// const food = ["water", "milk", "bananas"];
// food.splice(0, 0, "pork", "floar");
// console.log(food.sort());

// const animalPairs = [
//   ["doe", ["buck", "stag"]],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// //To access 'ewe'
// animalPairs[1][0];

// //To access 'buck'
// animalPairs[0][1][0];

// //Updating a sub-array:
// animalPairs[0][1].push("hart");
// //apparently some people call male deer 'harts'.  idk.

// animalPairs[2].splice(1, 0, "peafowl")

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
function myForEach(arr, func) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // execute function
    func(arr[i]);
  }
}
