const { Transform } = require("stream");

const tweetSorter = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
        let tweetSorted = null;

        try {
            const constructTweetSorted = (brand) => {
                const tweet = {
                    brand: brand,
                    tweet: chunk.text
                };
                tweetSorted = JSON.stringify(tweet);
            };

            const tweetText = chunk.text;
            const findTerm = (brand) => {
                if (tweetText.includes(brand)){
                    return tweetText;
                }
            };

            switch (tweetText) {
                case findTerm('apple'):
                    constructTweetSorted('apple');
                    break;
                case findTerm('samsung'):
                    constructTweetSorted('samsung');
                    break;
                case findTerm('huawei'):
                    constructTweetSorted('huawei');
                    break;
                case findTerm('xiaomi'):
                    constructTweetSorted('xiaomi');
                    break;
                case findTerm('honor'):
                    constructTweetSorted('honor');
                    break;
                case findTerm('sony'):
                    constructTweetSorted('sony');
                    break;
                case findTerm('lg'):
                    constructTweetSorted('lg')
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
