// priority: 500

registerItemMaidBauble("fast:apprentice_staff")
EnderBonusOnLivingHurtByEntity.addBonus("fast:apprentice_staff", ApprenticeStaffEvent, 1)
registerItemTag("fast:apprentice_staff", "fast:magic")

function ApprenticeStaffEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType;
    if (!isDamageTypePhysical(damagetype, EventEntity)) return
    let player = resolvePlayerFromEntity(EventEntity)
    if (player) {
    addPlayerManaCost(player, 100)
    }
}