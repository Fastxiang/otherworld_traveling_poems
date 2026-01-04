// priority: 500

registerItemMaidBauble("tconstruct:encyclopedia")
registerEnderBonusCustomDataModifier(EncyclopediaEvent)

function EncyclopediaEvent(EventEntity, item, slot, entry, customData) {
    let nbt = item.nbt
    if (!customData.ticAttack) customData.ticAttack = 0
    if (nbt) {
    let ticAttack = getTicAttackDamage(nbt)
    if (ticAttack) {
    customData.ticAttack += ticAttack * 0.5
    }
    }
    return customData
}