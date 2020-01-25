# NodeJS-TwitterAPI

I developped this application during my courses of NodeJS at my school [Gobelins](https://gobelins.fr).
The aim was to develop a back-end application in NodeJS to process with the twitter feed.

## What does this application do ?
This application get tweets from Twitter with a request and updates automatically datas in real-time. There is a filter for the request on some brands (Samsung, Apple..) and the server send the datas to the client. On the client, the more there are tweets  about a brand, the more the counter and the size of the brand increases


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

## Add a new brand 

1. in **public/index.js**, edit the switch case tweetData.brand and add the brand
```javascript
case 'nameOfTheBrand':
    updateBrandState('nameOfTheBrand');
    break;
```
        
            
2. in **twitter/index.js**, add the brand into the parameters of httpStream request

```javascript
statuses/filter.json?track=samsung,apple,huawei,xiaomi,honor,sony,lg,nameOfTheBrand
```

3. in **public/index.html**, add the brand to the template
```html
<div id="brandname" class="brands-item">
    <h2>BrandName</h2>
    <span class="brandname-counter">0</span>
    <div class="brandname-tweets"></div>
    <span class="brandname-bar"></span>
</div>
```

## About the project
- Choices

For this project, I chose to use the minimum of packages and to do the maximum from scratch so I only used 3 packages : ws to do the websockets, dotenv for the env variables and request for the HTTP calls. I get the datas from twitter with request and then I send it to the client with websockets.

- Problems encountered

My aim problem was with to do the last transform (tweetSorter.js), first if all I did the transformation into app.js but I realized it was not a good idea. My others problems were syntax problems, all my functions were working but were not clean so I did lots of refacto at the end of this project.
