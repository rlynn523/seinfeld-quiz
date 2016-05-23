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
				correct: 2
			}
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
			$(".quiz-form").append('<div class="answer"><input type="radio" name="answer" value="'+question.answers[i]+'">' + question.answers[i] + '</div>');
		}
		$(".quiz-form").append('<div class="submit"><button type="text">Submit</button></div>');
		return;
	}
	//if indexOf user input is equal to correct, then correct answer!
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
	function displayResults() {
		console.log("You got" + " " + score + " " + "out of 5 correct!");
	}
	//Question and Answer Functions

	function questionAnswer(i) {
		var question = quiz.questions[i];
		changeQuestion(question.title);
		changeAnswers(question);
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
	
	$("form").submit(function(e){
		e.preventDefault();
		userAnswer();
		questionAnswer(i);
		questionCounter();
		displayResults();

	})
	questionAnswer(0);
});
