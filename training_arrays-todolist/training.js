// ask what would you like to do?
// new - prompts to create a new item
// list - prints all items in console
// quit - stops the app

let answer = prompt('What would you like to do?');
let toDoList = [];
// let toDo = function () {
// }
// toDo();

while (answer !== 'quit') {
  if (answer === 'list') {
    toDoList.forEach(function (toDo) {
      console.log('************');
      console.log(toDo);
      console.log('************');
    });
  } else if (answer === 'new') {
    toDoList.push(prompt('What task to add?'));
  }
  answer = prompt('What would you like to do?');
}
console.log('Ok, you have quit the app!');

// FOREACH LOOP TASKS
// let colors = ['red', 'green', 'blue', 'brown', 'black'];
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     document.write(number);
//   }
// }); // inital task was with color in argument and that was confusing.

// for (i = 1; i <= numbers.length; i++) {
//   if (i % 3 === 0) {
//     document.write(i);
//   }
// }

// function printColors() {
//   colors.forEach(function (color) {
//     document.write('*****************<br>');
//     document.write(color + '<br>');
//     document.write('*****************<br>');
//   });
// }
