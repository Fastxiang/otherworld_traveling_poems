// priority: 500

registerItemMaidBauble("fast:ancient_misc_soul_fire")
registerItemTag("fast:ancient_misc_soul_fire", "fast:magic")
registerItemTag("fast:ancient_misc_soul_fire", "fast:blaze")
EnderBonusOnLivingHurtByEntity.addBonus("fast:ancient_misc_soul_fire", AncientMiscSoulFireEvent, 1)

function AncientMiscSoulFireEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType
    if (isInCooldown("ancient_misc_soul_fire", uuid, level)) return
    addCooldown("ancient_misc_soul_fire", uuid, 10, level)
    server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
    AttackEntity(EventEntity, entity, `fast:fire_magic`, 100)
        }
    })
}