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
    })

    client.send("Welcome!");
})

server.listen(8080);
