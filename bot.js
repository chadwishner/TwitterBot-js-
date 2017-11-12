Math.js;

var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["https://open.spotify.com/track/7wGoVu4Dady5GV0Sv4UIsx", "https://open.spotify.com/track/43ZyHQITOjhciSUUNPVRHc", 
"https://open.spotify.com/track/0ofbQMrRDsUaVKq2mGLEAb", "https://open.spotify.com/track/75ZvA4QfFiZvzhj2xkaWAh",
"https://open.spotify.com/track/1mXVgsBdtIVeCLJnSnmtdV", "https://open.spotify.com/track/5tz69p7tJuGPeMGwNTxYuV", 
"https://open.spotify.com/track/2fQrGHiQOvpL9UgPvtYy6G", "https://open.spotify.com/track/7sO5G9EABYOXQKNPNiE9NR",
"https://open.spotify.com/track/2Xqd0wUttjueBfdcltADOv", "https://open.spotify.com/track/4dVpf9jZjcORqGTLUaeYj9",
"https://open.spotify.com/track/3hBBKuWJfxlIlnd9QFoC8k", "https://open.spotify.com/track/1YZfcVLbbJwfizR5cDOp3q",
"https://open.spotify.com/track/7GX5flRQZVHRAGd6B4TmDO", "https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY",
"https://open.spotify.com/track/2771LMNxwf62FTAdpJMQfM", "https://open.spotify.com/track/1XRgIKC5TPwo7nWGyKqgG0",
"https://open.spotify.com/track/7EmGUiUaOSGDnUUQUDrOXC", "https://open.spotify.com/track/6mrKP2jyIQmM0rw6fQryjr",
"https://open.spotify.com/track/5b2QnYcT9rQIkhRWt4HztQ", "https://open.spotify.com/track/5u6vkDnOyaf8LsteDAj2ub",
"https://open.spotify.com/track/3a1lNhkSLSkpJE4MSHpDu9", "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
"https://open.spotify.com/track/2ekn2ttSfGqwhhate0LSR0", "https://open.spotify.com/track/42CeaId2XNlxugDvyqHfDf",
"https://open.spotify.com/track/7vGuf3Y35N4wmASOKLUVVU", "https://open.spotify.com/track/3m660poUr1chesgkkjQM7P",
"https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS", "https://open.spotify.com/track/7y9iMe8SOB6z3NoHE2OfXl",
"https://open.spotify.com/track/0tDfp0vFR95Gg6Mrhza3lX", "https://open.spotify.com/track/3B54sVLJ402zGa6Xm4YGNe",
"https://open.spotify.com/track/5AEtlRudpgdT5FtNiuly6Y", "https://open.spotify.com/track/1yxgsra98r3qAtxqiGZPiX",
"https://open.spotify.com/track/40oKW22ZNNkEdZLJTScaQI", "https://open.spotify.com/track/6QgjcU0zLnzq5OrUoSZ3OK",
"https://open.spotify.com/track/7iDa6hUg2VgEL1o1HjmfBn", "https://open.spotify.com/track/6gBFPUFcJLzWGx4lenP6h2",
"https://open.spotify.com/track/7m9OqQk4RVRkw9JJdeAw96", "https://open.spotify.com/track/2eAZfqOm4EnOF9VvN50Tyc",
"https://open.spotify.com/track/7DsX5K72fewVGb47qj7Tbg", "https://open.spotify.com/track/0tKcYR2II1VCQWT79i5NrW",
"https://open.spotify.com/track/32DGGj6KlNuBr6WaqRxpxi", "https://open.spotify.com/track/1f5cbQtDrykjarZVrShaDI",
"https://open.spotify.com/track/4knL4iPxPOZjQzTUlELGSY", "https://open.spotify.com/track/152lZdxL1OR0ZMW6KquMif",
"https://open.spotify.com/track/6p8NuHm8uCGnn2Dtbtf7zE", "https://open.spotify.com/track/7AQim7LbvFVZJE3O8TYgf2",
"https://open.spotify.com/track/1j4kHkkpqZRBwE0A4CN4Yv", "https://open.spotify.com/track/6PGoSes0D9eUDeeAafB2As",
"https://open.spotify.com/track/5yuShbu70mtHXY0yLzCQLQ", "https://open.spotify.com/track/0Zbbxnx4SGGHoIow4PpISP"];

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
