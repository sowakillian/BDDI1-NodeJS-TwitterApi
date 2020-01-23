console.log("It works!");
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

socket.addEventListener('open', event => {
    console.log("connected", event);
});

const brandCounters = {
    apple: 0,
    samsung: 0,
    huawei: 0,
    xiaomi: 0
};

socket.addEventListener('message', event => {
    console.log("new message", event.data);
    tweetData = JSON.parse(event.data);

    switch (tweetData.brand) {
        case 'apple':
            //document.querySelector(".apple-tweets").insertAdjacentHTML('beforeend', '<div id="two">'+ tweetData.tweet + '</div>');
            brandCounters.apple +=1;
            document.querySelector(".apple-counter").innerHTML = brandCounters.apple;
            break;
        case 'samsung':
            //document.querySelector(".samsung-tweets").insertAdjacentHTML('beforeend', '<div id="two">'+ tweetData.tweet + '</div>');
            brandCounters.samsung +=1;
            document.querySelector(".samsung-counter").innerHTML = brandCounters.samsung;
            break;
        case 'huawei':
            //document.querySelector(".huawei-tweets").insertAdjacentHTML('beforeend', '<div id="two">'+ tweetData.tweet + '</div>');
            brandCounters.huawei +=1;
            document.querySelector(".huawei-counter").innerHTML = brandCounters.huawei;
            break;
        case 'xiaomi':
            //document.querySelector(".xiaomi-tweets").insertAdjacentHTML('beforeend', '<div id="two">'+ tweetData.tweet + '</div>');
            brandCounters.xiaomi +=1;
            document.querySelector(".xiaomi-counter").innerHTML = brandCounters.xiaomi;
    }

    socket.send("message received!");
});
