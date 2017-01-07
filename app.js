//Helps make sure that there is stricter debugging in the code.
'use strict';

//Confirmation status
var EntryAnswer = confirm('ARE YOU READY?');
var correct = 0;

if (EntryAnswer) {
  alert('Player 1 has joined the server. Stand by for Match Start.');
  document.write('<p>Results for Entry Quiz. User chose ready. Game started.</p>');
} else {
  alert('Too bad. Connecting to server.');
  document.write('<p>Results for Entry Quiz. User chose not ready. Began Anyway.</p>');
}

//Name entry
var contestantName = prompt('What is your name?');

if (contestantName === null){
  contestantName = '(NO NAME ENTERED)';
}

alert('Welcome ' + contestantName + ' to a little Quiz about me, Austin. Please hit enter to continue.');
document.write('<p> User ' + contestantName + ' began the quiz.</p>');
//Q1

var answer1 = prompt('How old do you think I am? Please answer with digits, not a typed out answer.');

function functionAnswer1(answer1) {
  if (answer1 === '19') {
    return true;
  } else {
    return false;
  }
}

if (functionAnswer1(answer1)) {
  console.log('Correct! I am indeed only 19 years old!');
  document.write('<p> Am I 19? ' + contestantName + ' guessed correctly! I am 19.</p>');
  alert('Correct! I was born on March 24th, 1997, making me 19 years old.');
} else {
  console.log('Question 1 was Incorrect');
  document.write('<p> Am I 19?' + contestantName + ' guessed incorrectly. I am only 19.</p>');
  alert('Ooh, sorry. That was wrong. I am actually 19.');
}

//Q2
var answer2 = prompt('This is a Yes or No question. You may answer with Yes/No or Y/N. Have I had 5 dogs through my life?').toUpperCase();

function functionAnswer2(answer){
  if (answer2 === 'Y' || answer2 === 'YES'){
    return true;
  } else {
    return false;
  }
}

if (functionAnswer2(answer2)) {
  alert('Indeed! 5 dogs total, often two at a time; Jazz, Thumper, Fezzik, Arya and Maou.');
  console.log('Correct! Jazz, Thumper, Fezzik, Arya and Maou!');
  document.write('<p>Have I had 5 dogs throughout my life so far? ' + contestantName + ' guessed correctly! I have indeed. Their names are Jazz, Thumper, Fezzik, Arya and Maou.</p>');
} else {
  alert('Oh, I\'m sorry! the correct answer was yes!');
  console.log('Question 2 was Incorrect');
  document.write('<p>Have I had 5 dogs throughout my life so far? ' + contestantName + ' guessed incorrectly. I have indeed had 5 dogs throughout my life. Their names are Jazz, Thumper, Fezzik, Arya and Maou.</p>');
}

//Q3
var answer3 = prompt('Have I owned any cats?').toUpperCase();

function functionAnswer3(answer3) {
  if (answer3 === 'N' || answer3 === 'NO'){
    return true;
  } else {
    return false;
  }
}

if (functionAnswer3(answer3)) {
  alert('Yeah, Cats and my family just don\'t seem to get along.');
  console.log('Correct! Cats just don\'t seem to like my family.');
  document.write('<p>Have I owned any cats? ' + contestantName + ' guessed correctly. Cats seem to hate me, so no.</p>');
} else {
  alert('Oh, I\'m sorry! My family has not owned any cats.');
  console.log('Question 3 was Incorrect');
  document.write('<p>Have I ever owned a cat? ' + contestantName + ' guessed that I have had a cat. They were wrong; cats hate me.</p>');
}

//Q4
var answer4 = prompt('Do I play a lot of First Person Shooters and Role Playing Games?').toUpperCase();

function functionAnswer4(answer4) {
  if (answer4 === 'Y' || answer4 === 'YES') {
    return true;
  } else {
    return false;
  }
}

if (functionAnswer4(answer4)) {
  alert('Why yes, yes I do. I play A LOOOOOOOOT of FPS and RPG games.');
  console.log('Correct! A couple favorites being Payday 2 and the Pokemon games!');
  document.write('<p> Do I play a lot of games from the FPS and PRG genres? ' + contestantName + ' guessed I do, and he is absolutely correct. I have literal thousands of hours in to my Pokemon games alone.</p>');
} else {
  alert('Oh, I\'m sorry! I mostly play games from those Genres.');
  console.log('Question 4 was Incorrect');
  document.write('<p>Do I play a lot of games from the FPs and RPG genres? ' + contestantName + ' guessed I do not, and they would be wrong. I Very much play games from those genres.</p>');
}

//Q5
var answer5 = prompt('Have I been writing fanfiction for the past year?').toUpperCase();

function functionAnswer5(answer5) {
  if (answer5 === 'N' || answer5 === 'NO') {
    return true;
  } else {
    return false;
  }
}

if (functionAnswer5(answer5)) {
  alert('Indeed! While I have indeed been writing fanfiction, I have only been writing it for a short time, starting just before the new year.');
  console.log('Correct! I have only been writing fanfiction for the past week or so.');
  document.write('<p>Have I been writing fanfiction for the past year? ' + contestantName + ' thought I did not, and he is correct. I have only very recently began writing fanfiction.</p>');
} else {
  alert('Oh, I\'m sorry! While I do write Fanfiction, I only recently began, starting before the new year.');
  console.log('Question 5 was Incorrect');
  document.write('<p>Have I been writing fanfiction for the past year? ' + contestantName + ' thinks I have, which is wrong. I have only been writing for a very short time.</p>');
}

/* for(var index = 0; index < 4; index++){
  var answer6 = parseInt(prompt('How many brothers do I have? Please answer with digits, not typed out numbers. Hint: It is less than 8'));
  if(answer6 === 2){
    alert('Correct! Ian and Logan!');
    console.log('Question 6 was correct with ' + index + ' wrong guesses.');
    index = 7;
    var correctQuestion6 = true;
    correct++;
  } else if (answer6 < 2) {
    alert('Sorry, that was wrong! You guessed too low!');
  } else if (answer6 > 2) {
    alert('Sorry, that was wrong! You guessed too high!');
  }
}
if(correctQuestion6 != true){
  alert('I am sorry, but I have 2 brothers!');
  console.log('Question 6 was incorrect');
}
*/
//6

//declare function
function functionAnswer6(answer6) {
  if(answer6 === 2){
    alert('Correct! Ian and Logan!');
    console.log('Question 6 was correct with ' + index + ' wrong guesses.');
    index = 7;
    correct++;
    document.write('<p>' + contestantName + ' Guessed I have 2 brothers, which is correct.</p>');
  } else if (answer6 < 2) {
    alert('Sorry, that was wrong! You guessed too low!');
  } else if (answer6 > 2) {
    alert('Sorry, that was wrong! You guessed too high!');
  }
}

for(var index = 0; index < 4; index++){
  var answer6 = parseInt(prompt('How many brothers do I have? Please answer with digits, not typed out numbers. Hint: It is less than 8'));
  functionAnswer6(answer6);
}

//7
var An7Array = [];
function functionAnswer7(answer7) {
  if(answer7 === 'JAZZ' || answer7 === 'THUMPER' || answer7 === 'FEZZIK' || answer7 === 'ARYA' || answer7 === 'MAOU') {
    return true;
  } else {
    return false;
  }
}

for(var ind = 0; ind < 5; ind++){
  var answer7 = prompt('POP QUIZ! DO you remember the names of my dogs? I had 5.').toUpperCase();

  if(functionAnswer7(answer7)) {
    alert('Correct! You got one right!');
    An7Array.push(answer7);
    correct++;
  } else {
    prompt('Sorry, that was wrong. :(');
  }
}

alert('You guessed ' + An7Array.length + ' correct! Their names were/are Jazz, Thumper, Fezzik, Arya and Maou.');
document.write('<p>' + contestantName + ' was able to correctly guess the names of these pets: ' + An7Array + '</p>');
console.log('There were',correct + ' correct');
