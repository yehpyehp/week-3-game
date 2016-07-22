var questionlist = [
['a','p','p','l','e'],
['g','r','a','p','e'], 
['s','t','r','a','w','b','e','r','r','y'], 
['l','i','m','e'], 
['l','y','c','h','e','e']
]


var WrongCount = 0;



var question = questionlist[Math.floor(Math.random()*(questionlist.length-1))];
var letterarray = new Array(question.length);

for (var i = 0; i < letterarray.length; i++){
	letterarray[i] = "_ ";
}


	function printletter(){
	for (var i = 0; i < letterarray.length; i++){
	var letterfield = document.getElementById("letterfield");
	var text = document.createTextNode(letterarray[i]);
	letterfield.appendChild(text);
	}
}


document.onkeyup = function(event){
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		var correctguess = true;
		console.log(letter + ' printed');

			


	for (var i = 0; i < question.length; i++){
		if(question[i] ===letter){
			letterarray[i] = letter + " ";
			correctguess = true;
			console.log(correctguess);
		}
	
	}
	






	var letterfield = document.getElementById("letterfield");
	letterfield.innerHTML=""; 
	printletter();


if(!correctguess){
		var wrongguess = document.getElementById("wrongletter");
		var text = document.createTextNode(" " + letter);
		wrongletter.appendChild(text); 
		WrongCount++;
		var hangman = document.getElementById("hangman");
	    hangman.src = "assets/images/hangman" +WrongCount+ ".jpg";
	    var countfield = document.getElementById("triesleft");
	    countfield.innerHTML = "Tries Left: "+(6-WrongCount);
		}


var guess = true;
	for (var i = 0; i < letterarray.length; i++){
		if(letterarray[i] === "_ "){
			guess = false;
		}
	}
	if(guess){
		window.alert("Oh, you win!");
	}

	if(WrongCount === 6){
		window.alert("You just lost!");
	}

}




function init(){
	printletter();
}

window.onload = init;



