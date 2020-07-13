//THE OLD WAY
// function multiply(a, b) {
//   if (typeof b === 'undefined') {
//     b = 1;
//   }
//   return a * b;
// }

// //NEW WAY
// function multiply2(a, b = 1) {
//   return a * b;
// }

// function greeting(name, greet = 'Hey') {
//   return greet + ' ' + name;
// }

// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// };

//SPREAD
// const nums = [1, 5, 22, 33, 12, 99, 10093];
// console.log(...nums);
// Math.min(...nums); // 1

// function giveMeFor(a, b, c, d) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
//   console.log('d', d);
// }

// const colors = ['red', 'blue', 'green', 'yellow'];
// giveMeFor(colors); // I get a with an array
// giveMeFor(...colors); // I get a list a - color / /b - color etc.

// const str = 'green';
// giveMeFor(...str);

//SPREAD-array
// const even = [2, 4, 6, 8, 10, 22, 88, 24];
// const odd = [1, 3, 5, 7, 9, 11, 13, 99];

// const integ = [...even, ...odd];
// odd.concat(even);

// SPREAD-object
// const numRanking = {
//   rank1: 345,
//   rank2: 50,
// };
// const qualitRanking = {
//   isGood: 'yes',
//   isReal: 'yes',
//   isHappy: true,
// };

// const ranking = {
//   ...numRanking,
//   ...qualitRanking,
//   justRank: 20,
// };

// // REST
// function sumAll(...nums) {
//   // here three dots make argument iterable.
//   let total = 0;
//   for (let n of nums) total += n;
//   return total;
// }
// sumAll(1, 2, 3); // 6

// // rest + reduce
// function sum(...nums) {
//   return nums.reduce((total, curVal) => {
//     return total + curVal;
//   });
// }

// function filmName(name, secName, ...titles) {
//   console.log('name', name);
//   console.log('surname', secName);
//   console.log('titles', ...titles);
// }

// const multiply = (...nums) => nums.reduce((total, curVal) => total * curVal);

// DECONSTRUCTION OF Array
const raceResults = [
  'Low Runner',
  'Paul Red',
  'Speedster Nap',
  'Jared Ward',
  'Glen Rupp',
  'Captain Slow',
];

// const gold = receResults[0];
// const silver = receResults[1];
// const bronze = receResults[(2, 3, 4)];

// const [gold, silver, bronze] = raceResults;
// console.log(raceResults);
// console.log(gold);
// console.log(silver);
// console.log(bronze);

// const runner = {
//   first: 'Eliud',
//   last: 'Kipchoge',
//   country: 'Kenya',
//   title: 'Elder of the Order of the Golden Heart of Kenya',
// };

// const { first, last } = runner; // saves variables with values from the object above.
// const { country: nation, title: honorific } = runner; // reassigned new variable names for the values.
// const { first, last, ...other} = runner; // uses rest operator like with arrays.

const runners = [
  {
    first: 'Pease',
    last: 'Duke',
    country: 'Russia',
    title: 'Lower of the Order of the Golden Butt of Vlad',
  },
  {
    first: 'Paul ',
    last: 'Red',
    country: 'US',
    title: null,
  },
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
  },
];

const [, { first: second }] = runners; // we get 'Paul'

// deconsctructing parameters in objects
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

//   const fullName = ({ first, last }) => {
//   return `${first} ${last}`;
// };

function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}
print(runner); // this way we run function with parameters received from the object runner.

// deconsctructing parameters in arrays
const response = ['http/1.1', '200 OK', 'application/json'];

function parsParam([protocole, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
