# NodeJS-TwitterAPI

I developped this application during my courses of NodeJS at my school [Gobelins](https://gobelins.fr).
The aim was to develop a back-end application in NodeJS to process with the twitter feed.
This application updates automatically in real-time and there is a client to display the datas and some statistics.

## Setup

1. launch this command to get the dependencies

```bash
$ npm install
```
2. launch the app by entry point app.js
```bash
$ node app
```
3. launch [localhost:8080](localhost:8080) in local to display the client



## Architecture

```
├─┐ lib/ # répertoire des configs de l'app
│ ├─┐ twitter/
│ │ ├── index.js # index for stream
│ │ ├─┐ utils/ # utils folder for tweets
│ │ │ └── tweetLogger.js 
│ │ │ └── tweetParser.js 
│ │ │ └── tweetSorter.js 
│ │ │ └── tweetSplitter.js 
│ └── server.js # server entrypoint
├─┐ public/
│ ├── index.html # client template
│ ├── index.css # client style
│ ├── index.js # client entrypoint
├── .env.example # management of env vars
├── app.js # app entrypoint

```

## About the project
- Choices

For this project, I chose to use the minimum of packages and to do the maximum from scratch so I only used 3 packages : ws to do the websockets, dotenv for the env variables and request for the HTTP calls. I get the datas from twitter with request and then I send it to the client with websockets.

- Problems encountered

My aim problem was with to do the last transform (tweetSorter.js), first if all I did the transformation into app.js but I realized it was not a good idea. My others problems were syntax problems, all my functions were working but were not clean so I did lots of refacto at the end of this project.
