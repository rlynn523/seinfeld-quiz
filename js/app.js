$(document).ready(function() {
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
	}

	// Change Question 
	function changeQuestion(quiz){
		$(".question-title p").text(quiz);
	}

	// Change Answer
	function changeAnswers(question) {
		for (var i = 0; i < question.answers.length; i++) {
			$(".answers").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
		}
	}

	// Submit Button
	function submitButton(){
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
	}

	// Comparing User Answer To Correct Answer Index
	function userAnswer() {
		var input = $("input[name='answer']:checked").val();
		for (var i = 0; i < quiz.questions.length; i++){
			if (quiz.questions[i].answers.indexOf(input) === quiz.questions[i].correct) {
				finalScore();
			} else {
			}
		}
	}

	//Question and Answer Functions
	function questionAnswer(i) {
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

	// Tracking User's Correct Answers
	var score = 0
	function finalScore() {
		++score;
	}

	// Question Counter
	var i = 1
	function questionCounter() {
		$(".counter").text(++i);
	}

	// Submit Answers
	$("form").submit(function(e) {
		e.preventDefault();
		userAnswer();
		$(".quiz-form .answer").replaceWith(questionAnswer(i));
		questionCounter();
	})

	// New Game
	function newGame(){
		$(".question-title h2").show();
		$(".counter").text(i = 1);
		questionAnswer(0);
		score = 0;
	}

	$(".question-answer").on("click", ".new-game", function(){
		newGame();
	})

	questionAnswer(0);
	submitButton();
});
