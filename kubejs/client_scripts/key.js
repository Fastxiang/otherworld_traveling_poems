let keyDown = false;
let key2Down = false;
ClientEvents.tick(event => {
    const key = global.regKeyArctive;
    const key2 = global.regKeyListSwitch;
    const player = event.player;
    if (key.isDown()) {
        if (!keyDown) {
            player.sendData("strengthCardToggle")
            keyDown = true;
        }
    } else {
        if (keyDown) {
            keyDown = false;
        }
    }
    if (key2.isDown()) {
        if (!key2Down) {
            player.sendData("ListSwitchToggle")
            key2Down = true;
        }
    } else {
        if (key2Down) {
            key2Down = false;
        }
    }
})
