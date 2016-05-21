$(document).ready(function() {
	var quiz = {
		correct: ["Monk's","Cosmo", "5A", "Architect", "Dr. Van Nostrand"],
		wrong: ["Mendy's", "Reggie's", "Dream Cafe", "Carl", "John", "Jerry", "5B", "5C", "5D", "Marine Biologist", "Latex Salesman", "Hand Model", "Dr. Vandelay", "Dr. Whatley", "Dr. Reston"],
		questions: ["What is the name of the gang's coffee shop hangout?", "What is Kramer's real name?","What is Jerry's apartment number?", "What occupation does George like to pretend he has?", "What was Kramer's fake doctor name?"]
	}
	
	// Change Question 
	function changeQuestion (questions) {
			$(".question-title p").text(questions);
		}

	function changeAnswersOne() {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.correct[0]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.wrong[0]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.wrong[1]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.wrong[2]);
		changeQuestion(quiz.questions[0]);
		questionCounter();
		console.log("questionOne");
	}
	function changeAnswersTwo() {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.wrong[4]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.wrong[3]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.correct[1]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.wrong[5]);
		changeQuestion(quiz.questions[1]);
		console.log("questionTwo");
	}
	function changeAnswersThree() {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.wrong[7]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.wrong[8]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.wrong[6]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.correct[2]);
		changeQuestion(quiz.questions[2]);
		console.log("questionThree");
	}
	function changeAnswersFour() {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.correct[3]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.wrong[10]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.wrong[11]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.wrong[9]);
		changeQuestion(quiz.questions[3]);
		console.log("questionFour");
	}
	function changeAnswersFive() {
		$(".answer-1").html("<input type='radio' name='answer' class='radioOne'/>" + quiz.wrong[12]);
		$(".answer-2").html("<input type='radio' name='answer' class='radioTwo'/>" + quiz.correct[4]);
		$(".answer-3").html("<input type='radio' name='answer' class='radioThree'/>" + quiz.wrong[14]);
		$(".answer-4").html("<input type='radio' name='answer' class='radioFour'/>" + quiz.wrong[13]);
		changeQuestion(quiz.questions[4]);
		console.log("questionFive");
	}
	

	var i = 1
	function questionCounter() {
		$(".counter").text(++i);
	}
	changeAnswersOne();
});
