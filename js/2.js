// Hide chart and log to start
// $('#chart').hide();
// $('#log').hide();

var charting = true;
// Chart variable should be "chart". chart.series[0] is green and chart.series[1] is red
// Add a point to them with chart.series[0].addPoint(5,3)

var currChars = [];
var currStart;
var loadTime = +new Date();
var keyPresses = new Array();
var firstPress = null; // First keypress in a pair

function newPrompt(){
	// Immediately generate, display, and log new prompt
	// For this task, display two letters. currChars is ['A', 'B'], for example
	var newNumbers = [65 + Math.floor(Math.random()*25), 65 + Math.floor(Math.random()*25)];
	currChars      = [String.fromCharCode(newNumbers[0]), String.fromCharCode(newNumbers[1])];
	currStart      = +new Date();
	
	firstPress 		 = null;
	
	$('#prompt').text(currChars[0] + currChars[1]);
	
	$('#log').prepend('<div class="alert-message log-entry ">' + currStart + ", prompt, " + currChars[0] + currChars[1] + "</div>");
}

$('#input').keypress(
    function(e) {
				// Recognize key press
				var keyCode = e.keyCode || e.which
				var pressed = String.fromCharCode(keyCode).toUpperCase();
				var correct;
				var noPrompt = false;
				
				// Evaluate correctness
				if(firstPress){
					correct = currChars && (currChars[0] === firstPress) && (currChars[1] == pressed);
					var correct_chart = correct ? 0 : 1			
					var delay = e.timeStamp - currStart;
					
					if(charting){
						chart.series[correct_chart].addPoint({x: (currStart - loadTime), y: delay, name: currChars[0] + currChars[1] + " -> " + firstPress + pressed})
					}					
				} else {
					firstPress = pressed;
					noPrompt = true;
					correct = currChars && (currChars[0] === firstPress)
				}

				var correct_class = correct ? "success" : "error"

				// Record keypress in data array and log
				if(currChars){
					keyPresses.push({key: pressed, prompt: currChars[0] + currChars[1], correct: correct,
									         start: currStart, end: e.timeStamp, delay: delay});
				}

				$('#log').prepend('<div class="alert-message log-entry '+ correct_class +'">' + e.timeStamp + ", press, " + pressed + "</div>");
				if(!noPrompt){
					newPrompt();
				}
    }
);

$('#input').keyup(
    function(e) {
				$('#input').val('');
    }
);

$('#input').click(
	function(e) {
		if(true) {
			$('#input').val('Press Spacebar twice to begin.');
		}
	}
);

