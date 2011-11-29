var a = 5;

function newPrompt(){
	// Immediately generate, display, and log new prompt
	var newNumber = 65 + Math.floor(Math.random()*25);
	var newChar   =  String.fromCharCode(newNumber);
	
	$('#prompt').text(newChar);
	
	$('#log').append('<br/>' + +new Date() + ", prompt, " + newChar);
}

$('#input').keydown(
    function(e) {
				// Log key press
        console.log(e.timeStamp);
        console.log(e.keyCode);
				$('#log').append('<br/>' + e.timeStamp + ", press, " + e.keyCode);
				
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
		$('#input').val('');
		// Initiate task
		newPrompt();
	}
);