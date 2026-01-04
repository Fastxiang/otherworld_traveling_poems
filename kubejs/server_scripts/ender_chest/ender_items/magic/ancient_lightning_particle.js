// priority: 500

registerItemMaidBauble("fast:ancient_lightning_particle")
EnderBonusOnLivingHurtByEntity.addBonus("fast:ancient_lightning_particle", AncientLightningParticleEvent, 1)
registerItemTag("fast:ancient_lightning_particle", "fast:magic")
EnderBonusOnLivingHurtHasEffectByEntity("fast:electrified", ElectrifiedEvent)

function AncientLightningParticleEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes("lightning")) return
    entity.potionEffects.add("fast:electrified", 100, 0, false, false)
}

function ElectrifiedEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (MagicDamageType.includes(damagetype)) return
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    handler.addExtraDamage(agi)
}
