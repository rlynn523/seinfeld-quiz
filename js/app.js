import * as quiz_model from "../quiz-app/quiz_model";
$(document).ready(function() {
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