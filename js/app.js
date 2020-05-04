'use strict'

// Welcome message
// function welcome(){
  var userName =  prompt('Nice of you to stop by what is your name?');

    alert('Hello ' + userName + '! I\'m Kim, thanks for visiting my page I hope you enjoy it. I\'ll need to ask you a few yes or no questions before proceeding. Bare with me my teacher made me do it because it\'s part of my school lab assignment. At the end you\'ll have a chance to play a guessing game, good luck.');
    console.log('the user name is: ' + userName);

welcome();

// // Question 1 
function bornIn(){
      var bornIn = prompt('Was I born and raised in Washington?');
      console.log('bornIn');

          if (bornIn.toLowerCase() === 'yes') {
            alert('Actually, I was born and raised on a little island called Guam. I currently live in Washington.');
          } else if (bornIn.toLowerCase() === 'no') { 
            alert('Yup your right, I\'ve only been living in Washington for 5 years.');
    }
}
bornIn();

// // Question 2
function cultures(){
      var otherCultures = prompt('Are you interested in other cultures?');
      console.log(otherCultures);

          if (otherCultures.toLowerCase() === 'yes') {
            alert('Nice, I hope you\'ll enjoy my top 10.');
          } else if (otherCultures.toLowerCase() === 'no') {
            alert('Oh no! I hope you enjoy my page anyway.');
    }
}
cultures();

// // Question 3
function soDev(){
      var coder = prompt('Are you a software developer?')
      console.log(coder);

          if (coder.toLowerCase() === 'yes') {
            alert('I am too,' + ' Code Fellows taught me everything I know.');
          } else if (coder.toLowerCase() === 'no') {
            alert('Code Fellows rocks! You should check them out.');
    }
}
soDev();

// // Question 4
function loveArt(){
      var art = prompt('Do you like art?');
      console.log(art);   

          if (art.toLowerCase() === 'yes'){
            alert('I enjoy all forms or art myself!');
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
          } else if (workGuess.toLowercase() === 'no'){
            alert('Correct I work at Seattle\'s closest casino and that would be Snoqualmie Casino.');
    };
};
work();
 
// Question 6 (this needs fixing )

function guessNumber() {
var numberGame = prompt('Can you tell me what number I\'m thinking of I\'ll give you a few guesses.');
  var answer = 15;  
  // var numberGuess = [you\'re pretty bad at this the number I\'m think of is 15.];
  // var wrongGuess = ['That\'s too low try again', 'That\'s too low try again', 'That\'s too high try again', 'That\'s too high try again'];
  // var correctGuess = ['Awesome that was a good guess 15 is exactly the number I\'m thinking of!'];
  // console.log(numberGame);  

      for(var i = 0; i < 3; i++) {
        if (numberGame < answer) {
              numberGame = prompt('That\'s too low try again');  
          } else if (parseInt(numberGame) > answer) {
              numberGame = prompt('That\'s too high try again');
          } else  if (parseInt(numberGame) === answer) {
            alert('Awesome that was a good guess 15 is exactly the number I\'m thinking of!');
            score++;
            break;
        }
    }   
} 
guessNumber();

// Question 7 About me guessing game with arrays
function place() {
var placeGuess = [Guam];
    var dayBegins = prompt('Where do you think America\'s day begins?');
    
    for (var placeGuess = 1; placeGuess < 7; placeGuess++){
          
        if(placeGuess === Guam[0] || placeGuess === correctPlaceGuess[1] ||  placeGuess === correctPlaceGuess[2]){
           correctGuess++;
           alert('Nice job guessing correctly Guam is where America\'s day begins!');
           console.log(placeGuess);
        break;
      } else (placeGuess === 6) { 
           alert('You\'re out of guesses the correct answer is Guam.');
        break;
//       } else if { placeGuess = prompt('Nope not that one guess again.')}                            
//   }
// }
place();

function score() {
  alert('Nice try but you only got' + correctGuess + 'out of 7 correct');
}
score();