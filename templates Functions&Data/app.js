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

// const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];
// const triples = nums.map(function (n) {
//   return n * 3;
// });

// const triples1 = nums.map((n) => n * 3);

// const parityLIst = nums.map(function (n) {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });
// const parityLists2 = nums.map((n) => {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });

// const parityList3 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
// // ternary operator

// // FINDS OPERATOR
// let movies = [
//   'Terminator Die',
//   'Die hard',
//   'Hangover',
//   'Mrs. Doubtfire',
//   'Mr. Deeds',
// ];

// const movie = movies.find((movie) => {
//   return movie.includes('Terminator');
// });

// const movie2 = movies.find((m) => m.indexOf('Die') === 8);

// const nums = [8, 7, 8, 9, 2, 3, 4, 5, 6, 7, 9, 1, 2, 5];
// const odds = nums.filter((n) => {
//   return n % 2 === 1;
// });
// const odds2 = nums.filter((n) => n % 2 === 1);
// const evens = nums.filter((n) => n % 2 === 0);
// const bigNums = nums.filter((n) => n > 5);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

// const goodBooks = books.filter((n) => {
//   return n.rating > 4.3;
// });

// const fantacy = books.filter((f) => f.genres.includes('fantasy'));
// const shortForm = books.filter(
//   (short) =>
//     short.genres.includes('short stories') || short.genres.includes('essays')
// );

// const query = 'OF';
// const results = books.filter((q) => {
//   const title = q.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });

// const words = ['dog', 'cat', 'dig', 'rag', 'log', 'bag', 'wag'];

// const is3Letters = words.every((w) => w.length === 3);

// const allEndsG = words.every((word) => {
//   const last = word.length - 1;
//   return word[last] === 'g';
// });
// const cLetter = words.some((word) => word[0] === 'c');
// const allCLetter = words.every((word) => word[0] === 'c');

// const allGoodBooks = books.some((g) => {
//   return g.rating > 4.7;
// });

// const any2Authors = books.some((book) => book.authors.length === 2);

// SORT
// const prices = [20, 50, 33, 799, 14, 900, 3120, 1450, 3.99];

// const badSort = prices.slice().sort();
// const ascSort = prices.slice().sort((a, b) => a - b);
// const descSort = prices.slice().sort((a, b) => b - a);

const rankingAsc = books.slice().sort((a, b) => a.rating - b.rating); // we refer to exact place (rating value) in the objects of the array.
const rankingDesc = books.slice().sort((a, b) => b.rating - a.rating);

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

const grades = [87, 64, 96, 72, 88, 99, 73, 74, 64, 52, 31];
// const maxGrade = grades.reduce((max, currentValue) => {
//   if (currentValue > max) return currentValue;
//   return max;
// });

const maxGrade = grades.reduce((max, currentValue) => {
  return Math.max(max, currentValue);
});

const minGrade = grades.reduce((min, currentValue) => {
  return Math.min(min, currentValue);
});

const votes = [
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
];
const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});
