var a = 5;
var currChar;
function newPrompt(){
	// Immediately generate, display, and log new prompt
	var newNumber = 65 + Math.floor(Math.random()*25);
	currChar      =  String.fromCharCode(newNumber);
	
	$('#prompt').text(currChar);
	
	$('#log').prepend('<div class="alert-message log-entry ">' + +new Date() + ", prompt, " + currChar + "</div>");
}

$('#input').keypress(
    function(e) {
				// Log key press
        console.log(e.timeStamp);
        console.log(e.keyCode);
				var pressed = String.fromCharCode(e.keyCode || e.which).toUpperCase();
				var correctness = (currChar == pressed) ? "success" : "error"
				$('#log').prepend('<div class="alert-message log-entry '+ correctness +'">' + e.timeStamp + ", press, " + pressed + "</div>");
				
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