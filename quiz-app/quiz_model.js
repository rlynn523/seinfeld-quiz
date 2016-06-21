	var $ = require('jquery');
	module.exports.i = 0;
	module.exports.score = 0;
	module.exports.quiz = {
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

	// Change Question 
	var changeQuestion = function(quiz){
		$(".question-title p").text(quiz);
	}
	module.exports.changeQuestion = changeQuestion;
	// Change Answer
	var changeAnswers = function(question) {
		for (var i = 0; i < question.answers.length; i++) {
			$(".answers").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
		}
	}
	module.exports.changeAnswers = changeAnswers;
	// Submit Button
	var submitButton = function(){
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
	}
	module.exports.submitButton = submitButton;
	// Comparing User Answer To Correct Answer Index
	var userAnswer = function() {
		var input = $("input[name='answer']:checked").val();
		if (this.quiz.questions.length > this.i && this.quiz.questions[this.i].answers.indexOf(input) === this.quiz.questions[this.i].correct) {
			this.finalScore();
		}
	}
	module.exports.userAnswer = userAnswer;
	// Question and Answer Functions
	var questionAnswer = function() {
		var question = this.quiz.questions[this.i];
		if (question !== undefined){
			changeQuestion(question.title);
			changeAnswers(question);
			$(".new-game").hide();
			$(".submit").show();
		} else {
			$(".question-title p").text("You got" + " " + this.score + " " + "out of 5 correct!" + " " + "Click New Game to play again!");
			$(".question-title h2").hide();
			$(".new-game").show();
			$(".submit").hide();
		}
	}
	module.exports.questionAnswer = questionAnswer;
	// Tracking User's Correct Answers
	var finalScore = function() {
		this.score += 1;
	}
	module.exports.finalScore = finalScore;
	// Question Counter

	var questionCounter = function() {
		this.i + 1;
		$(".counter").text(this.i += 1);
	}
	module.exports.questionCounter = questionCounter;
	// New Game
	var newGame = function() {
		$(".question-title h2").show();
		$(".counter").text(this.i = 1);
		this.i = 0;
		this.questionAnswer();
		this.score = 0;
	}
	module.exports.newGame = newGame;