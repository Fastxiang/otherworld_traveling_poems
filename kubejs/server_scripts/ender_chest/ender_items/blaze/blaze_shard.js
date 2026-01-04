// priority: 500

registerItemMaidBauble("fast:blaze_shard")
registerEnderBonusCustomDataModifier(BlazeTagEvent)

function BlazeTagEvent(EventEntity, item, slot, entry, customData) {
    if (!customData.blazeTag) customData.blazeTag = 0
    if (item.hasTag("fast:blaze")) {
    customData.blazeTag += 1
    }
    return customData
}