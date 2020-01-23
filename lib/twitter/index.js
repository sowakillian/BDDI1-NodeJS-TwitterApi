const request = require("request");
const tweetSplitter = require("./utils/tweetSplitter");
const tweetParser = require("./utils/tweetParser");
const tweetLogger = require("./utils/tweetLogger");

const httpStream = request.get(`${process.env.TWITTER_API_STREAM_URL}/statuses/filter.json?track=ronaldo`, {

    oauth: {
        consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
        token: process.env.TWITTER_API_TOKEN,
        token_secret: process.env.TWITTER_API_TOKEN_SECRET
    }
});

console.log(process.env.TWITTER_API_STREAM_URL + process.env.TWITTER_API_CONSUMER_SECRET);

const tweetStream = httpStream
    .pipe(tweetSplitter)
    .pipe(tweetParser)
    .pipe(tweetLogger);

module.exports = tweetStream;
