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
document.createElement('h2'); // created element
const newH2 = document.createElement('h2'); // made it as a var
// add content
newH2.textContent = 'My best day and week in life';
// apply styles
newH2.classList.add('special');
// place on the page with append or prepend
const frm = document.querySelector('form');
frm.appendChild(newH2);

// const imag = document.createElement('img');
// // https://images.unsplash.com/photo-1529245814698-dd66c442bfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80

// imag.src =
//   'https://images.unsplash.com/photo-1529245814698-dd66c442bfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

// const ul = document.querySelector('ul');
// ul.prepend(imag);

// function nameAge(name, age) {
//   document.write(`<br> Hello, ${name}. Are you ${age}? <br>`);
// }
// nameAge('Paul', 38);
// nameAge('Sofia', 5);
// nameAge('Inna', 47);
