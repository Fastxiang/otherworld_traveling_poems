// priority: 500

registerItemMaidBauble("fast:thunderbrand_magazine")
EnderBonusOnLivingHurtByEntity.addBonus("fast:thunderbrand_magazine", ThunderbrandMagazineEvent, 1)
registerItemTag("fast:thunderbrand_magazine", "fast:magic")

function ThunderbrandMagazineEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType;
    if (!damagetype.includes('tacz.bullet')) return
    if (isInCooldown("thunderbrand_magazine", uuid, level)) return
    let targetPos = entity.position()
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    let SpellLevel = 1
    SpellLevel += Math.floor(agi / 20)
    server.scheduleInTicks((1), () => {
    overLimitSpellOnCast("irons_spellbooks:chain_lightning", SpellLevel, EventEntity, entity)
    })
    addCooldown("thunderbrand_magazine", uuid, 20, level)
}
