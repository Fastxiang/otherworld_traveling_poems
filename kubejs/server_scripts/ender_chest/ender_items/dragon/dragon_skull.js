// priority: 500

registerItemMaidBauble("block_factorys_bosses:dragon_skull")
registerItemTag("block_factorys_bosses:dragon_skull", "fast:dragon")
registerEnderBonusCustomDataModifier(DragonTagEvent)

function DragonTagEvent(EventEntity, item, slot, entry, customData) {
    if (!customData.dragonTag) customData.dragonTag = 0
    if (item.hasTag("fast:dragon")) {
    customData.dragonTag += 1
    }
    return customData
}