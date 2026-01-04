// priority: 500

registerItemMaidBauble("fast:int_gem")
EnderBonusOnLivingHurtByEntity.addBonus("fast:int_gem", IntGemEvent, 1)
registerItemTag("fast:int_gem", "fast:magic")

function IntGemEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!MagicDamageType.includes(damagetype)) return
    handler.addIndependentMultiplier(0.09)
}