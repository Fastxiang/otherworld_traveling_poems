
NetworkEvents.dataReceived("Motion", event => {   
    let {data, player} = event;
    let x = data[`motionx`];
    let y = data[`motiony`];
    let z = data[`motionz`];
    player.setMotion(x, y, z);
})