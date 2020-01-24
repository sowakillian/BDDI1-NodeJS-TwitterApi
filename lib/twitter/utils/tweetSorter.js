const { Transform } = require("stream");

const tweetSorter = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
        let tweetSorted = null;

        try {
            //data = JSON.parse(chunk);
            const constructTweetSorted = (brand) => {
                const tweet = {
                    brand: brand,
                    tweet: chunk.text
                };
                tweetSorted = JSON.stringify(tweet);
            };

            if (chunk.text.includes('apple')) {
                constructTweetSorted('apple')
            } else if (chunk.text.includes('samsung')) {
                constructTweetSorted('samsung');
            } else if (chunk.text.includes('huawei')) {
                constructTweetSorted('huawei');
            } else if (chunk.text.includes('xiaomi')) {
                constructTweetSorted('xiaomi');
            } else if (chunk.text.includes('honor')) {
                constructTweetSorted('honor');
            } else if (chunk.text.includes('sony')) {
                constructTweetSorted('sony');
            } else if (chunk.text.includes('lg')) {
                constructTweetSorted('lg');
            }

        } catch (error) {
            console.error("error constructing tweet sorted: ", chunk);
            this.emit("error", error);
        }

        if (tweetSorted != null) {
            this.push(tweetSorted);
        }

        callback();
    }
});

module.exports = tweetSorter;
