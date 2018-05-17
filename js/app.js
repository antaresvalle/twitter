
var tweet = document.getElementById('tweet');
console.log(tweet);

var inputTweet = document.getElementById('textarea-tweet');
inputTweet.focus();

tweet.disabled = true;
tweet.style.backgroundColor = "gray";
tweet.style.cursor = "no-drop";


var counter = document.getElementById('contador');

// deshabilitar boton si el input esta vacio

inputTweet.addEventListener('input', function(){
	tweet.disabled = false;
	tweet.style.backgroundColor = "#E07692";
	tweet.style.cursor = "pointer";

	var inputLength = inputTweet.value.length;

	if(inputTweet.value.length == 0){
		console.log("input vacio");
		tweet.disabled = true;
		tweet.style.backgroundColor = "gray";
		tweet.style.cursor = "no-drop";
	}else{
		var limiteTweet = 140;

		var conteoInverso = limiteTweet - inputLength;
			var textCounter = document.createTextNode(conteoInverso);
			counter.appendChild(textCounter);

		inputTweet.addEventListener('keydown', function(){
			textCounter.textContent = '';
			console.log(textCounter);
		});
		
	}

});




//agregar un evento de click al botón
tweet.addEventListener('click', function(){

	var emptyCounter = counter.textContent = '';
	
	var getTextTweet = inputTweet.value;
	console.log(getTextTweet);

	// agregar el texto al html

	// crear div contenedor del texto
	var tweetContainer = document.getElementById('main-container');

	var tweetContent = document.createElement('div');
	tweetContent.id = 'tweet-container';
	var tweetContentP = document.createElement('p');
	var tweetTxt = document.createTextNode(getTextTweet);

	
	tweetContentP.appendChild(tweetTxt);
	tweetContent.appendChild(tweetContentP);
	tweetContainer.appendChild(tweetContent);
	tweetContentP.value = getTextTweet;
	tweetContentP.style.padding = "3em";
	console.log(tweetContent);

	// contar hacia abajo


	inputTweet.value = '';



	// deshabilitar boton si el texto esta vacio, 2da. parte

	inputTweet.addEventListener('focus', function(){
		tweet.disabled = false;
		tweet.style.backgroundColor = "#E07692";
		tweet.style.cursor = "pointer";

		if(inputTweet.value.length == 0){
			console.log("input vacio");
			tweet.disabled = true;
			tweet.style.backgroundColor = "gray";
			tweet.style.cursor = "no-drop";
		}else{
		var limiteTweet = 140;

		var conteoInverso = limiteTweet - inputLength;
			var counter = document.getElementById('contador');
			var textCounter = document.createTextNode(conteoInverso);
			counter.appendChild(textCounter);

		inputTweet.addEventListener('keydown', function(){
			textCounter.textContent = '';
			console.log(textCounter);
		});
		
	}

	});

});