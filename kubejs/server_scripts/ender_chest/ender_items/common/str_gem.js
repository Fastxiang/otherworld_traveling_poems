// priority: 500

registerItemMaidBauble("fast:str_gem")
EnderBonusOnLivingHurtByEntity.addBonus("fast:str_gem", StrGemEvent, 1)

function StrGemEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    let level = EventEntity.level
    if (isInCooldown("str_gem", uuid, level)) return
    if (!isDamageTypePhysical(damagetype, EventEntity)) return
    let str = EventEntity.getAttribute(`fast:str`).getValue();
    handler.addExtraDamage(str * 0.5)
    addCooldown("str_gem", uuid, 3, level)
}