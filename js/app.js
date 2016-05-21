$(document).ready(function() {
	var quiz = [
		questionOne = {
			question: "What is the name of the gang's coffee shop hangout?",
			correctAnswer: "Monk's",
			wrongAnswers: ["Mendy's", "Reggie's", "Dream Cafe"]
		},
		questionTwo = {
			question: "What is Kramer's real name?",
			correctAnswer: "Cosmo",
			wrongAnswers: ["Carl", "John", "Jerry"]
		},
		questionThree = {
			question: "What is Jerry's apartment number?",
			correctAnswer: "5A",
			wrongAnswers: ["5B", "5C", "5D"]
		},
		questionFour = {
			question: "What occupation does George like to pretend he has?",
			correctAnswer: "Architect",
			wrongAnswers: ["Marine Biologist", "Latex Salesman", "Hand Model"]
		},
		questionFive = {
			question:  "What was Kramer's fake doctor name?",
			correctAnswer: "Dr. Van Nostrand",
			wrongAnswers: ["Dr. Vandelay", "Dr. Whatley", "Dr. Reston"]
		}
	]

	// Change Question 
	function changeQuestion(quiz){
		$(".question-title p").text(quiz);
		console.log("change");
		}
	
	function changeAnswers(quiz) {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.wrongAnswers[0]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.wrongAnswers[1]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.wrongAnswers[2]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.correctAnswer);
		console.log("questionOne");
	}
	function questionAnswerOne() {
		changeQuestion(quiz[0].question);
		changeAnswers(questionOne);
	}
	function questionAnswerTwo() {
		changeQuestion(quiz[1].question);
		changeAnswers(questionTwo);
	}
	function questionAnswerThree(){
		changeQuestion(quiz[2].question);
		changeAnswers(questionThree);
	}
	function questionAnswerFour() {
		changeQuestion(quiz[3].question);
		changeAnswers(questionFour);
	}
	function questionAnswerFive() {
		changeQuestion(quiz[4].question);
		changeAnswers(questionFive);
	}
	questionAnswerFive();
	// var i = 1
	// function questionCounter() {
	// 	$(".counter").text(++i);
	// }
	// changeAnswersOne();
});
