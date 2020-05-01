'use strict'

// Welcome message
function welcome() {
  var userName =  prompt('Nice of you to stop by what is your name?');

    alert('Hafa Adai ' + userName + '! I\'m Kim, thanks for visiting my page I hope you enjoy it. I\'ll need to ask you a few questions before proceeding though. Bare with me my teacher made me do it because it\'s part of my school lab assignment');
    console.log('the user name is: ' + userName);
}
welcome();

// Question 1 
function bornIn() {
  var bornIn = prompt('Was I born and raised in Washington?');
  console.log('bornIn');

      if (bornIn.toLowerCase() === 'yes') {
        alert('Actually, I was born and raised on a little island called Guam. I currently live in Washington.');
      } else if (bornIn.toLowerCase() === 'no') { 
        alert('Yup your right, I\'ve only been living in Washington for 5 years.');
      }
}
bornIn();

// Question 2
function cultures() {
  var otherCultures = prompt('Are you interested in other cultures?');
  console.log(otherCultures);

      if (otherCultures.toLowerCase() === 'yes') {
        alert('Nice, I hope you\'ll enjoy learning about mine!');
      } else if (otherCultures.toLowerCase() === 'no') {
        alert('Oh no! I hope you enjoy my page anyway.');
      }
}
cultures();

// Question 3
function travel() {
  var otherPlaces = prompt('Do you like to travel?');
    console.log(otherPlaces);

      if (otherPlaces.toLowercase() === 'yes') {
        alert('I love traveling to different places!');
      } else if (otherPlaces.toLowercase() === 'no') {
        alert('There\'s a lot to see and learn out there!');
      }
}
travel(); 

// Question 4
function soDev() {
  var coder = prompt('Are you a software developer?')
  console.log(coder);

      if (coder.toLowerCase() === 'yes') {
        alert('I am too,' + ' Code Fellows Rocks!');
      } else if (coder.toLowerCase() === 'no') {
        alert('Well go sign up for classes then and become one!');
      }
}
soDev();

// Question 5
function loveArt() {
  var art = prompt('Do you like art?');
  console.log(art);   

      if (loveArt.toLowerCase() === 'yes') {
        alert('I enjoy all forms or art!');
      } else if (loveArt.toLowerCase() === 'no') {
        alert('Just asking!');  
      }
}
loveArt();

// Question 6
function number() {
  var number = parseInt(prompt('What number am I thinking of?'))
  console.log(typeof question6);
      for(var i = 0; i < 4; i++)

        if (number > 15) {
          prompt('too high try again')
        } else if (number < 15) {
          prompt('too low try again') 
        } else {
  }
}
 number(); 

// function number() {
//    var lucky = 15;
//    var counter = 0;
//    var luckyNumber = parseInt(prompt('What number am I thinking of?'))

//    while( !== lucky && counter < 4) {
//      counter++;

//      if(question6 > 15) {
//        question6 = parseInt(prompt('too high try again'))
//      }
//      else if(question6 < 15) {
//        question6 = parseInt(prompt('too low try again'))
//      }
//      else if(question6 === 15) {
//        alert('you guessed correctly!')
//        break;
//      } else {
//        alert('thanks for trying, but the number was 15')
//        break;
//      }
//    }
//  number(); 

//  Question 7
 function states() {
   var states =prompt('How many states have I lived in?')
   console.log(states)
      
       if (states < 3) {
             prompt('too cold try again')
       } else if(states > 3) {
            prompt('too hot try again')
       } else if(states === 3) { 
             alert('correct good guess!')
      }    
 }
  states(); 