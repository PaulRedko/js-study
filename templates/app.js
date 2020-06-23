// // Exmaple 2
// let rating = 4; 

// if (rating === 3) {
//     console.error("you are a superstar!!")    
//     } else {console.error("go fuck yourself!")
//     }

// // Exmaple 3
// let num = 23;
// if (num % 2 !== 0) {
//     console.log("it is odd")
// } else {
//     console.log("it is even")
// }

// Example 4
// // // let webRating = 92;
// // // if (webRating >= 70 && webRating <= 100) {
// // //     console.log("Your performance is good")
// // // } 
// // // else if (webRating <= 69 && webRating >= 50){
// // //     console.log("You need improvement")
// // // }
// // // else if (webRating >= 1 && webRating <=49) {
// // //         console.log("this is impossible!")
// // //     } 
// // // else {
// // //     console.log("invalid rating!!!")}

// Example 5

let highScore = 10; 
let userScore = 11; 

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`)
    highScore = userScore;
}
else {
    console.log(`Good game! Your score of ${userScore} did not bit the high score of ${highScore}`)
}

let password = "shitty day";

if (password.length >= 7){
    if (password.indexOf(' ') === -1){
        console.log("Password is valid!")
    }
    else {        
        console.log("Password should not contain spaces, please adjust yours!")
    }
}
else {
    console.log("Invalid password!")
}

let num = 888; 

if (num >= 1 && num <= 10){
    console.log("Valid Number!")
}
else {
    console.log("Pick a number in the range between 1 and 10")
}