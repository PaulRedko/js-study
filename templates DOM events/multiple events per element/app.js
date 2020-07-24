const colors = [
  'yellow',
  'red',
  'green',
  'blue',
  'indigo',
  'purple',
  'orange',
  'teal',
];

const boxes = document.querySelector('#boxes');
for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  document.body.append(box);
}
