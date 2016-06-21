var $ = require('jquery');
var quiz = {
	questions: [
		{
			title: "What is the name of the gang's coffee shop hangout?",
			answers: ["Mendy\'s", "Reggie\'s", "Dream Cafe", "Monk\'s"],
			correct: 3
		},
		{
			title: "What is Kramer's real name?",
			answers: ["Carl", "John", "Cosmo", "Jerry"],
			correct: 2
		},
		{
			title: "What is Jerry's apartment number?",
			answers: ["5A","5B", "5C", "5D"],
			correct: 0
		},
		{
			title: "What occupation does George like to pretend he has?",
			answers: ["Marine Biologist", "Latex Salesman", "Architect", "Hand Model"],
			correct: 2
		},	
		{
			title:  "What was Kramer's fake doctor name?",
			answers: ["Dr. Vandelay", "Dr. Van Nostrand", "Dr. Whatley", "Dr. Reston"],
			correct: 1
		},
	]
};
var score = 0;
var i = 1;

// Change Question 
module.exports.changeQuestion = function(quiz){
	$(".question-title p").text(quiz);
}

// Change Answer
module.exports.changeAnswers = function(question) {
	for (var i = 0; i < question.answers.length; i++) {
		$(".answers").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
	}
}

// Submit Button
module.exports.submitButton = function(){
	$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
}

// Comparing User Answer To Correct Answer Index
module.exports.userAnswer = function() {
	var input = $("input[name='answer']:checked").val();
	for (var i = 0; i < quiz.questions.length; i++){
		if (quiz.questions[i].answers.indexOf(input) === quiz.questions[i].correct) {
			finalScore();
		} else {
		}
	}
}

// Question and Answer Functions
module.exports.questionAnswer = function(p) {
	if(!p) p=i;
	var question = quiz.questions[p];
	if (question !== undefined){
		this.changeQuestion(question.title);
		this.changeAnswers(question);
		$(".new-game").hide();
		$(".submit").show();
	} else {
		$(".question-title p").text("You got" + " " + score + " " + "out of 5 correct!" + " " + "Click New Game to play again!");
		$(".question-title h2").hide();
		$(".new-game").show();
		$(".submit").hide();
	}
}

// Tracking User's Correct Answers
module.exports.finalScore = function() {
	++score;
}

// Question Counter
module.exports.questionCounter = function() {
	$(".counter").text(++i);
}

// New Game
module.exports.newGame = function(){
	$(".question-title h2").show();
	$(".counter").text(i = 1);
	questionAnswer(0);
	score = 0;
}