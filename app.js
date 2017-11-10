'use strict';

var score = 0;
var name;

//get ready..
function setUp () {
  alert('Hello! My name is Shannon and we are going to playing a little guessing game where you have to guess things about me.');
  name=prompt('Before you learn anything about me I\'d like to know what your name is.');//this stupid error causes no problems but wont go away and it upsets me
  console.log('name', name);
}
setUp();

//q 1-5 using an array
var arrQuestion = ['Am I 6\'2?', 'Do I have Brown Hair?', 'Do I like birds?'];
var arrTrueResponse = ['yes, I\'m tall', 'yes it\'s brown', 'yes you get it, birds suck'];
var arrFalseResponse = ['u r wrong, so lame', 'no you\'re blind', 'nope, birds r lame'];
var arrCorrectAnswer = ['Y', 'Y', 'N'];

function firstQs (question, correctAnswer, trueResponse, falseResponse) {
  var userAnswer = prompt(question).toUpperCase().charAt(0);
  console.log('user answer: ', userAnswer);
  if (userAnswer === correctAnswer) {
    alert (trueResponse);
    score++;
    console.log('user score: ', score);
  } else {
    alert (falseResponse);
  }
}
firstQs (arrQuestion [0], arrCorrectAnswer [0], arrTrueResponse [0], arrFalseResponse [0]);
firstQs (arrQuestion [1], arrCorrectAnswer [1], arrTrueResponse [1], arrFalseResponse [1]);
firstQs (arrQuestion [2], arrCorrectAnswer [2], arrTrueResponse [2], arrFalseResponse [2]);


/* commenting out the previous solution below  Array's seemed easier, less stuff on one line
firstQs ('So my first question for you, ' + name + ', is am I 6\'2"? (y or n)', 'Y', 'Yes, ' + name + '! I am 6\'2".', 'You are wrong ' + name + '. I am 6\'2".');
firstQs('Okay, ' + name + ', my next question is am I a hockey player? (y or n)', 'Y', 'Yes! I am a hockey player '+name+'.', 'You were wrong. I am a hockey player'+name+'.');
firstQs('My third question is do I like birds? (y or n)', 'N', 'You were right! I hate birds, but I don\'t hate you '+name+'.', 'You are wrong. I hate birds, but I don\'t hate you ' + name + '.');
firstQs('This question is do I own a Hyundai? (y or n)', 'Y', 'Yes, '+name+'! I do own a Hyundai', 'You were wrong '+name+'. I do own a Hyundai');
firstQs('For my fifth question I\'ll ask you, '+name+', is do I have a dog? (y or n)', 'N', 'Correct. Cats are way better anyways, but you know this '+name+'.', 'Wrong. Cats are the far superior animal. You should know that '+name+'.');
*/

//q6 set variables
//Hard to evaluate so took it out, can put back>>  Math.round(Math.random()*10);
var answerNum = 5;
console.log('number to guess: ', answerNum);
var questionNum = 'Guess what number I am thinking of between 1 and 10.';
var trueNum = 'Wow, you guessed it ' + name + '.'
var falseNumLow = 'Too low. '+ (userTry - 1) +' tries left.'
var falseNumHigh = 'Too high. '+ (userTry - 1) +' tries left.'
var endAlert = 'You couldn\'t guess the number '+name+'.';
var userTry = 4;
//USER TRY EVALUATES AS NaN I don't get it.
//q6 function
function questNumFunc (questionNum, answerNum, trueNum, falseNumLow, falseNumHigh, endAlert) {
  while (userTry > 0) {
    var userNum = parseInt(prompt(questionNum));
    console.log ('user guessed:', userNum);
    if (userNum === answerNum) {
      alert(trueNum);
      score++
      console.log('Question 6 score: ', score);
      break;
    } else if (userNum<answerNum) {
      alert (falseNumLow);
      userTry--;
      console.log('Tries remainging: ', userTry);
    } else if (userNum>answerNum) {
      alert(falseNumHigh);
      userTry--;
      console.log('Tries remainging: ', userTry);
    } else {
      alert(endAlert);
      userTry--;
      console.log('Tries remainging: ', userTry);
    }
  }
}
questNumFunc(questionNum, answerNum, trueNum, falseNumLow, falseNumHigh, endAlert);

/*
//Question 7
function statesQuest () {
  var states = ['california', 'florida', 'oregon', 'maine'];
  var j = 6;
  while(j >0){
    var guessedState = prompt('Can you guess a state I\'ve lived in other than Washington').toLowerCase();
    console.log('guessedState', guessedState);
    if(states.includes(guessedState)){
      var index = states.indexOf(guessedState);
      states.splice(index);
      alert('Good job, '+ name +', you guessed correctly. The other states are '+ states[0] + ', '+states[1]+', '+states[2]+'.');
      score++;
      break;
    }
    else {
      alert('Too bad '+name+', you got it wrong. The correct answer are '+states[0]+', '+states[1]+', '+states[3]+', '+states[2]+'.');
    }
  }
}
statesQuest ();
console.log('score', score);

alert('Congrats, '+name+'! You made it through the game. You got ' + score + ' out of 7 correct.');//
*/
