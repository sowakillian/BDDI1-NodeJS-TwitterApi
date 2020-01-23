const { Transform } = require("stream");

const tweetParser = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        let data = null;

        try {
            data = JSON.parse(chunk);
        } catch (error) {
            console.error("error parsing into json: ", chunk);
            this.emit("error", error);
        }

        this.push(data);

        callback();
    }
});

module.exports = tweetParser;
