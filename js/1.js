// Hide chart and log to start
$('#chart').hide();
$('#log').hide();

var charting = true;
// Chart variable should be "chart". chart.series[0] is green and chart.series[1] is red
// Add a point to them with chart.series[0].addPoint(5,3)

var currChar;
var currStart;
var loadTime = +new Date();
var keyPresses = new Array();

function newPrompt(){
	// Immediately generate, display, and log new prompt
	var newNumber = 65 + Math.floor(Math.random()*25);
	currChar      = String.fromCharCode(newNumber);
	currStart     = +new Date();
	$('#prompt').text(currChar);
	
	$('#log').prepend('<div class="alert-message log-entry ">' + currStart + ", prompt, " + currChar + "</div>");
}

$('#input').keypress(
    function(e) {
				// Log key press
				var keyCode = e.keyCode || e.which
        console.log(e.timeStamp);
        console.log(keyCode);
				var pressed = String.fromCharCode(keyCode).toUpperCase();
				var correct = (currChar == pressed)
				var correct_class = correct ? "success" : "error"
				var correct_chart = correct ? 0 : 1
				
				var delay = e.timeStamp - currStart;
				
				$('#log').prepend('<div class="alert-message log-entry '+ correct_class +'">' + e.timeStamp + ", press, " + pressed + "</div>");
				
				keyPresses.push({key: pressed, prompt: currChar, correct: correct,
								         start: currStart, end: e.timeStamp, delay: delay});
				if(charting){
					chart.series[correct_chart].addPoint({x: (currStart - loadTime), y: delay, name: pressed})
				}
				
				newPrompt();
    }
);

$('#input').keyup(
    function(e) {
				$('#input').val('');
    }
);

$('#input').click(
	function(e) {
		if(!currChar) {
			$('#input').val('Press Spacebar to begin.');
		}
	}
);

