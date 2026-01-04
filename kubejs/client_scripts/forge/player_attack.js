
const $InteractionKeyMappingTriggered = Java.loadClass('net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered')

let isSkill = false

NativeEvents.onEvent($InteractionKeyMappingTriggered, event => {
    let player = Client.player
    if (!player) return
    
    if (event.isAttack()) {
        player.sendData("Attack")
    }
    
    if (isSkill) {
        if (event.isAttack() || event.isUseItem() || event.isPickBlock()) {
            event.setSwingHand(false)
            event.setCanceled(true)
        }
    }
    
})