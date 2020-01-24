console.log("It works!");
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);


socket.addEventListener('open', event => {
    console.log("connected", event);
});

const brandCounters = {
    apple: 0,
    samsung: 0,
    huawei: 0,
    xiaomi: 0,
    honor: 0,
    sony: 0,
    lg: 0,
};


socket.addEventListener('message', event => {
    console.log("new message", event.data);
    tweetData = JSON.parse(event.data);

    switch (tweetData.brand) {
        case 'apple':
            brandCounters.apple +=1;
            document.querySelector(".apple-counter").innerHTML = brandCounters.apple;
            document.querySelector("#apple").style.width = 130+brandCounters.apple*10+"px";
            document.querySelector("#apple").style.height = 130+brandCounters.apple*10+"px";
            break;
        case 'samsung':
            brandCounters.samsung +=1;
            document.querySelector(".samsung-counter").innerHTML = brandCounters.samsung;
            document.querySelector("#samsung").style.width = 130+brandCounters.samsung*10+"px";
            document.querySelector("#samsung").style.height = 130+brandCounters.samsung*10+"px";
            break;
        case 'huawei':
            brandCounters.huawei +=1;
            document.querySelector(".huawei-counter").innerHTML = brandCounters.huawei;
            document.querySelector("#huawei").style.width = 130+brandCounters.huawei*10+"px";
            document.querySelector("#huawei").style.height = 130+brandCounters.huawei*10+"px";
            break;
        case 'xiaomi':
            brandCounters.xiaomi +=1;
            document.querySelector(".xiaomi-counter").innerHTML = brandCounters.xiaomi;
            document.querySelector("#xiaomi").style.width = 130+brandCounters.xiaomi*10+"px";
            document.querySelector("#xiaomi").style.height = 130+brandCounters.xiaomi*10+"px";
            break;
        case 'honor':
            brandCounters.honor +=1;
            document.querySelector(".honor-counter").innerHTML = brandCounters.xiaomi;
            document.querySelector("#honor").style.width = 130+brandCounters.xiaomi*10+"px";
            document.querySelector("#honor").style.height = 130+brandCounters.xiaomi*10+"px";
            break;
        case 'sony':
            brandCounters.sony +=1;
            document.querySelector(".sony-counter").innerHTML = brandCounters.xiaomi;
            document.querySelector("#sony").style.width = 130+brandCounters.xiaomi*10+"px";
            document.querySelector("#sony").style.height = 130+brandCounters.xiaomi*10+"px";
            break;
        case 'lg':
            brandCounters.lg +=1;
            document.querySelector(".lg-counter").innerHTML = brandCounters.xiaomi;
            document.querySelector("#lg").style.width = 130+brandCounters.xiaomi*10+"px";
            document.querySelector("#lg").style.height = 130+brandCounters.xiaomi*10+"px";

    }

    socket.send("message received!");
});
