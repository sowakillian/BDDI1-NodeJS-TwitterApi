const request = require("request");
const tweetSplitter = require("./utils/tweetSplitter");
const tweetParser = require("./utils/tweetParser");
const tweetLogger = require("./utils/tweetLogger");
const tweetSorter = require("./utils/tweetSorter");

const httpStream = request.get(`${process.env.TWITTER_API_STREAM_URL}/statuses/filter.json?track=samsung,apple,huawei,xiaomi,honor,sony,lg`, {
    oauth: {
        consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
        token: process.env.TWITTER_API_TOKEN,
        token_secret: process.env.TWITTER_API_TOKEN_SECRET
    }
});

const tweetStream = httpStream
    .pipe(tweetSplitter)
    .pipe(tweetParser)
    .pipe(tweetSorter);

module.exports = tweetStream;
