const btn = document.querySelector('#clicker');

btn.addEventListener('mouseover', function () {
  const h = Math.floor(Math.random() * window.innerHeight);
  const w = Math.floor(Math.random() * window.innerWidth);
  btn.style.top = `${h}px`;
  btn.style.left = `${w}px`;
});
btn.addEventListener('click', function () {
  btn.innerText = 'You got me!';
  document.body.style.backgroundColor = 'green';
});
