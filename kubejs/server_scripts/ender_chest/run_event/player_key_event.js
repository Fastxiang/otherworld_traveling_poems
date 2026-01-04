// priority: 1000

NetworkEvents.dataReceived("PressSKey", event => {
    let player = event.player
    let EventEntity = player
    let item = player.getMainHandItem();
    SwordTechniqueMoonGodCalamityEvent(player)
})