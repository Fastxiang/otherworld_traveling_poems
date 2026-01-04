// priority: 500

registerItemMaidBauble("fast:energy_core")
registerItemTag("fast:energy_core", "fast:mechanic")
registerEnderBonusCustomDataModifier(MechanicTagEvent)

function MechanicTagEvent(EventEntity, item, slot, entry, customData) {
    if (!customData.mechanicTag) customData.mechanicTag = 0
    if (item.hasTag("fast:mechanic")) {
    customData.mechanicTag += 1
    }
    return customData
}