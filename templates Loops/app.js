
// for (let i = 1; i <= 20; i+=5 ) {
//     console.error(i,'-HELLO!')
// }


// for (let i = 100; i >= -7; i-=3 ) {
//     console.log(i*i)
// }

// for (let i = 10; i >= -10; i-- ) {
//     let p = i*i;
//     console.log(p*10000)
// }

// for (let i = 9; i>=0; i--) {
//     console.log(`${i}x${i} = ${i*i}`);
// }

// console.log("after the loop!")

// const animals = ['tigers', 'lions', 'cats', 'bears']
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

// const myStudents = [
//     {
//        firstName: 'Paul',
//        score: 99 
//     },

//     {
//         firstName: 'John',
//         score: 77 
//      },
//     {
//         firstName: 'Patrick',
//         score: 87
//      },
//     {
//         firstName: 'Anton',
//         score: 80
//      }
// ];
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     // console.log(`${student.firstName} scored: ${student.score}`); // and this is for objects.  
//     total += student.score;
// }
// let stAv = total/myStudents.length;
// console.log(stAv);

// const word = 'stressed'; 
// for (let i = 0; i < word.length; i++){
//      console.log(word[i]);
// };

// for (let i = 1; i < 11; i++) {
//     console.log("Outer loop:", i);
//     for(let j = 10; j >= 0; j -= 2){
//     console.log("   Inner loop:", j)
//     };
// } 

// const gameBoard = [
//     [4,32,8,4],
//     [64,8,32,2],
//     [8,32,16,4],
//     [2,8,4,2]
// ]

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     console.log(gameBoard[i]);
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++){
//         totalScore += row[j];
        
//     }
// }
// console.log(totalScore); 

// for (let i = 0; i <= 6; i++){
//     console.log(i);
//     let j = 6;
//     while(j > 0){
//         j-=2;
//         console.log("  ",j)
// }
// }

// i need to generat the random number from 1 to 9. 
// i guess with the while loop 

// const targetNumber = Math.floor(Math.random()*10);
// let guessNumber = Math.floor(Math.random()*10);
// let repetition = 0;

// while (guessNumber !== targetNumber) {
//     console.log(`Target: ${targetNumber} Guess: ${guessNumber}`);
//     guessNumber = Math.floor(Math.random()*10) 
// }
// repetition += guessNumber; // <---???
// console.log("Repetitions: ", repetition);
// console.log(`Target: ${targetNumber} Guess: ${guessNumber}`);


// for (let i = 0; i < 15; i++){
//     console.log(i);
//     if (i === 12){
//         break;
//     }
// };

// let targetNumber = Math.floor(Math.random()*10);
// let guessNumber = Math.floor(Math.random()*10);

// while(true) {
//     if(targetNumber === guessNumber) break;
//     console.log(`Target: ${targetNumber} Guess: ${guessNumber}`);
//     guessNumber = Math.floor(Math.random()*10);

// }
// console.log(`Target: ${targetNumber} Guess: ${guessNumber}`);

// let subreddits = ['soccer', 'roku', 'streaming-TV', 'books']; 

// for(let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// for(let sub of subreddits) {
//     console.log(sub.toUpperCase())
//     for(let char of sub){
//         console.log(char.toUpperCase(), " ");
//     }
// }

// for(let char of "subreddits") {
//     console.log(char.toUpperCase());
// }

// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ]

// for (let i = 0; i < magicSquare.length; i++){
// let row = magicSquare[i];
// let sum = 0;
//     for(let j = 0; j < row.length; j++) {
//         sum += row[j];
        
//     }
//     console.log(`Row of ${row} is a sum of ${sum}`)
// }

// let sumTotal = 0;

// for (let row of magicSquare) {
//     let sum = 0;
//     for(let num of row) {
//         sum += num;
//     }
//     console.log(`Row of ${row} is a sum of ${sum}`)
//     sumTotal += sum; 
// }
// console.log(sumTotal)


// let subreddits1 = ['soccer', 'roku', 'streaming-TV', 'books']; 
// let subreddits2 = ['poker', 'moku', 'CiVi', 'crooks']; 
// // for(let i = 0; i < subreddits1.length; i++) {
// //     console.log(`${subreddits1[i]}-${subreddits2[i]}`);
// // }

// for(let sub1 of subreddits1 && let sub2 of subreddits2) {
//     console.log(`${sub1}-${sub2}`);    
// }

const movieReviews = {
 Ameile: 2,
 "Kill bill": 8,
 "Die hard": 2,
 "Home alone": 5, 
 Alien: 9,
 "Speed 5": 10,
 "Scary movie": 6
}

// for(let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie])
// }

// const ratings = Object.values(movieReviews) 
//     let total = 0;
//     for(let r of ratings){
//         total += r;   
// }
// let avr = total/ratings.length 
//     console.log(avr)
let total = 0;

for(let movie in movieReviews){
    console.log(movie, movieReviews[movie])
        total += movieReviews[movie];
}
let avr = total/movieReviews[movie].length;
console.log(total, avr);
