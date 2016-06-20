$(document).ready(function() {
	var score = 0;
	var i = 1;
	var quiz_model = require("./quiz-app/quiz_model");
	var input = $("input[name='answer']:checked").val();
	
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
	// Submit Answers
	$("form").submit(function(e) {
		e.preventDefault();
		quiz_model.userAnswer();
		$(".quiz-form .answer").replaceWith(quiz_model.questionAnswer(i));
		quiz_model.questionCounter();
	});

	$(".question-answer").on("click", ".new-game", function(){
		quiz_model.newGame();
	});
	quiz_model.questionAnswer(0);
	quiz_model.submitButton();
});