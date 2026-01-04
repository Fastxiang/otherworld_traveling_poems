// priority: 500

registerItemMaidBauble("fast:blaze_scroll")
EnderBonusOnLivingHurtByEntity.addBonus("fast:blaze_scroll", BlazeScrollEvent, 1)
registerItemTag("fast:blaze_scroll", "fast:magic")

function BlazeScrollEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('fire')) return;
    if (isInCooldown("blaze_scroll", uuid, level)) return
    if (EventEntity.hasEffect('fast:blazing_effect')) {
    EventEntity.removeEffect('fast:blazing_effect');
    }
    EventEntity.potionEffects.add('fast:blazing_effect', 300 * 20, 0, false, false)
    BlazingEffectLevel[uuid] = 1
    addCooldown("blaze_scroll", uuid, 300 * 20, level)
}