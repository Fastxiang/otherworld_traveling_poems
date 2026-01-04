const $SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource');


NetworkEvents.dataReceived("DisplayItemActivation", event => {
    let { data, player } = event
    let item = data[`item`];
    Client.instance.gameRenderer.displayItemActivation(item)
})

NetworkEvents.dataReceived("PlaySound", event => {
    let { data, player } = event
    let sound = data[`sound`];
    player.playSound(sound)
})

NetworkEvents.dataReceived("StopSound", event => {
    let { data, player } = event
    let SoundManager = Client.getSoundManager()
    SoundManager.stop(null, $SoundSource.PLAYERS)
})