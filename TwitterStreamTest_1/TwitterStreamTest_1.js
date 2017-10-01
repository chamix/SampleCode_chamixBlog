var Twitter = require('twitter');
var fs = require('fs');
var tweets = [];
var count = 0;

var client = new Twitter({
  consumer_key: 'fnTeajY9MggDJzHuoSiJQ',
  consumer_secret: '59eYfFG3b83hkIKqcJbRAa6mA5lxgPBrgXFnXPsHxE',
  access_token_key: '45402720-mV221Z7JpcJ6hIOPcNMQJLkSaKtCliGVlzf6q6yIu',
  access_token_secret: 'SkRJn18hkveHePX9WfMlxtr0iLgQbHK9mkp69JLYw8'
});

var stream = client.stream('statuses/filter', {track: 'Maldonado,Santiago Maldonado'});

stream.on('data', function(tweet) {
    tweets.push(tweet)
    console.log(count + ' - ' + tweet.text);
    if(count>100){
        stream.destroy();
    };
    count ++;
});

stream.on('end', function(){
    console.log("stream terminated");
    fs.writeFile('../TwitterStreamTest_1/results/r.txt',JSON.stringify(tweets),(err)=>{
        if(err){
            throw err;
        }
        console.log("file saved!");
    });
});

stream.on('error', function(error) {
  throw error;
})