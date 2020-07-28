// if you are younger 18, you cannot enter
// if you are 18 to 21 you can enter, but cannot drink
// if you are 22+ you can enter and drink

let age = prompt('What is your age?');

if (age < 0) {
  document.write('This is impossible!');
} else if (age === 21) {
  document.write('Happy 21st birthday!!!');
} else if (age % Math.sqrt(age) === 0) {
  document.write('Your age is perfect square!');
} else if (age % 2 === 1) {
  document.write('Your age is odd!');
} else if (age < 18) {
  document.write('Sorry, you are under the age, you cannot enter.');
} else if (age < 21) {
  document.write('Hey, you can enter, but you cannot drink!');
} else {
  document.write('Welcome, dear friend, you can enter and drink!');
}

// switch (age enter) {
//   case underAge:

// }
