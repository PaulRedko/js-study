const colors = [
  'yellow',
  'red',
  'green',
  'blue',
  'white',
  'purple',
  'orange',
  'teal',
];

const boxes = document.querySelector('#boxes');
for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
}
