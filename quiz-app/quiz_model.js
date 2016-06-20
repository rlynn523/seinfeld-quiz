	var $ = require('jquery');

	// Change Question 
	var changeQuestion = function(quiz){
		$(".question-title p").text(quiz);
	}
	module.exports = changeQuestion;
	// Change Answer
	var changeAnswers = function(question) {
		for (var i = 0; i < question.answers.length; i++) {
			$(".answers").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
		}
	}
	module.exports = changeAnswers;
	// Submit Button
	var submitButton = function(){
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
	}
	module.exports = submitButton;
	// Comparing User Answer To Correct Answer Index
	var userAnswer = function() {
		var input = $("input[name='answer']:checked").val();
		for (var i = 0; i < quiz.questions.length; i++){
			if (quiz.questions[i].answers.indexOf(input) === quiz.questions[i].correct) {
				finalScore();
			} else {
			}
		}
	}
	module.exports = userAnswer;
	// Question and Answer Functions
	var questionAnswer = function(i) {
		var question = quiz.questions[i];
		if (question !== undefined){
			changeQuestion(question.title);
			changeAnswers(question);
			$(".new-game").hide();
			$(".submit").show();
		} else {
			$(".question-title p").text("You got" + " " + score + " " + "out of 5 correct!" + " " + "Click New Game to play again!");
			$(".question-title h2").hide();
			$(".new-game").show();
			$(".submit").hide();
		}
	}
	module.exports = questionAnswer;
	// Tracking User's Correct Answers
	var finalScore = function() {
		++score;
	}
	module.exports = finalScore;
	// Question Counter
	var questionCounter = function() {
		$(".counter").text(++i);
	}
	module.exports = questionCounter;
	// New Game
	var newGame = function(){
		$(".question-title h2").show();
		$(".counter").text(i = 1);
		questionAnswer(0);
		score = 0;
	}
	module.exports = newGame;