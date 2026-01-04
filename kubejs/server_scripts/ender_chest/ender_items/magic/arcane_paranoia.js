// priority: 500

registerItemMaidBauble("fast:arcane_paranoia")
registerItemTag("fast:arcane_paranoia", "fast:magic")
registerEnderBonusCustomDataModifier(MagicTagEvent)

function MagicTagEvent(EventEntity, item, slot, entry, customData) {
    if (!customData.magicTag) customData.magicTag = 0
    if (!customData.notmagicTag) customData.notmagicTag = 0
    if (item.hasTag("fast:magic")) {
    customData.magicTag += 1
    } else {
    customData.notmagicTag += 1
    }
    return customData
}