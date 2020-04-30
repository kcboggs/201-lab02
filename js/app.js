'use strict'

alert('Hello!');
var name = prompt('What is your name?');
console.log('visitor name is' + name);
    
var question1 = prompt('Do you like coding?')
console.log(question1);

  if (question1 === 'yes') {
      alert('Well your at the right place to learn!');
  } else if (question1 === 'no') {
      alert('No problem coding is not for everyone!');
  }

  var question2 = prompt('Do you have any pets?')
  console.log("question2")
    
  if (question2.toLowerCase() === 'yes') {
        alert('Nice, I do too!');
  } else if (question2 === 'no') {
        alert('They are pretty cool to have!');
  }

var question3 = prompt('Do you live in Seattle?')
console.log(question3);

  if (question3 === 'yes') {
      alert('Hello neighbor!');
  } else if (question3 === 'no') {
      alert('Come visit sometime!')
  }

var question4 = prompt('Are you married?')
console.log(question4);

  if (question4 === 'yes') {
      alert('I am too!');
  } else if (question4 === 'no') {
      alert('Your not the only one!')
  }

var question5 = prompt('Do you have kids?')
console.log(question5); 

  if (question5 === 'yes') {
      alert('I also have kids!');
  } else if (question5 === 'no') {
      alert('Just asking!');  
  }

var question6 = prompt('What number am I thinking of?');
  
  if (question6 > 15) {
      prompt('too high try again');
  } else if (question6 < 15) {
      prompt('too low try again');  
  } else if(question6 === 15) {
      alert('you guessed correctly!');
  }

var question7 =prompt('Where do rainbows come from?');
var answer;('my backyard')

  if (question7 != 'my backyard') {
      prompt('take another guess');
  } else if(question7 == 'my backyard') {
      alert('hmm! sure why not'); 
  } 
