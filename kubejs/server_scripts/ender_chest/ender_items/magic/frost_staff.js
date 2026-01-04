// priority: 500

registerItemMaidBauble("fast:frost_staff")
EnderBonusOnLivingHurtByEntity.addBonus("fast:frost_staff", FrostStaffEvent, 1)
registerItemTag("fast:frost_staff", "fast:magic")

function FrostStaffEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('ice')) return;
    if (!entity.hasEffect('irons_spellbooks:chilled')) return;
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    if (hasEntityEnderBonus(EventEntity, "fast:the_hero_staff")) {
    int *= 1.5;
    }
    let damage = int * 5;
    handler.addExtraDamage(damage)
    if (hasEntityEnderBonus(EventEntity, "fast:ice_scroll")) {
    let EntityUuid = entity.uuid
    if (!isInCooldown("ice_scroll", EntityUuid, level)) {
    server.scheduleInTicks(30, () => {
    if (!entity.hasEffect('irons_spellbooks:chilled')) return;
    entity.removeEffect('irons_spellbooks:chilled');
    })
    addCooldown("ice_scroll", EntityUuid, 200, level)
    } else {
    entity.removeEffect('irons_spellbooks:chilled');
    }
    } else {
    entity.removeEffect('irons_spellbooks:chilled');
    }
}