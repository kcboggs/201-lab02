'use strict';
var correctAnswers =0;

// Welcome message
function welcomeGreeting(){
  var userName =  prompt('Nice of you to stop by what is your name?');

  alert('Hello ' + userName + '! I\'m Kim, thanks for visiting my page I hope you enjoy it. I\'ll need to ask you a few yes or no questions before proceeding. Bare with me my teacher made me do it because it\'s part of my school lab assignment. At the end you\'ll have a chance to play a guessing game, good luck.');
  console.log('welcomeGreeting: ' + userName);
}
welcomeGreeting();

// // Question 1
function bornIn(){
  var bornIn = prompt('Was I born and raised in Washington?');
  console.log('bornIn');

  if (bornIn.toLowerCase() === 'yes') {
    alert('Actually, I was born and raised on a little island called Guam. I currently live in Washington.');
  } else if (bornIn.toLowerCase() === 'no') {
    alert('Yup your right, I\'ve only been living in Washington for 5 years.');
    correctAnswers++;
  }
}
bornIn();

// // Question 2
function cultures(){
  var otherCultures = prompt('Am I interested in other cultures?');
  console.log(otherCultures);

  if (otherCultures.toLowerCase() === 'yes') {
    alert('Correct, I hope you\'ll enjoy my top 10.');
    correctAnswers++;
  } else if (otherCultures.toLowerCase() === 'no') {
    alert('Oh yes I am!');
  }
}
cultures();

// // Question 3
function soDev(){
  var coder = prompt('Am I studying to become a software developer?');
  console.log(coder);

  if (coder.toLowerCase() === 'yes') {
    alert('Correct Code Fellows rocks!.');
    correctAnswers++;
  } else if (coder.toLowerCase() === 'no') {
    alert('Code Fellows rocks! You should check them out.');
  }
}
soDev();

// // Question 4
function loveArt(){
  var art = prompt('Do I like art?');
  console.log(art);

  if (art.toLowerCase() === 'yes'){
    alert('True I enjoy all forms or art!');
    correctAnswers++;
  } else if (art.toLowerCase() === 'no'){
    alert('For real! Not even music.');
  }
}
loveArt();
// Question 5
function work(){
  var workGuess = prompt('Do I work at Seattle\'s biggest casino?');
  console.log(workGuess);

  if (workGuess.toLowerCase() === 'yes'){
    alert('Nope Muckleshoot Casino is Seattle\'s biggest casino but that isn\'t where I work.');
  } else if (workGuess === 'no');
  alert('Correct I work at Seattle\'s closest casino and that would be Snoqualmie Casino.');
  correctAnswers++;
}
work();

// Question 6 (there is still a bug in this one)

function guessNumber() {
  var numberGame = prompt('Can you tell me what number I\'m thinking of I\'ll give you a few guesses.');
  var answer = 15;

  for(var i = 0; i < 3; i++) {
    if (numberGame < answer) {
      numberGame = prompt('That\'s too low try again');
    } else if (parseInt(numberGame) > answer) {
      numberGame = prompt('That\'s too high try again');
    } else if (parseInt(numberGame) === answer) {
      alert('Awesome that was a good guess 15 is exactly the number I\'m thinking of!');
      correctAnswers++;
      break;
    }
  }
}
guessNumber();

// Question 7 About me guessing game with arrays
function guessColor() {
  var favoriteColors = ['purple', 'pink'];

  // This for loop controls the number of chances
  var answeredCorrectly = false;
  for (var i = 0; i < 7; i++){
    var colorGuess = prompt('What do you think my favorite colors are?');
    console.log(colorGuess);
    // This for loop checks all possible answers
    for (var j = 0; j < favoriteColors.length; j++){
      if (colorGuess.toLowerCase() === favoriteColors[j]) {
        alert('You guessed correctly.');
        answeredCorrectly = true;
        correctAnswers++;
        break;
      }
    }

    if (answeredCorrectly === true) {
      break;
    }

    // If they reach this answer their guess was wrong
    alert('Nope that\'s not the one!');
  }
}
guessColor();

function score() {
  alert('Thanks for playing ' + correctAnswers + ' out of 7 correct');
}
score();
