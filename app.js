'use strict';

//Confirmation status
var EntryAnswer = confirm('ARE YOU READY?');

if (EntryAnswer) {
  console.log('Player 1 has joined the server. Stand by for Match Start.');
} else {
  console.log('Disconnecting from server.');
}

//Name entry
var contestantName = prompt('What is your name?');

console.log('Welcome ' + contestantName + ' to a little Quiz about me, Austin. Please hit enter to continue.');

//Q1
var answer1 = parseInt(prompt('How old do you think I am? Please answer with digits, not a typed out answer.'));

if (parseInt(answer1) === 19) {
  console.log('Correct! I am indeed only 19 years old!');
} else {
  console.log('Ooh, sorry. That was wrong. I am actually 19.');
}

//Q2
var answer2 = prompt('This is a Yes or No question. You may answer with Yes/No or Y/N. Have I had 5 dogs through my life?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  console.log('Correct! Jazz, Thumper, Fezzik, Arya and Maou!');
} else {
  console.log('Oh, I\'m sorry! the correct answer was yes!');
}

//Q3
var answer3 = prompt('Have I owned any cats?').toUpperCase();

if (answer3 === 'N' || answer3 === 'NO') {
  console.log('Correct! Cats just don\'t seem to like my family.');
} else {
  console.log('Oh, I\'m sorry! My family has not owned any cats.');
}

//Q4
var answer4 = prompt('Do I play a lot of First Person Shooters and Role Playing Games?').toUpperCase();

if (answer4 === 'Y' || answer4 === 'YES') {
  console.log('Correct! A couple favorites being Payday 2 and the Pokemon games!');
} else {
  console.log('Oh, I\'m sorry! I mostly play games from those Genres.');
}

//Q5
var answer5 = prompt('Have I been writing fanfiction for the past year?').toUpperCase();

if (answer5 === 'N' || answer5 === 'NO') {
  console.log('Correct! I have only been writing fanfiction for the past week or so.');
} else {
  console.log('Oh, I\'m sorry! While I do write Fanfiction, I only recently began, starting before the new year.');
}
