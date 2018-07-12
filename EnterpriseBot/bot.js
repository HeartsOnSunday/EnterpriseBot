var Twit = require('twit');
var config = require('./config');

//AUTHENTICATION TO TWITTER
var T = new Twit(config);

//GET cybersecurity posts to RETWEET
var params = {
    q: 'cybersecurity',
    lang: 'en',
    result_type: 'recent',
    count: 1,
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
        console.log(data.statuses[0].id_str);
        var retweetId = data.statuses[0].id_str;

       T.post('statuses/retweet/:id', {id: retweetId}, function(err, response) {
        if (response) {
            console.log('Retweet Success');
        }
        if (err) {
            console.log('Error');
        }

        });
    }



    //currently file gets a post about cybersecurity and retweets it with no message
