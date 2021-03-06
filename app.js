require("dotenv").config();

const { server, wsServer } = require("./lib/server");
const twitterStream = require("./lib/twitter");

twitterStream.on("error", error => {
    console.error(error);
});

wsServer.on("connection", client => {
    console.log("new client connection");

    client.on("message", message => {
        const msgTransformed = JSON.parse(message);

        if (msgTransformed.type === "start") {
            twitterStream.resume()
        } else if (msgTransformed.type === "stop") {
            twitterStream.pause()
        } else {
            console.log(msgTransformed.text);
        }
    });

    client.send("Welcome!");

    twitterStream.on("data", tweet => {
        client.send(tweet);
    })
});

server.listen(8080);
