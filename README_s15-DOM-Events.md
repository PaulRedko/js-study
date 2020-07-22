# DOM Events

examples:
hover
click
search
typing
drag
drop
scroll
form submission
key presses
focus/blur
mouse wheel
doble click
copying
pasting
audio start
screen resize
printing: before print and after print

https://developer.mozilla.org/en-US/docs/Web/Events

/ the thing / event / type the code to run
/ button / click / change the color
/ input / return / get search res
/ image / hover / display captino

onEVENTNAME = "do something";

EX: for JS
const btn = document.querySelector('#clicker');
btn.ondblclick = function () {
alert('hi');
};

EX: inline JS in HTML

<!-- <button onclick="alert('YOU clicked me!!')">Click me!</button> -->

// add eventListener

- inline listener is not good, because it is hard to locate it.
- direct listener in JS is not good as well, because we lack flexibility: we cannot add two different onclick events.

for such cases we use addEventListener.

- it supports as many listeners as we want. For Example:
  const btn = document.querySelector('#clicker');

btn.addEventListener('click', function () {
alert('You Clicked!!!');
});

btn.addEventListener('mouseover', function () {
btn.innerText = "Stupid, \n Don't Touch me";
});
btn.addEventListener('mouseout', function () {
btn.innerText = 'Clicker!';
});

- scroll event support two types (one element (button) and multiple event listners):

1. scroll on the page
2. scroll on the element
   EX:
   window.addEventListener('scroll', function () {
   alert('Stop Scrolling!!');
   });

// event listeners attached to multiple elements
