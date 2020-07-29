// OWN SOLUTION

function calculate(e) {
  let total;
  let quantity = document.querySelector('#quantity').value;
  let price = document.querySelector('#price').value;
  let tax = document.querySelector('#tax').value;
  let discount = document.querySelector('#discount').value;

  total = quantity * price;
  tax /= 100;
  tax++;
  total *= tax;
  total = total - discount;
  document.querySelector('#total').value = total;
  e.preventDefault();
}

const form = document.querySelector('#calcForm');
form.addEventListener('submit', calculate);

// function (e) {
//   e.preventDefault();
//   form.onsubmit = calculate();
// });

// SUGGESTED SOLUTION from the book

// function calculate() {
//   'use strict';
//   var total;
//   var quantity = document.getElementById('quantity').value;
//   var price = document.getElementById('price').value;
//   var tax = document.getElementById('tax').value;
//   var discount = document.getElementById('discount').value;
//   total = quantity * price;
//   tax /= 100;
//   tax++;
//   total *= tax;
//   total -= discount;

//   // Format the total:
//   total = total.toFixed(2);

//   document.getElementById('total').value = total;
//   return false;
// } // End of calculate() function.

// function init() {
//   'use strict';
//   document.getElementById('theForm').onsubmit = calculate;
// } // End of init() function.
// window.onload = init;
