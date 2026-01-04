// priority: 500

registerItemMaidBauble("cataclysm:storm_eye")
EnderBonusOnLivingHurtByEntity.addBonus("cataclysm:storm_eye", StormEyeEvent, 6)
registerItemTag("cataclysm:storm_eye", "fast:magic")

function StormEyeEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType;
    if (!damagetype.includes('ice') && !damagetype.includes('lightning')) {
        if (entity.isLiving()) {
        let level = EventEntity.level
        let EntityPos = entity.position()
        let spawn = EntityPos.add(0, entity.getEyeHeight() / 2 + 5, 0)
        let direction = EntityPos.subtract(spawn).normalize();
        let icicle = level.createEntity('irons_spellbooks:icicle');
    icicle.setOwner(EventEntity)
    icicle.moveTo(spawn)
    icicle.shoot(direction)
    icicle.setDamage(5)
    icicle.spawn()
    }
    }
    if (damagetype.includes('ice')) {
    handler.setDamageType("lightning_magic")
    }
}