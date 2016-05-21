$(document).ready(function() {
	var quiz = [
		{
			question: "What is the name of the gang's coffee shop hangout?",
			answers: ["Mendy\'s", "Reggie\'s", "Dream Cafe", "Monk\'s"]
		},
		{
			question: "What is Kramer's real name?",
			answers: ["Carl", "John", "Cosmo", "Jerry"]
		},
		{
			question: "What is Jerry's apartment number?",
			answers: ["5A","5B", "5C", "5D"]
		},
		{
			question: "What occupation does George like to pretend he has?",
			answers: ["Marine Biologist", "Latex Salesman", "Architect", "Hand Model"]
		},
		{
			question:  "What was Kramer's fake doctor name?",
			answers: ["Dr. Vandelay", "Dr. Van Nostrand", "Dr. Whatley", "Dr. Reston"]
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

	//Question and Answer Functions
	function questionAnswer(i) {
		var question = quiz[i];
		changeQuestion(question.question);
		changeAnswers(question);
	}
	
	function validateAnswer(){
		var input = $("input[name='answer']:checked").val();
		if(input === quiz[0].answers[3]) {
			alert("correct!");
			console.log(input)
		} else if (input === quiz[1].answers[2]) {
			alert("correct!");
			console.log(input);
		} else if (input === quiz[2].answers[0]) {
			alert("correct!");
			console.log(input);
		} else if (input === quiz[3].answers[2]) {
			alert("correct!");
			console.log(input);
		} else if (input === quiz[4].answers[1]) {
			alert("correct!");
			console.log(input);
		} else {
			alert("wrong!");
			console.log(input);
		}
	}
	$("form").submit(function(e){
		e.preventDefault();
		validateAnswer();
		questionAnswer(i);
		questionCounter();
	})

	var i = 1
	function questionCounter() {
		$(".counter").text(++i);
		console.log("counter");
	}
	questionAnswer(0);
});
