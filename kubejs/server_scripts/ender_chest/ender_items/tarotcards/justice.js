// priority: 500

registerItemMaidBauble("tarotcards:justice")
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:justice", JusticeEvent, 1)

function JusticeEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (isInCooldown("justice", uuid, level)) return
    let EventEntityrHp = EventEntity.getHealth();
    let EntityHp = entity.getHealth();
    let EventEntityMaxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue(); 
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue(); 
    let EventEntityHaveHp = EventEntityrHp / EntityMaxHp
    let EntityHaveHp = EntityHp / EntityMaxHp
    if (EntityHaveHp > EventEntityHaveHp) {
    handler.addExtraDamage(EventEntityMaxHp)
    addCooldown("justice", uuid, 1, level)
    }
}