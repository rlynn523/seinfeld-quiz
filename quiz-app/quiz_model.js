	var $ = require('jquery');
	export var i = 0;
	export var score = 0;
	export var quiz = {
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
			{
				title:  "What was Kramer's mother's name?",
				answers: ["Babs", "Bonney", "Bunney", "Barb"],
				correct: 0
			},
			{
				title:  "What is George's ATM code?",
				answers: ["Syrup", "Smore", "Bosco", "Oreos"],
				correct: 2
			},
			{
				title:  "What food did George introduce to Mr. Steinbrenner that he become obessesed with eating at every lunch?",
				answers: ["Chili Dog", "General Tso's Chicken", "Stuffed Peppers", "Calzone"],
				correct: 3
			},
		]
	};

	// Change Question
	export function changeQuestion(quiz) {
		$(".question-title p").text(quiz);
	}
	// Change Answer
	export function changeAnswers(question) {
		for (var i = 0; i < question.answers.length; i++) {
			$(".answers").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
		}
	}
	// Submit Button
	export function submitButton() {
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
	}
	// Comparing User Answer To Correct Answer Index
	export function userAnswer() {
		var input = $("input[name='answer']:checked").val();
		if (quiz.questions.length > i && quiz.questions[i].answers.indexOf(input) ===  quiz.questions[i].correct) {
			finalScore();
		}
	}
	// Question and Answer Functions
	export function questionAnswer() {
		var question =  quiz.questions[i];
		if (question !== undefined){
			changeQuestion(question.title);
			changeAnswers(question);
			$(".new-game").hide();
			$(".submit").show();
		} else {
			$(".question-title p").text("You got" + " " +  score + " " + "out of 8 correct!" + " " + "Click New Game to play again!");
			$(".question-title h2").hide();
			$(".new-game").show();
			$(".submit").hide();
		}
	}
	// Tracking User's Correct Answers
	export function finalScore() {
		score += 1;
	}
	// Question Counter
	export function questionCounter() {
		$(".counter").text(++i + 1);
	}
	// New Game
	export function newGame() {
		$(".question-title h2").show();
		$(".counter").text(i = 1);
		 i = 0;
		 questionAnswer();
		 score = 0;
	}
