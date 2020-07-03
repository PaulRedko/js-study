// basic training: do basic loops
// for loop

// let sum = 0;
// for (let i = 0; i <= 7; i++) {
//   sum += i;
// }
// console.log(sum); // 28

// while loop
// let sum = 0;
// let i = 0;
// while (i <= 7) {
//   sum += i;
//   i++;
// }
// console.log(sum); // 28

//for of loop
let sumFor = 0;
let nums = [1, 2, 3, 4, 5, 6, 7];
for (let n of nums) {
  sumFor = sumFor + n; // in this case we do not need to add n++ to repete operation after it has added to the sum.
}

console.log(sumFor); // 28

// // for in loop

// let sumForIn = 0;
// let nums = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
//   value5: 5,
//   value6: 6,
//   value7: 7,
// };
// for (let n in nums) {
//   sumForIn += nums[n];
// }
// console.log(sumForIn); // 28
