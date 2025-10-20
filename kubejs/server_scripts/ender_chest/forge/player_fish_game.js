
function StardewMinigameStartedEvent(event){
    let player = event.player
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData) return
    if (persistentData.TreasureBait) {
    event.setForcedTreasureChest(true)
    }
    
    if (persistentData.TreasureHoarder) {
    let count = persistentData.TreasureHoarder
    let chance = count * 0.01
    let random = Math.random()
    if (random < chance) {
    event.setForcedGoldenChest(true)
    }
    }
}

function StardewMinigameEndedEvent(event){
    let player = event.player
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData) return
    if (persistentData.TheHeroFishingRod) {
    addPlayerXp(player, 15)
    }
}