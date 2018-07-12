var Twit = require('twit');
var config = require('./config');

//AUTHENTICATION TO TWITTER
var T = new Twit(config);

//GET posts to RETWEET
var date = 2018-01-01;
var params = {
    q: 'cybersecurity since:2018-01-01',
    count: 1,
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
        //console.log(data);
        T.post('statuses/retweet', data, doRetweet);
            /*function doRetweet(err, data., response) {
                if (err) {
                    console.log('something is wrong with callback');
                } else {
                    console.log(data);

            */
           
            }
        }
    }
