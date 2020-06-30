
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

for (let i = 1; i < 11; i++) {
    console.log("Outer loop:", i);
    for(let j = 10; j >= 0; j -= 2){
    console.log("   Inner loop:", j)
    };
} 
