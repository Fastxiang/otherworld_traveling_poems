// priority: 1000

const EnderBonusOnPlayerSdmShopSell = new EnderBonusHandler()

SDMShopEvents.sellEntry(event => {
    let player = event.player
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerSdmShopSell.run(itemIds, [event], player)
})
