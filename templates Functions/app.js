// function grumpus(){
//     console.log("leave me alone!");
//     console.log("I am so tired, I need some rest and space, and fresh air!");
//     console.log("Leave me! ALONE!")
// }

// let repetition = 0;
// for(let i = 0; i < 22; i+=2){
//     grumpus();
//     repetition += 1;
// }
// console.log(repetition)

// dicing roll function

// function rollDie(){
//     let roll = Math.floor(Math.random()*6+1);
//     console.log(`Rolled to ${roll}`)
// }

// function newRollDies(numRolls){
//  for(let i = 0; i < numRolls; i++){
//     rollDie();
//  }
// }

// function helloW(website) {
//     prompt(`Add the website name: ${website}`)
//     console.log(`Hello World on ${website}`);
// }
// helloW();

// function square(num){
//     console.log(num*num);
// }

// function devide(x,y){
//     console.log(x/y);
//     return x/y
// }

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// //declare
// function isValidPassword(pass, userName) {
//   // SOLUTION 1 //
//   // if(pass.length < 8) {return false};
//   // if(pass.indexOf(' ') !== -1) {return false};
//   // if(pass.indexOf(userName) !== -1){ return false}
//   // return true;
//   // }

//   // SOLUTION 2 //
//   //   if (
//   //     pass.length < 8 ||
//   //     pass.indexOf(' ') !== -1 ||
//   //     pass.indexOf(userName) !== -1
//   //   ) {
//   //     return false;
//   //   }
//   //   return true;
//   // }

//   // SOLUTION 3  - VARIABLES //
//   //   const tooShort = pass.length < 8;
//   //   const hasSpace = pass.indexOf(' ') !== -1;
//   //   const similaName = pass.indexOf(userName) !== -1;
//   //   if (tooShort || hasSpace || similaName) return false;
//   //   return true;
//   // }

//   // SOLUTION 3.2  - VARIABLES //
//   const tooShort = pass.length < 8;
//   const hasSpace = pass.indexOf(' ') !== -1;
//   const similaName = pass.indexOf(userName) !== -1;
//   if (!tooShort && !hasSpace && !similaName) return true;
//   return false;
// }

// //run
// isValidPassword('PbaPas!321', 'PbaPas!321');

// comment on multiple solutions. We have more than three types of solutions. All of them are valid and working and good.
// Firstly and the most importantly, we need to consider not the shortest solution, but the most clear in terms of what is happening.

// function average(array) {
//   let aveSum = 0;
//   for (let i = 0; i <= array.length; i++) {
//     aveSum += i;
//     // aveResult = aveSum / array.length;
//     // return aveResult;
//   }
//   let aveResult = aveSum / array.length;
//   return aveResult; // not working
// }

// run
// average([1, 23, 12]);

// let total = 0;
// function ave(arr) {
//   for (let n of arr) {
//     total += n;
//   }
//   return total / arr.length;
// }
// run
// ave([1, 23, 12]); // 12 works correctly.

// pangram - a sentance that contains all letters of alfabet.
// ex: the five boxing wizards jump quickly.

// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!lowerCased.includes(char)) {
//       // this solution make the code cleaner.
//       return false;
//     }
//   }
//   return true;
// }

// V1 getCard() function - myapproach
// write getCard() function which returns a random playing card object.
// let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let suit = ['clubs', 'spades', 'hearts', 'dimonds'];
// function getCard() {
//   for (let oneValue of value) {
//     console.log(oneValue);
//   }
//   for (let oneSuit of suit) {
//   }
// }

// return getCard() {
//   value: oneValue,
//   suit: oneSuit
// };

// V2 getCArd() from Colt
// function getCard() {
//   const values = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
//   ];
//   const idx = Math.floor(Math.random() * values.length);
//   const value = values[idx];
//   const suits = ['clubs', 'spades', 'hearts', 'dimonds'];
//   const idy = Math.floor(Math.random() * suits.length);
//   const suit = suits[idy];
//   return {
//     value: value,
//     suit: suit,
//   };
// }
// V3 from Colt - VERSION TWO getCard() - code review

function pick(arr) {
  // return random element from arr.
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['clubs', 'spades', 'hearts', 'dimonds'];
  return { value: pick(values), suit: pick(suits) };
}
