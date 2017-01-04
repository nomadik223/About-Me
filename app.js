'use strict';

//Variable to keep tally of correct answers.
var correct = 0;

//Confirmation status
var EntryAnswer = confirm('ARE YOU READY?');

if (EntryAnswer) {
  alert('Player 1 has joined the server. Stand by for Match Start.');
} else {
  alert('Too bad. Connecting to server.');
}

//Name entry
var contestantName = prompt('What is your name?');

console.log('Welcome ' + contestantName + ' to a little Quiz about me, Austin. Please hit enter to continue.');

//Q1
var answer1 = prompt('How old do you think I am? Please answer with digits, not a typed out answer.');

if (answer1 === '19') {
  console.log('Question 1 was correct');
  alert('Correct! I am indeed only 19 years old!');
  correct++;
} else {
  console.log('Question 1 was Incorrect');
  alert('Ooh, sorry. That was wrong. I am actually 19.');
}

//Q2
var answer2 = prompt('This is a Yes or No question. You may answer with Yes/No or Y/N. Have I had 5 dogs through my life?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('Correct! Jazz, Thumper, Fezzik, Arya and Maou!');
  console.log('Question 2 was correct');
  correct++;
} else {
  alert('Oh, I\'m sorry! the correct answer was yes!');
  console.log('Question 2 was Incorrect');
}

//Q3
var answer3 = prompt('Have I owned any cats?').toUpperCase();

if (answer3 === 'N' || answer3 === 'NO') {
  alert('Correct! Cats just don\'t seem to like my family.');
  console.log('Question 3 was correct');
  correct++;
} else {
  alert('Oh, I\'m sorry! My family has not owned any cats.');
  console.log('Question 3 was Incorrect');
}

//Q4
var answer4 = prompt('Do I play a lot of First Person Shooters and Role Playing Games?').toUpperCase();

if (answer4 === 'Y' || answer4 === 'YES') {
  alert('Correct! A couple favorites being Payday 2 and the Pokemon games!');
  console.log('Question 4 was correct');
  correct++;
} else {
  alert('Oh, I\'m sorry! I mostly play games from those Genres.');
  console.log('Question 4 was Incorrect');
}

//Q5
var answer5 = prompt('Have I been writing fanfiction for the past year?').toUpperCase();

if (answer5 === 'N' || answer5 === 'NO') {
  alert('Correct! I have only been writing fanfiction for the past week or so.');
  console.log('Question 5 was correct');
  correct++;
} else {
  alert('Oh, I\'m sorry! While I do write Fanfiction, I only recently began, starting before the new year.');
  console.log('Question 5 was Incorrect');
}

for(var index = 0; index < 4; index++){
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

var An7Array = [];
for(var ind = 0; ind < 5; ind++){
  var answer7 = prompt('POP QUIZ! DO you remember the names of my dogs? I had 5.').toUpperCase();
  if(answer7 === 'JAZZ' || answer7 === 'THUMPER' || answer7 === 'FEZZIK' || answer7 === 'ARYA' || answer7 === 'MAOU'){
    alert('Correct! You got one right!');
    An7Array.push(answer7);
    correct++;
  } else {
    prompt('Sorry, that was wrong. :(');
  }
}
alert('You guessed ' + An7Array.length + ' correct! Their names were/are Jazz, Thumper, Fezzik, Arya and Maou.');

console.log('There were',correct + ' correct');
