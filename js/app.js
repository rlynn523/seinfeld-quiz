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
	//index is number, as is correct key
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
	function submitButton(){
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
	}

	function userAnswer() {
		var input = $("input[name='answer']:checked").val();
		for (var i = 0; i < quiz.questions.length; i++){
			console.log(quiz.questions[i].answers.indexOf(input));
			if (quiz.questions[i].answers.indexOf(input) === quiz.questions[i].correct) {
				console.log("correct");
				finalScore();
			} else {
				console.log("wrong");
			}
		}
	}
	//Question and Answer Functions
	function newGame() {
		questionAnswer(0);
	}
	function questionAnswer(i) {
		var question = quiz.questions[i];
		if (question !== undefined){
		changeQuestion(question.title);
		changeAnswers(question);
		} else {
			alert("You got" + " " + score + " " + "out of 5 correct!");
		}
	}
	var score = 0
	function finalScore() {
		score += 1;
		console.log(score);
	}

	var i = 1
	function questionCounter() {
		$(".counter").text(++i);
	}
	
	$("form").submit(function(e) {
		e.preventDefault();
		userAnswer();
		$(".quiz-form .answer").replaceWith(questionAnswer(i));
		questionCounter();
	})
	questionAnswer(0);
	submitButton();
});
