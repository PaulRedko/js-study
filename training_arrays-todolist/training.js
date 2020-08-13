// ask what would you like to do?
// new - prompts to create a new item
// list - prints all items in console
// quit - stops the app

let answer = prompt('What would you like to do?');
let toDoList = ['Make the bed'];
// let toDo = function () {
// }
// toDo();

while (answer !== 'quit') {
  if (answer === 'list') {
    console.log('************');
    listTodos();
  } else if (answer === 'new') {
    addTodo();
  } else if (answer === 'delete') {
    // ask for index
    deleteTodo();
  }
  answer = prompt('What would you like to do?');
}
console.log('Ok, you have quit the app!');

function listTodos() {
  toDoList.forEach(function (toDo, index) {
    console.log(`${index}: ${toDo}`);
  });
  console.log('************');
}
function addTodo() {
  toDoList.push(prompt('What task to add?'));
}
function deleteTodo() {
  let index = prompt('What do you want to delete?');
  toDoList.splice(index, 1);
  console.log('*****The List after delete');
  listTodos();
}

// FOREACH LOOP TASKS
// let colors = ['red', 'green', 'blue', 'brown', 'black'];
// let numbers = [1, 2, 3, 4,  5, 6, 7, 8, 9, 10];

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
