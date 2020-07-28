//enter your age and find out how many days you have been alive.

let age = prompt('What is your age?');
// let currentDate = Date
let ageInDays = age * 365.25;
// let todayDate = Date.UTC();
let today = new Date();
let year = today.getFullYear();

document.write(`You have been alive for ${ageInDays} days.`);
