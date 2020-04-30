'use strict'

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

function number() {
    var question6 = prompt('What number am I thinking of?');
    console.log(question6);
    // for(var z = 0; z < 15; z++){
    for(var i = 0; i < 4; i++){

      if (question6 > 15) {
        prompt('too high try again');
      } else if (question6 < 15) {
        prompt('too low try again');  
      } else if(question6 === 15) {
        alert('you guessed correctly!');
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

