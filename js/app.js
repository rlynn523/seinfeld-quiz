$(document).ready(function() {
	var quiz_model = require("../quiz-app/quiz_model");
	var input = $("input[name='answer']:checked").val();
	// Submit Answers
	$("form").submit(function(e) {
		e.preventDefault();
		quiz_model.userAnswer();
		quiz_model.questionCounter();
		$(".quiz-form .answer").replaceWith(quiz_model.questionAnswer());
	});
	$(".question-answer").on("click", ".new-game", function(){
		quiz_model.newGame();
	});
	quiz_model.questionAnswer();
	quiz_model.submitButton();
});