// priority: 500

registerItemMaidBauble("fast:primal_fire")
EnderBonusOnLivingHurtByEntity.addBonus("fast:primal_fire", PrimalFireEvent, 1)
registerItemTag("fast:primal_fire", "fast:magic")

function PrimalFireEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('fire')) return;  
    if (!isInCooldown("blaze_scroll", uuid, level)) return
    if (EventEntity.hasEffect('fast:blazing_effect')) {
    let fireEffect = EventEntity.getEffect('fast:blazing_effect');
    let Effectlevel = BlazingEffectLevel[uuid]
    let PrimalFireCount = getEntityEnderBonusCount(EventEntity, "fast:primal_fire")
    Effectlevel *= PrimalFireCount * 2;
    if (Effectlevel > 0) {
    handler.addExtraDamage(Effectlevel)
    }
    }
}