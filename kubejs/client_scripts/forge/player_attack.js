
const $InteractionKeyMappingTriggered = Java.loadClass('net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered')

NativeEvents.onEvent($InteractionKeyMappingTriggered, event => {
    let player = Client.player
    if (event.isAttack()) {
    player.sendData("Attack")
    }
})
