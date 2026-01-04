// priority: 500

registerItemMaidBauble("fast:source_of_venom")
EnderBonusOnLivingHurtByEntity.addBonus("fast:source_of_venom", SourceOfVenomEvent, 1)
registerItemTag("fast:source_of_venom", "fast:magic")

function SourceOfVenomEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('poison_cloud')) return
    if (!entity.hasEffect('fast:toxic')) {
    let EffectNeedLevel = 0
    let FlaskCount = getEntityEnderBonusCount(EventEntity, "fast:flask_of_venom")
    if (FlaskCount) {
    EffectNeedLevel += FlaskCount * 2
    }
    entity.potionEffects.add('fast:toxic', 200, EffectNeedLevel, false, false);
    } else {
    let Roxic = entity.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    entity.removeEffect('fast:toxic');
    entity.potionEffects.add('fast:toxic', 200, EffectLevel + 1, false, false)
    }
}