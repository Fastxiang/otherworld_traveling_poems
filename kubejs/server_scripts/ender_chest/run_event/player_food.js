// priority: 1000

const EnderBonusOnEntityFoodEaten = new EnderBonusHandler()

ItemEvents.foodEaten(event => {
    let player = event.player;
    if (!player) return;
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnEntityFoodEaten.run(itemIds, [event], player)
})
