
NetworkEvents.dataReceived("PressSKey", event => {
    let player = event.player
    let EventEntity = player
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let item = player.getMainHandItem();
    SwordTechniqueMoonGodCalamityEvent(player)
})