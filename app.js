'use strict';

//Confirmation status
var EntryAnswer = confirm('ARE YOU READY?');
var correct = 0;

if (EntryAnswer) {
  console.log('Player 1 has joined the server. Stand by for Match Start.');
} else {
  console.log('Disconnecting from server.');
}

//Name entry
var contestantName = prompt('What is your name?');

console.log('Welcome ' + contestantName + ' to a little Quiz about me, Austin. Please hit enter to continue.');

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
} else {
  console.log('Ooh, sorry. That was wrong. I am actually 19.');
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
  console.log('Correct! Jazz, Thumper, Fezzik, Arya and Maou!');
} else {
  console.log('Oh, I\'m sorry! the correct answer was yes!');
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
  console.log('Correct! Cats just don\'t seem to like my family.');
} else {
  console.log('Oh, I\'m sorry! My family has not owned any cats.');
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
  console.log('Correct! A couple favorites being Payday 2 and the Pokemon games!');
} else {
  console.log('Oh, I\'m sorry! I mostly play games from those Genres.');
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
  console.log('Correct! I have only been writing fanfiction for the past week or so.');
} else {
  console.log('Oh, I\'m sorry! While I do write Fanfiction, I only recently began, starting before the new year.');
}

//6

//declare function
function functionAnswer6(answer6) {
  if (answer6 === 2) {
    return true;
  } else {
    return false;
  }
}

for(var index = 0; index < 4; index++){
  var answer6 = parseInt(prompt('How many brothers do I have? Please answer with digits, not typed out numbers. Hint: It is less than 8'));

//call function
  if (functionAnswer6(answer6)){
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

console.log('There were',correct + ' correct');
