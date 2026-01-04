// priority: 500

registerItemMaidBauble("fast:treasure_hoarder")
EnderBonusOnPlayerMinigameStarted.addBonus("fast:treasure_hoarder", TreasureHoarderEvent, 1)

function TreasureHoarderEvent(handler, event) {
    let player = event.player
    let count = getEntityEnderBonusCount(player, "fast:treasure_hoarder")
    let chance = count * 0.01
    let random = Math.random()
    if (random < chance) {
    event.setForcedGoldenChest(true)
    }
}