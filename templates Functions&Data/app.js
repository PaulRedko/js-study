// forEach
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// nums.forEach(function (n) {
//   console.log(n * n);
// }); // prints squares for each number in the descending order.

// function printQuadruple(n) {
//   console.log(n * 4);
// }
// nums.forEach(printQuadruple);

// const carPricesUsd = [6300, 6400, 6500, 6800, 7000, 7500];
// const carPrices = carPricesUsd.map(function (usd) {
//   let exchangeCourse = 26.7;
//   return {
//     usdP: usd,
//     uahP: usd * exchangeCourse,
//   };
// });

// const carPricesUsdObject = [
//   {
//     usd: 6300,
//     uah: 169470,
//   },
//   {
//     usd: 6400,
//     uah: 172160,
//   },
//   {
//     usd: 6500,
//     uah: 174850,
//   },
//   {
//     usd: 6800,
//     uah: 182920,
//   },
//   {
//     usd: 7000,
//     uah: 188300,
//   },
//   {
//     usd: 7500,
//     uah: 201750,
//   },
// ];

// carPricesUsdObject.forEach(function (price, idx) {
//   console.log(idx, price);
// });

// // function printDollarUah(s) {
// //   console.log(s * 26.9);
// // }
// // carPricesUsd.forEach(printDollarUah);

// function num(callback) {
//   console.log('Try with callback function!!!');
// }

// const texts = ['wow', 'dos', 'fiff', 'sixes'];
// const caps = texts.map(function (t) {
//   return t.toUpperCase();
// });

// const nums = [20, 8, 17, 36, 5, 40, 23, 92, 1];
// const doubles = nums.map(function (f) {
//   return f * 2;
// });

// const numDetail = nums.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0,
//   };
// });

// const words = ['asap', 'byob', 'rsvp', 'eob', 'diy'];
// const wordsCap = words.map(function (w) {
//   return w.toUpperCase().split('').join('.');
// });

// Arrow functions
// const square = function (x) { // old
//   return x * x;
// };
// const square = (x) => {
//   return x * x;
// };

// const isEven = (num) => {
//   return num % 2 === 0;
// };

// const multiply = (x, y) => {
//   console.log(x * y);
// };

// const square = (n) => n * n;

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const doubles = nums.map(function (n) {
//   return n * 2;
// });

// const doubles

const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];
const triples = nums.map(function (n) {
  return n * 3;
});

const triples1 = nums.map((n) => n * 3);

const parityLIst = nums.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
});
const parityLists2 = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

const parityList3 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
// ternary operator
