'use strict'


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
          } else if (workGuess === 'no');
            alert('Correct I work at Seattle\'s closest casino and that would be Snoqualmie Casino.');
}
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
function guessWhere() {
var placeGuess =(Guam);
    var dayBegins = prompt('Where do you think America\'s day begins?');
    console.log('placeGuess');
    for (var placeGuess = 1; placeGuess < 7; placeGuess++){
          
        if(placeGuess === Guam.toLowerCase[0] || placeGuess === (correctPlaceGuess[1]) ||  placeGuess === correctPlaceGuess[2]){
           correctGuess++;
           alert('Nice job guessing correctly Guam is where America\'s day begins!');
        break;
      } else if (placeGuess === 6){ 
           alert('You\'re out of guesses the correct answer is Guam.');
        break;
      } else if  (placeGuess = prompt('Nope not that one guess again.'));                            
    }
}
guessWhere();

function score() {
  alert('Nice try but you only got' + correctGuess + 'out of 7 correct');
}
score();

      alert('Hello! I\'ll need to ask you a few questions before you proceed.');
var visitorName = prompt('What is your name?');
      alert('It\s nice to meet you!' );
console.log('visitorName');
 
function likeCoding() {
  var question1 = prompt('Do you like coding?');
  console.log(question1);

      if (question1 === 'yes') {
        alert('I hear Code Fellows is the best place to start!');
      } else if (question1 === 'no') {
        alert('No problem coding isn\'t for everyone!');
      }
}
likeCoding();

function pets() {
  var question2 = prompt('Do you have any pets?');
  console.log("question2");
      
      if (question2.toLowerCase() === 'yes') {
        alert('Nice, I have a pet cat named Gracie!');
      } else if (question2 === 'no') {
        alert('They\'re pretty cool to have!');
      }
}
pets();

function seattle() {
  var question3 = prompt('Do you live in Seattle?');
  console.log(question3);

      if (question3 === 'yes') {
        alert('Hello neighbor!');
      } else if (question3 === 'no') {
        alert('Come visit sometime!');
      }
}
seattle();

function married() {
  var question4 = prompt('Are you married?');
  console.log(question4);

      if (question4 === 'yes') {
        alert('I am too!');
      } else if (question4 === 'no') {
        alert('You\'re not the only one!');
      }
}
married();

function kids() {
  var question5 = prompt('Do you have kids?');
  console.log(question5); 

      if (question5 === 'yes') {
        alert('I also have kids!');
      } else if (question5 === 'no'); {
        alert('Just asking!');  
      }
}
kids();

/* function number() {
    var question6 = parseInt(prompt('What number am I thinking of?'));
    //console.log(typeof question6);
    for(var i = 0; i < 4; i++){

      if (question6 > 15) {
        prompt('too high try again');
      } else if (question6 < 15) {
        prompt('too low try again');  
      } else {
        alert('you guessed correctly!');
      }
 }  
}

number(); */

function number() {
  var lucky = 15;
  var counter = 0;
  var question6 = parseInt(prompt('What number am I thinking of?'));

  while(question6 !== lucky && counter < 4) {
    counter++;

    if(question6 > 15) {
      question6 = parseInt(prompt('too high try again'));
    }
    else if(question6 < 15) {
      question6 = parseInt(prompt('too low try again'));
    }
    else if(question6 === 15) {
      alert('you guessed correctly!');
      break;
    } else {
      alert('thanks for trying, but the number was 15');
      break;
    }
  }

}
number(); 


function state() {
  var question7 =prompt('How many states have I lived in?');
  console.log(question7);
      
      if (question7 < 3) {
            prompt('too cold try again');
      } else if(question7 > 3) {
            prompt('too hot try again');
      } else if(question7 === 3) { 
            alert('correct good guess!');
      }    
}
state();  
