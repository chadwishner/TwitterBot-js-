'use strict';

const Alexa = require('alexa-sdk');

var Twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new Twit(config);

var writeTweet = function(status) {
    Twitter.post('statuses/update', {
            status: 'testing twitter'
    }, function(err, data, response) {
        console.log(data)
            });
};

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = 'Say tweet, followed by the message you would like me to tweet';
        this.emit(':tellWithCard', speechOutput);
    },
    'tweet': function () {
        

        writeTweet();

        const speechOutput = 'You tweeted' + status;
        this.emit(':tellWithCard', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'Say tweet, followed by the message you would like me to tweet';
        const reprompt = 'Say tweet, followed by the message you would like me to tweet';
        this.emit(':tell', speechOutput, reprompt);
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
