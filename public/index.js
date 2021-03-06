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


    const updateBrandState = (brand) => {
        brandCounters[brand] +=1;
        document.querySelector(`.${brand}-counter`).innerHTML = brandCounters[brand];
        document.querySelector(`#${brand}`).style.width = 130+brandCounters[brand]*10+"px";
        document.querySelector(`#${brand}`).style.height = 130+brandCounters[brand]*10+"px";
    };

    switch (tweetData.brand) {
        case 'apple':
            updateBrandState('apple');
            break;
        case 'samsung':
            updateBrandState('samsung');
            break;
        case 'huawei':
            updateBrandState('huawei');
            break;
        case 'xiaomi':
            updateBrandState('xiaomi');
            break;
        case 'honor':
            updateBrandState('honor');
            break;
        case 'sony':
            updateBrandState('sony');
            break;
        case 'lg':
            updateBrandState('lg');
    }

    //socket.send("message received!");
});

window.onload = () => {
    const btnLove = document.querySelector('#sendlove');
    const btnStop = document.querySelector("#stop");
    const btnStart = document.querySelector("#start");
    btnLove.addEventListener('click', () => {
        const msg = {
            type: "love",
            text: "Cher développeur, BRAVO pour cette API !"
        };
        socket.send(JSON.stringify(msg));
    });

    btnStart.addEventListener('click', () => {
        const msg = {
            type: "start",
        };
        socket.send(JSON.stringify(msg));
    });

    btnStop.addEventListener('click', () => {
        const msg = {
            type: "stop",
        };
        socket.send(JSON.stringify(msg));
    });
};

