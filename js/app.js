
var tweet = document.getElementById('tweet');
console.log(tweet);

var inputTweet = document.getElementById('textarea-tweet');
inputTweet.focus();


//agregar un evento de click al botón
tweet.addEventListener('click', function(){
	
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

	inputTweet.value = '';



});