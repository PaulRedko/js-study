// Shorthand object properties

// let arr = [2, 3, 4.5, 1.2, 2.5, 4.51, 6.12];

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = Math.floor(arr.reduce((sum, r) => sum + r));
//   const avr = Math.floor(sum / arr.length);
//   // return {
//   //   max: max,
//   //   min: min,// this is how it looked like before.
//   //   sum: sum,
//   //   avr: avr,
//   // };
//   return {
//     max,
//     min, // this is how works now.
//     sum,
//     avr,
//   };
// };

// const stats = getStats(arr);

// Computed properties

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  [role]: person,
  [role2]: person2,
  [1 + 2 + 10]: 'thirteen',
};
