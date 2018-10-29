'use strict';

console.log('userName', userName);

var userName = prompt('Welcome to the site. What is your name?');
alert(' Nice to meet you ' + userName + '.');
console.log('userName', userName);

alert('please respond to the following five questions with yes or no');

console.log('candy', candy);
var candy = prompt('Do I like candy?');
var res = candy.toLowerCase()
console.log('candy', candy);
if (candy === 'yes') {
  alert(' Nope!');
}
else if (candy === 'no') {
  alert(' Correct!');

}

console.log('color', color);
var color = prompt('Is my favorite color blue?');
var res = color.toLowerCase()
console.log('color', color);
if (color === 'yes') {
  alert(' Sure is!');
}
else if (candy === 'no') {
  alert(' Wrong!');
}
console.log('height', height);
var height = prompt('Am I six feet tall?');
var res = height.toLowerCase()
console.log('height', height);
if (height === 'yes') {
  alert(' Nope, almost six foot.');
}
else if (height === 'no') {
  alert(' I didnt make the six foot club. ')
}


console.log('pie', pie);
var pie = prompt(' Do I like apple pie?');
var res = pie.toLowerCase()
console.log('pie', pie);
if (pie === 'yes') {
  alert(' Yup!');
}
else if (height === 'no') {
  alert(' Wrong ')
}

console.log('hand', hand);
var hand = prompt(' Am I left handed? ');
var res = hand.toLowerCase()
console.log('hand', hand);
if (hand === 'yes') {
  alert(' I am not left handed.');
}
else if (height === 'no') {
  alert(' Correct ')
}


var favoriteNumber = 3
console.log('numberGuess', numberGuess);
var numberGuess = parseInt(prompt(' What is my favorite number? You have four guesses '));
console.log('numberGuess', numberGuess);

if (numberGuess === favoriteNumber) {
     alert('Correct');
}
else if (favoriteNumber !== numberGuess) {
  var counter = 0;
  while (counter < 3 && numberGuess !== favoriteNumber) {
  parseInt(prompt('Close, try again!'));
  counter++;
  // score++;
  }
}
  if (numberGuess === favoriteNumber) {
    alert(' correct ');
}
    // score++; }

  

//   var states = ["HAWAII" , "CALIFORNIA" , "NEVADA" , "TEXAS" , "NEW JERSEY"];
// var ques7 = prompt ("What states have I lived in, besides Washington?  (answer in capital letter)" ) .toUpperCase();
// var answer = false;
// var counter = 0;
// while (counter < 7 && answer === false) {
// for (var arrayID = 0; arrayID < states.length; arrayID++) {
//   if (ques7 === states[arrayID]) {
//     answer = true;
//     break;
//   }}
// }
//   if (answer === true) {
//     alert("That is correct! I've lived in " + states);
//   } 
//   else {
//     ques7 = prompt ("That is incorrect. Please try again. (answer in capital letter)");
//     counter++;
//   }

  // else {(alert( 'Correct'));
  
  //  if (numberGuess === 3){
  //     alert( 'Correct')

// numberGuess = parseInt(prompt(numberGuess + ' is not a number'));

    // else(numberGuess){
    //     alert( 'Correct')
// }





// else if ( numberGuess < 3){
//     alert( ' Close, a little higher!')
//     }
//     numberGuess = 
// if (i++ ===  ) break;

// var counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
