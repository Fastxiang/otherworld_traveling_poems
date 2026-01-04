// priority: 500

EnderBonusOnLivingHurtByEntity.addSpecialProperty("youkaishomecoming:big_popsicle", SpecialPropertyOriginReverseFlowEvent, 7)

function SpecialPropertyOriginReverseFlowEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (damagetype.includes('holy_magic')) {
    handler.setDamageType("ender_magic")
    } else if (damagetype.includes('ender_magic')) {
    handler.setDamageType("holy_magic")
    } else {
    handler.setDamageType(getDamageTypePhysical(EventEntity))
    }
}