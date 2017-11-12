Math.js;

var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var words = [];


var wordSearch = new Array [10][10];
}

for (var x = 0; x < 6; x++){
	var word = words[Math.floor(Math.random() * 49)];
	var orient = (Math.floor(Math.random() * 3) + 1) / 1;

	switch(orient) {
    	case 1:
      	  	//Horizontal
      	  	var row = (Math.floor(Math.random() * 9);
      	  	for (var col = ((Math.floor(Math.random() * (10 - word.length))); col < 10; col++){
      	  		for (var char = 0; char < word.length; char++){
      	  			wordSearch[row][col] = word.charAt(char);
      	  		}
      	  	}
        	break;
    	case 2:
       	 	//vertical
       	 	var col = (Math.floor(Math.random() * 9);
      	  	for (var row = ((Math.floor(Math.random() * (10 - word.length))); row < 10; row++){
      	  		for (var char = 0; char < word.length; char++){
      	  			wordSearch[row][col] = word.charAt(char);
      	  		}
      	  	}
        	break;
        case 3:
       	 	//diagnol
       	 	for (var row = ((Math.floor(Math.random() * (10 - word.length))); row < 10; row++){
       	 		for (var col = ((Math.floor(Math.random() * (10 - word.length))); col < 10; col++){
       	 			
       	 		}
       	 	}



        	break;
    	default:
        	break;
}

}
if (word.length 



var messageLocation = Math.floor(Math.random() * 49);

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: "Check out the Song of the Day " + messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    
    messages[messageLocation] = null;

    do {
    	messageLocation = Math.floor(Math.random() * 49);
    } while (messages[messageLocation] == null);
}

writeTweet()

setInterval(writeTweet, 30000);
