Math.js;

var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var words = ["cat", "dog", "cars", "bagel", "moose", "plane", "gator", "glasses", "apple", "shoe"];

var wordSearch = [];

for(var i = 0; i < 10; i++){
  wordSearch[i] = [];
}

for (var x = 0; x < 6; x++){
  //var wordLocation = (Math.floor(Math.random() * 10));
  
  do {
      var wordLocation = (Math.floor(Math.random() * 10));
      var word = words[wordLocation];
  } while (words[wordLocation] == null);

  //var orient = 1;
  var orient = (Math.floor(Math.random() * 2) + 1);

  words[wordLocation] = null;

  var bool = true;

  switch(orient) {
      case 1:
            //Horizontal
            
            while (bool){
              bool = false;
              do{
                var row = (Math.floor(Math.random() * 9));
                //var col = (Math.floor(Math.random() * 3));
                var col = (Math.floor(Math.random() * (10 - word.length)));               
              } while (wordSearch[row][col] != null);

              for (var _col = col; _col < word.length; _col++){
                if (wordSearch[row][_col] != null){
                  bool = true;
                  break;
                }

              }
              if (bool == false){
                wordSearch[row][col] = word.charAt(0);

                for (var char = 1; char < word.length; char++){
                  wordSearch[row][++col] = word.charAt(char);
                }
              }
            }
          break;
      case 2:
          //vertical
          while (bool){
               bool = false;
              do{
                var col = (Math.floor(Math.random() * 9));
                var row = ((Math.floor(Math.random() * (10 - word.length))));               
              } while (wordSearch[row][col] != null);

              for (var _row = row; _row < word.length; _row++){
                if (wordSearch[_row][col] != null){
                  bool = true;
                  break;
                }

              }
              if (bool == false){
                wordSearch[row][col] = word.charAt(0);

                for (var char = 1; char < word.length; char++){
                  wordSearch[++row][col] = word.charAt(char);
                }
              }
            }
          break;
        case 3:
          //diagnol
          while (bool){
              bool = false;
              do{
                var col = ((Math.floor(Math.random() * (10 - word.length))));
                var row = ((Math.floor(Math.random() * (10 - word.length))));               
              } while (wordSearch[row][col] != null);

              for (var drow = row, dcol = col; drow < word.length || dcol < word.length; drow++, dcol++){
                if (wordSearch[drow][dcol] != null){
                  bool = true;
                  break;
                }

              }
              if (bool == false){
                wordSearch[row][col] = word.charAt(0);

                for (var char = 1; char < word.length; char++){
                  wordSearch[++row][++col] = word.charAt(char);
                }
              }
            }
          break;
      default:
          break;
  }
}

do {
      wordLocation = Math.floor(Math.random() * 49);
    } while (words[wordLocation] == null);

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (var q = 0; q < 10; q++){
  for (var p = 0; p < 10; p++){
    if (wordSearch[q][p] == null){
      var letLocation = Math.floor(Math.random() * 26);
      wordSearch[q][p] = letters[letLocation];
    }
  }
}

function toString(wordSearch){
  var string = "";

  for (var prow = 0; prow < 10; prow++){
    for (var pcol = 0; pcol < 10; pcol++){
      string += wordSearch[prow][pcol] + " ";
    }
    string += "\n";
  }

  return string;
}

var writeTweet = function(wordSearch) {
  console.log(wordSearch);
    Twitter.post('statuses/update', {
        status: "Check out the Word Search of the Day (Find 6 words)\n" + toString(wordSearch)
    }, function(err, data, response) {
        console.log(data)
    });
}

writeTweet(wordSearch);

//setInterval(writeTweet, 30000);
