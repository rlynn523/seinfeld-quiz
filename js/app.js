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
		changeQuestion: function() {
			$(".question-title p").text(questionOne.question);
			$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + questionOne.wrongOne);
			$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + questionOne.wrongTwo);
			$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + questionOne.correctAnswer);
			$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + questionOne.wrongThree);
		}
	}
	var questionTwo = {
		question: quiz.questions[1],
		correctAnswer: quiz.correct[1],
		wrongOne: quiz.wrong[3],
		wrongTwo: quiz.wrong[4],
		wrongThree: quiz.wrong[5],
		changeQuestion: function() {
			$(".question-title p").text(questionTwo.question);
			$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + questionTwo.wrongOne);
			$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + questionTwo.correctAnswer);
			$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + questionTwo.wrongOne);
			$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + questionTwo.wrongThree);
		}
	}
	var questionThree = {
		question: quiz.questions[2],
		correctAnswer: quiz.correct[2],
		wrongOne: quiz.wrong[6],
		wrongTwo: quiz.wrong[7],
		wrongThree: quiz.wrong[8],
		changeQuestion: function() {
			$(".question-title p").text(questionThree.question);
			$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + questionThree.correctAnswer);
			$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + questionThree.wrongOne);
			$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + questionThree.wrongTwo);
			$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + questionThree.wrongThree);
		}
	}
	var questionFour = {
		question: quiz.questions[3],
		correctAnswer: quiz.correct[3],
		wrongOne: quiz.wrong[9],
		wrongTwo: quiz.wrong[10],
		wrongThree: quiz.wrong[11],
		changeQuestion: function() {
			$(".question-title p").text(questionFour.question);
			$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + questionFour.wrongOne);
			$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + questionFour.correctAnswer);
			$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + questionFour.wrongTwo);
			$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + questionFour.wrongThree);
		}
	}
	var questionFive = {
		question: quiz.questions[4],
		correctAnswer: quiz.correct[4],
		wrongOne: quiz.wrong[12],
		wrongTwo: quiz.wrong[13],
		wrongThree: quiz.wrong[14],
		changeQuestion: function() {
			$(".question-title p").text(questionFive.question);
			$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + questionFive.correctAnswer);
			$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + questionFive.wrongTwo);
			$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + questionFive.wrongOne);
			$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + questionFive.wrongThree);
		}
	}

	var questionObjects = [questionOne, questionTwo, questionThree, questionFour, questionFive]
	
	$(".submit").click(function() {
		questionTwo.changeQuestion();
		questionCounter();
		console.log("submit");
	})
	$(".submit").click(function() {
		questionThree.changeQuestion();
		questionCounter();
	});	

	var i = 1
	function questionCounter() {
		$(".counter").text(++i);
	}
});