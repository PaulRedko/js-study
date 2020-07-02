// function grumpus(){
//     console.log("leave me alone!");
//     console.log("I am so tired, I need some rest and space, and fresh air!");
//     console.log("Leave me! ALONE!")
// }

// let repetition = 0;
// for(let i = 0; i < 22; i+=2){
//     grumpus();
//     repetition += 1;
// }
// console.log(repetition)

// dicing roll function

// function rollDie(){
//     let roll = Math.floor(Math.random()*6+1);
//     console.log(`Rolled to ${roll}`)
// }

// function newRollDies(numRolls){
//  for(let i = 0; i < numRolls; i++){
//     rollDie();
//  }
// }

// function helloW(website) {
//     prompt(`Add the website name: ${website}`)
//     console.log(`Hello World on ${website}`);
// }
// helloW();

// function square(num){
//     console.log(num*num);
// }

// function devide(x,y){
//     console.log(x/y);
//     return x/y
// }


// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

//declare
function isValidPassword(pass, userName) {
    // if(pass.length < 8) {return false};
    // if(pass.indexOf(' ') !== -1) {return false};
    // if(pass.indexOf(userName) !== -1){ return false}
    // return true;
    // }

    if((pass.length < 8) || (pass.indexOf(' ') !== -1) || (pass.indexOf(userName)) 
    {return false};
    return true;
    }
//run
isValidPassword('PbaPas!321','PbaPas!321');
