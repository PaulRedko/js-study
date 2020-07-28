// For Loops!

// print numbers between -10 and 19
// for (n = -10; n < 19; n++) {
//   document.write(n + ' ');
// }

// print all even nums from 10 to 40
// for (e = 10; e < 40; e += 2) {
//   document.write(e + ' - ');
// }

// print all odd nums from 300 to 333
// for (o = 300; o <= 333; o++) {
//   if (o % 2 !== 0) {
//     document.write(o + ' ');
//   }
// }

// print all nums devided by 5 and 3 between 5 and 50
// for (let n = 5; n < 50; n++) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     document.write(n + ' ');
//   }
// }

// Annoyoumatic app with for loops not working, it is more for array like loops.
let answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1 && answer.indexOf('yeah') === -1) {
  answer = prompt('Are we there yet?');
}
document.write('Finally, you made it!');

// for (let i = 0; i < 16; i += 8) {
//   document.write(i + ' ');
// }
// let str = 'ahceclwlxo';
// for (let i = 1; i < str.length; i += 2) {
//   document.write(str[i].toUpperCase());
// }

// while loops - Annoyomatic App
// ask user 'Are we there yet?'
// keep asking again and again till they enter yes or yeah.
// then alert 'yah, we finally made it.'

// var quest = prompt('Are we there yet?');

// while (quest.indexOf('yes') === -1 && quest.indexOf('yeah') === -1) {
//   var quest = prompt('Are we there yet?');
// }
// document.write('Yay, we finally made it!');

// quest !== 'yes' || quest !== 'yeah'
//   ? prompt('Are we there yet?')
//   : document.write('Yay, we finally made it!');

// print numbers between -10 and 19

// let num = -10;
// while (num <= 19) {
//   document.write(num + ', ');
//   num++;
// }

// print all even nums from 10 to 40
// let numEven = 10;
// while (numEven <= 40) {
//   document.write(' * ' + numEven);
//   numEven = numEven + 2;
// }

// print all odd nums from 300 to 333
// let num = 300;
// while (num <= 333) {
//   if (num % 2 !== 0) {
//     document.write(num + ' ');
//   }
//   num++;
// }

// print all nums devided by 5 and 3 between 5 and 50
// let num = 5;
// while (num < 50) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     document.write(num + ' ');
//   }
//   num++;
// }

// while loop when we start with 1 and move till 10 with +2 steps
// output 1,3,5,7,9

// let num = 1;
// while (num <= 25) {
//   document.write(num + ' ');
//   num = num + 2;
// }

// 4 8 12 16 20

// let num = 1;
// while (num <= 20) {
//   if (num % 4 === 0) {
//     document.write(num + ' ');
//   }
//   num++;
// }

// 99+1 98+1 97 96 95 94 93 92 91 90
// let num = 100;
// while (num < 50) {
//   console.log(num + 1);
//   num--;
// }
