// priority: 500

EnderBonusOnLivingHurtByEntity.addBonus("agi_talent5", AgiTalent5Event, 1)

function AgiTalent5Event(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('arrow')) return
    entity.potionEffects.add('fast:vulnerable_effect', 200, 0, false, false)
}