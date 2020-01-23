require("dotenv").config();

const { server, wsServer } = require("./lib/server");
const twitterStream = require("./lib/twitter");

twitterStream.on("error", error => {
    console.error(error);
});

wsServer.on("connection", client => {
    console.log("new client connection");

    client.on("message", message => {
        console.log("message from client: ", message);
    });

    client.send("Welcome!");

    twitterStream.on("data", tweet => {

        const sendTweetToClient = (brand) => {
            const tweetSorted = {
                brand: brand,
                tweet: tweet.text
            };
            client.send(JSON.stringify(tweetSorted));
        };

        if (tweet.text.includes('apple')) {
            sendTweetToClient('apple')
        } else if (tweet.text.includes('samsung')) {
            sendTweetToClient('samsung');
        } else if (tweet.text.includes('huawei')) {
            sendTweetToClient('huawei');
        } else if (tweet.text.includes('xiaomi')) {
            sendTweetToClient('xiaomi');
        }

    })
});

server.listen(8080);
