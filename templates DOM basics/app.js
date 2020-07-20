// const liS = document.querySelectorAll('li');
// const colors = ['red', 'yellow', 'blue'];
// liS.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

// const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.opacity = '50%';
// todo.style.textDecoration = 'line-through';

//Create element
// document.createElement('h2'); // created element
const newH2 = document.createElement('h2'); // made it as a var
// add content
newH2.textContent = 'My best day and week in life';
// apply styles
newH2.classList.add('special');
// place on the page with append or prepend
const sect = document.querySelector('section');
sect.appendChild(newH2);
