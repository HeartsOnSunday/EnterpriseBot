//PACKAGES
var Twit = require('twit');
var config = require('./config');

//AUTHENTICATION TO TWITTER
var T = new Twit(config);

//INTERVAL
setInterval(tweetIt, 1000*60*60*2);
//RUN FUNCTION
tweetIt();
//FUNCTION
function tweetIt() {
    //Generate a topic randomly
    var qTopics = [
        'cybersecurity',
        'cybersecurity, #infograph', 
        '#iot, Internet of Things',
        'internet of things, #infograph', 
        '#bigdata',
        'big data, #infograph', 
        'managed network services', 
        '#iot', 
        '#cybersecurity',
        'new technology',
        '#technology',
        'technology, #infograph',
        'Malware',
        'Malware, #infograph',
        'Ransomeware',
        'Ransomeware, #infographic',
        '#netneutrality',
        'Net Neutrality',
        'Cyber Risk',
        'Cyber risk, #infographic',
        'Blockchain',
        '#hacked',
        'Data breach, #infograph',
        'Steve Wozniak, #netneutrality',
        'Elon Musk, technology',
        'Microsoft, GitHub',
        'Agile',
        '#agile',
        'Agile software development',
        'Deep Learning',
        'Business intelligence',
        'Machine Learning',
        '#infosec',
        '#iiot',
        '#Emergingtechnologies',
        '#4IR',
        '4th Industrial Revolution',


    ];
    var num = Math.floor(Math.random() * Math.floor(qTopics.length));
    var qTopic = qTopics[num];
    var params = {
        q: qTopic,
        lang: 'en',
        result_type: 'recent',
        count: 1,
        }
        console.log(params);
    //GET posts to RETWEET based on topic
    T.get('search/tweets', params, gotData);
    function gotData(err, data, response) {
        if(data /*.statuses[0].id_str*/ == 'undefined'){
            console.log('null option');
            tweetIt();
        } else {
            console.log(data.statuses[0].id_str);
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

    }
//currently file gets a post about a randomy selected topic from the list
//the program retweets the content with no message.
r
//DOES NOT:
    //retweet with comment

