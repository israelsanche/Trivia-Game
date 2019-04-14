// ### Option Two: Advanced Assignment (Timed Questions)

// ![Advanced](Images/2-advanced.jpg)

// **[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
// After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. 
// Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then 
// display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, 
// and an option to restart the game (without reloading the page).

// Code layout:

// Create array of questions to show up to user:
var questions = ["question1", "question2", "question3"];
// Array for answers matching index to question:
var Answers = ["answer1", "answer2", "answer3"];
// Array for wrong answers
var wrongoption1 = ["wrong1", "wrong2", "wrong3"];
// track what the user selected:
var userAnswer = "";
var currentQuestion = "";
var currentAnswer = "";
var currentQuestionIndex = 0;
var currentAnswerIndex=0;


// create variables for what I need to track:
//         How many questions right and how many wrong:
var answerRight = 0;
var answerWrong = 0;
var totalQuestions = (questions.length);
console.log(totalQuestions);
// did the user win or lose the game? Passing score above 8/10 questions to pass/win else fail...
var userPass = 0;
var userFail = 0;

// Functions i'll need to make this work
// need a for loop to go through the questions with if and then statements to keep looping through til end of game:

// onclick for what the user picks for answer

// need timer to give 10 seconds to answer otherwise counts as wrong answer


// within for loop need if and then statements

if (userAnswer===currentAnswer) {
answerRight++

}

function gamestartreset(){
answerRight=0;
answerWrong=0;
}
