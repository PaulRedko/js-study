const movieDB = [];

movieDB.push(
  {
    name: 'In Bruges',
    watched: true,
    rateStars: 5,
  },
  {
    name: 'Frozen',
    watched: false,
    rateStars: 4.5,
  },
  {
    name: 'Mad Max Fury Road',
    watched: true,
    rateStars: 5,
  },
  {
    name: 'Les Miserable',
    watched: false,
    rateStars: 3.5,
  }
);

// const movieDB = [
//   {
//     name: 'In Bruges',
//     watched: true,
//     rateStars: 5,
//   },
//   {
//     name: 'Frozen',
//     watched: false,
//     rateStars: 4.5,
//   },
//   {
//     name: 'Mad Max Fury Road',
//     watched: true,
//     rateStars: 5,
//   },
//   {
//     name: 'Les Miserable',
//     watched: false,
//     rateStars: 3.5,
//   },
// ];

movieDB.forEach(function (movie) {
  document.write(buildString(movie));
  console.error(buildString(movie));
});

function buildString(movie) {
  let result = 'You have ';
  if (movie.watched) {
    result += 'watched ';
  } else {
    result += 'not watched ';
  }
  result += '"' + movie.name + '"';
  result += ' - ' + movie.rateStars + ' stars. <br>';
  return result;
}

const obj = {
  name: 'Sofia',
  age: 6,
  isCool: true,
  friends: ['Gleb', 'Miron', 'Sonia'],
  add: function (x, y) {
    return x + y;
  },
};
