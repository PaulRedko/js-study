// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// let city = 'kyiv';
// let cap = capitalize(city);

// let signSong = function (song) {
//   document.write(song);
// };

// let titanium =
//   "You shout it out \n But I can't hear a word you say \n I'm talking loud not saying much \n I'm criticized but all your bullets ricochet \n You shoot me down, but I get up";

// let titanium2 =
//   "I'm bulletproof nothing to lose \n Fire away, fire away \n Ricochet, you take your aim \n  Fire away, fire away \n You shoot me down but I won't fall, I am titanium n You shoot me down but I won't fall \n I am titanium, I am titanium, I am titanium, I am titanium";

//  quiz
// 1. x, y >> but y-x >> 40 - 10 = 30
// 2. 40*2 = 80;

// isEven Function
function isEven(n) {
  // return n % 2 === 0 ? true : false; // one solution
  return n % 2 === 0; // this is already a boolean statement. So it returns true or false.
}
isEven(13);

// Factorial function
// own solution
// function factorial(f) {
//   let i = 1;
//   while (0 <= f) {
//     return f * (f - 1);
//     f = f - 1;
//   }
// }
// resolved
function factorial(num) {
  // factorial - we need to define result var
  let result = 1;
  // calculate factorial and store value in result
  for (i = 1; i <= num; i++) {
    result = result * i;
  }
  // return result variable
  return result;
}

// kebabToSnake() - function;
function kebabToSnake(str) {
  return str.replace(/-/g, '_');
}
