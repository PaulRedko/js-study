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

// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';

// const team = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 2 + 10]: 'thirteen',
// };

// Adding methods to objects
// const math = {
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
//   devide: function (x, y) {
//     return x / y;
//   },
// };

// Method shorthand syntax
// const auth = {
//   array: [1, 3, 4, 5, 2, 5],
//   login() {
//     console.log('You are logged in');
//   },
//   logout() {
//     console.log('Your are logged out');
//   },
// };

const person = {
  name: 'Cherilyn',
  last: 'Sarkisan',
  nickName: 'Cher',
  fullName() {
    const { name, last, nickName } = this;
    return `${name} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(`${this.fullName()} is a person`);
  },
};
// run function
person.fullName(); // returns whole object back.
