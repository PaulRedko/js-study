// we set a number
// we ask user to guess a number with a prompt
// the logic evaluates if the user guessed or not
// logic answers was the quess right

let inMindNum = 5;
let guessNum = parseFloat(prompt('What is your number?'));

// if (guessNum !== inMindNum) {
//   document.write('Wrong guess! Refresh and try again! ');
// } else {
//   document.write('Hooray! You are right!');
// }

guessNum !== inMindNum
  ? document.write('Wrong guess! Refresh and try again! ')
  : document.write('Hooray! You are right!');
