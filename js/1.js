var currChar;
var currStart;
var keyPresses = new Array();


function newPrompt(){
	// Immediately generate, display, and log new prompt
	var newNumber = 65 + Math.floor(Math.random()*25);
	currChar      = String.fromCharCode(newNumber);
	currStart     = +new Date()
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
				var correctness = (currChar == pressed) ? "success" : "error"
				$('#log').prepend('<div class="alert-message log-entry '+ correctness +'">' + e.timeStamp + ", press, " + pressed + "</div>");
				
				keyPresses.push({key: pressed, prompt: currChar, correct: (correctness === "success"),
								         start: currStart, end: e.timeStamp, delay: (e.timeStamp - currStart)});
				
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

