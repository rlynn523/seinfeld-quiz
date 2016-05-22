$(document).ready(function() {
	var correct = ["Monk\'s", "Cosmo", "5A", "Architect", "Dr. Van Nostrand"]
	var quiz = [
		{
			question: "What is the name of the gang's coffee shop hangout?",
			answers: ["Mendy\'s", "Reggie\'s", "Dream Cafe", correct [0]],
			correct: correct[0],
		},
		{
			question: "What is Kramer's real name?",
			answers: ["Carl", "John", correct[1], "Jerry"],
			correct: correct[1],
		},
		{
			question: "What is Jerry's apartment number?",
			answers: [correct[2],"5B", "5C", "5D"],
			correct: correct[2],
		},
		{
			question: "What occupation does George like to pretend he has?",
			answers: ["Marine Biologist", "Latex Salesman", correct[3], "Hand Model"],
			correct: correct[3],
		},	
		{
			question:  "What was Kramer's fake doctor name?",
			answers: ["Dr. Vandelay", correct[4], "Dr. Whatley", "Dr. Reston"],
			correct: correct[4],
		},
	]
	// Change Question 
	function changeQuestion(quiz){
		$(".question-title p").text(quiz);
	}

	// Change Answer
	function changeAnswers(quiz) {
	// To Do ask Martin about string concat misc
		$(".answer-1").html("<input type='radio' name='answer' value="+quiz.answers[0]+">" + quiz.answers[0]);
		$(".answer-2").html("<input type='radio' name='answer' value="+quiz.answers[1]+">" + quiz.answers[1]);
		$(".answer-3").html("<input type='radio' name='answer' value="+quiz.answers[2]+">" + quiz.answers[2]);
		$(".answer-4").html("<input type='radio' name='answer' value="+quiz.answers[3]+">" + quiz.answers[3]);
	}

	function userAnswer() {
		var input = $("input[name='answer']:checked").val();
		for (var i = 0; i < quiz.length; i++){
			if (input === quiz[i].correct) {
				console.log("correct");
				finalScore();
			} 
		}
	}
	function displayResults() {
		console.log("You got" + " " + score + " " + "out of 5 correct!");
	}
	//Question and Answer Functions
	function questionAnswer(i) {
		var question = quiz[i];
		changeQuestion(question.question);
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
		userAnswer();
		questionAnswer(i);
		questionCounter();
		displayResults();
		e.preventDefault();
	})

	questionAnswer(0);

	// function validateAnswer(){
	// 	var input = $("input[name='answer']:checked").val();
	// 	if(input === quiz[0].correct) {
	// 		console.log("correct")
	// 		finalScore();
	// 	} else if (input === quiz[1].correct) {
	// 		console.log("correct");
	// 		finalScore();
	// 	} else if (input === quiz[2].correct) {
	// 		console.log("correct");
	// 		finalScore();
	// 	} else if (input === quiz[3].correct) {
	// 		console.log("correct");
	// 		finalScore();
	// 	} else if (input == quiz[4].correct) {
	// 		console.log("correct");
	// 		finalScore();
	// 	} else {
	// 		console.log("wrong");
	// 	}
	// }
});
