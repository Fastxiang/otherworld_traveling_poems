// priority: 500

registerItemMaidBauble("fast:treasure_bait")
EnderBonusOnPlayerMinigameStarted.addBonus("fast:treasure_bait", TreasureBaitEvent, 2)

function TreasureBaitEvent(handler, event) {
    let player = event.player
    event.setForcedTreasureChest(true)
}