//THE OLD WAY
function multiply(a, b) {
  if (typeof b === 'undefined') {
    b = 1;
  }
  return a * b;
}

//NEW WAY
function multiply2(a, b = 1) {
  return a * b;
}

function greeting(name, greet = 'Hey') {
  return greet + ' ' + name;
}

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

//SPREAD
// const nums = [1, 5, 22, 33, 12, 99, 10093];
// console.log(...nums);
// Math.min(...nums);

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
const numRanking = {
  rank1: 345,
  rank2: 50,
};
const qualitRanking = {
  isGood: 'yes',
  isReal: 'yes',
  isHappy: true,
};

const ranking = {
  ...numRanking,
  ...qualitRanking,
  justRank: 20,
};
