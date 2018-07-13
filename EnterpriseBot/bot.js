//PACKAGES
var Twit = require('twit');
var config = require('./config');

//AUTHENTICATION TO TWITTER
var T = new Twit(config);

//INTERVAL
setInterval(tweetIt, 1000*60*60*9);
//RUN FUNCTION
tweetIt();
//FUNCTION
function tweetIt() {
    //Generate a topic randomly
    var qTopics = [
        'cybersecurity', 
        '#internetofthings, Internet of Things', 
        "#bigdata", 
        'managed network services', 
        '#iot', 
        '#cybersecurity',
        'new technology',
        '#technology',
        'Malware',
        'Ransomeware',
        '#netneutrality',
        'Net Neutrality',
        'Cyber Risk',
        'Blockchain',
        '#hacked',
        'Data Breach, #hacked',
        'Steve Wozniak, #netneutrality',
        'Elon Musk, technology',
        'Microsoft, GitHub',
    ];
    var num = Math.floor(Math.random() * Math.floor(qTopics.length));
    var qTopic = qTopics[num];
    var params = {
        q: qTopic,
        lang: 'en',
        result_type: 'recent',
        count: 1,
        }
    //GET posts to RETWEET based on topic
    T.get('search/tweets', params, gotData);
    function gotData(err, data, response) {
        var retweetId = data.statuses[0].id_str;
                //POST/RETWEET 
            T.post('statuses/retweet/:id', {id: retweetId}, function(err, response) {
                if (response) {
                    console.log('Retweet Success');
                }
                if (err) {
                    console.log('Error');
                }

                });
        }

    }
//currently file gets a post about a randomy selected topic from the list
//the program retweets the content with no message.

//DOES NOT:
    //retweet with comment

