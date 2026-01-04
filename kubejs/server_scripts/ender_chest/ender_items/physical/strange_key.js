// priority: 500

registerItemMaidBauble("cataclysm:strange_key")
EnderBonusOnLivingHurtByEntity.addBonus("cataclysm:strange_key", StrangeKeyEvent, 1)

function StrangeKeyEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!isDamageTypePhysical(damagetype, EventEntity)) return
    let lookAngle = entity.getLookAngle()
    let level = EventEntity.level
    let dimension = level.dimension
    let behindPos = entity.position().subtract(lookAngle.scale(1.5))
    EventEntity.teleportTo(dimension, behindPos.x(), entity.getY(), behindPos.z(), entity.getYaw(), EventEntity.getPitch())
}