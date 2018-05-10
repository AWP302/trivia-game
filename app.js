$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Scenario: You are walking along a crowded subway platform. Someone is walking towards you checking to see whether their latest instagram is trending. What do you do?',
	possibleAnswers : ['A. Politely and cautiously move out of their way.',
				 'B. Politely say "excuse me" to alert them of an impending colision.',
				 'C. Stop dead to avoid a collision and give them some side-eye.',
				 'D. Keep walking and knock them onto the tracks.'],
	flags : [false, false, false, true],
	
};

var q2 = {
	question: 'What is the only appropriate thing to wear on your back on a crowded subway train?',
	possibleAnswers: ['A. A knapsack',
				 'B. A Foodora delivery bag',
				 'C. My newspaper. If you insist on taking up so much space them I am going to use you as my desktop.',
				 'D. Cosplay angel wings'],
	flags : [false, false, true, false],
	
};

var q3 = {
	question: 'Scenario: You are approaching your stop. At least two people are standing in the doorway and clearly do not intend to move to let you off the train. What do you do?',
	possibleAnswers: ['A. Glare at them',
				 'B. Remind them that you have to be an idiot to miss your stop.',
				 'C. When the door opens, push them onto the platform.',
				 'D. All of the above.'],
	flags : [false, false, false, true],
	
};






var questionArray = [q1, q2, q3];

function loadQuestion(questionSelection) {
	
	// countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

// function getAnswer() {

// //  nextQuestion();
// 	$('.answerchoice').on('click', function() {
// 	  console.log('alert', index);
// 		index++;
// 		console.log('click', index);
// 		$(".question").text('');
// 		$("#buttonA").text('');
// 		$("#buttonB").text('');
// 		$("#buttonC").text('');
// 		$("#buttonD").text('');
// 		loadQuestion();
// 	})
// }

function answerCorrect() {
	correct++;
	}

function answerWrong() {
	wrong++;
	}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


	$('#start').click(countdownTimer.start);
});
