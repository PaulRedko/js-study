const liS = document.querySelectorAll('li');
const colors = ['red', 'yellow', 'blue'];
liS.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
});

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.opacity = '50%';
// todo.style.textDecoration = 'line-through';
