/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	$(document).ready(function() {
		var score = 0;
		var i = 1;
		var quiz_model = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./quiz-app/quiz_model\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
		};
		// Submit Answers
		$("form").submit(function(e) {
			e.preventDefault();
			quiz_model.userAnswer();
			$(".quiz-form .answer").replaceWith(quiz_model.questionAnswer(i));
			quiz_model.questionCounter();
		});

		$(".question-answer").on("click", ".new-game", function(){
			quiz_model.newGame();
		});
		quiz_model.questionAnswer(0);
		quiz_model.submitButton();
	});

/***/ }
/******/ ]);