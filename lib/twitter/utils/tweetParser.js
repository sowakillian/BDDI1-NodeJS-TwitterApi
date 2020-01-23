const { Transform } = require("stream");

const parser = new Transform({
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
})

module.exports = parser;
