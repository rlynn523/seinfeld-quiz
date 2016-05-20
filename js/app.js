$(document).ready(function() {
	var quiz = {
		correct: ["Monk's","Cosmo", "5A", "Architect", "Dr. Van Nostrand"],
		wrong: ["Mendy's", "Reggie's", "Dream Cafe", "Carl", "John", "Jerry", "5B", "5C", "5D", "Marine Biologist", "Latex Salesman", "Hand Model", "Dr. Vandelay", "Dr. Whatley", "Dr. Reston"],
		questions: ["What is the name of the gang's coffee shop hangout?", "What is Kramer's real name?","What is Jerry's apartment number?", "What occupation does George like to pretend he has?", "What was Kramer's fake doctor name?"]
	}
	var questionOne = {
		question: quiz.questions[0],
		correctAnswer: quiz.correct[0],
		wrongOne: quiz.wrong[0],
		wrongTwo: quiz.wrong[1],
		wrongThree: quiz.wrong[2],
	}
	// function changeQuestion() {
	// 	$(".question-title p").text(questionOne.question);
	// 	$(".answer-1").text(questionOne.wrongOne);
	// 	$(".answer-2").text(questionOne.wrongTwo);
	// 	$(".answer-3").text(questionOne.correctAnswer);
	// 	$(".answer-4").text(questionOne.wrongThree);
	// }

	var questionTwo = {
		question: quiz.questions[1],
		correctAnswer: quiz.correct[1],
		wrongOne: quiz.wrong[3],
		wrongTwo: quiz.wrong[4],
		wrongThree: quiz.wrong[5]
	}
	var questionThree = {
		question: quiz.questions[2],
		correctAnswer: quiz.correct[2],
		wrongOne: quiz.wrong[6],
		wrongTwo: quiz.wrong[7],
		wrongThree: quiz.wrong[8]
	}
	var questionFour = {
		question: quiz.questions[3],
		correctAnswer: quiz.correct[3],
		wrongOne: quiz.wrong[9],
		wrongTwo: quiz.wrong[10],
		wrongThree: quiz.wrong[11]
	}
	var questionFive = {
		question: quiz.questions[4],
		correctAnswer: quiz.correct[4],
		wrongOne: quiz.wrong[12],
		wrongTwo: quiz.wrong[13],
		wrongThree: quiz.wrong[14]
	}

	var questionObjects = [questionOne, questionTwo, questionThree, questionFour, questionFive]
	console.log(questionObjects[0]);

	$("input[type='radio'].radioOne").click(function(){
		alert("yay");
	})

	// var i = 1
	// function questionCounter() {
	// 	$(".counter").text(++i);
	// }
	// changeQuestion();

	$(".submit").click(function(){
		alert("submit");
	})
});