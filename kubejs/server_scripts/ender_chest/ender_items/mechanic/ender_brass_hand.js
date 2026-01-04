// priority: 500

registerItemMaidBauble("fast:ender_brass_hand")
EnderBonusOnEntityTick.addBonus("fast:ender_brass_hand", EnderBrassHandTickEvent, 1)
registerEnderBonusCustomDataModifier(EnderBrassHandEvent)

function EnderBrassHandEvent(EventEntity, item, slot, entry, customData) {
    let uuid = EventEntity.uuid
    if (typeof item.getItem().performAttack === 'function') {
    customData.EnderBrassHandWeapon = item.id
    }
    return customData
}

function EnderBrassHandTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let uuid = EventEntity.uuid
    let data = getEntityCustomData(EventEntity, "EnderBrassHandWeapon")
    if (!data) return
    let pos = EventEntity.position();
    let x = pos.x();
    let y = pos.y();
    let z = pos.z();
    let Weapon = Item.of(data)
    NewCounterslashProj(EventEntity, Weapon, x, y, z)
}