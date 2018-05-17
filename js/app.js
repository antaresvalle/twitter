
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
	var tweetContainer = document.getElementById('tweet-container');

	var tweetContent = document.createElement('p');
	var tweetTxt = document.createTextNode(getTextTweet);

	tweetContent.appendChild(tweetTxt);
	tweetContainer.appendChild(tweetContent);
	tweetContent.value = getTextTweet;
	tweetContent.style.padding = "3em";
	console.log(tweetContent);



});