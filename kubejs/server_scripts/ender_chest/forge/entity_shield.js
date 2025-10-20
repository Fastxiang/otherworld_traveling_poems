

function LivingShieldBlockEvent(event) {
    let entity = event.entity
    if (typeof entity.getMainHandItem !== 'function') return
    let item = entity.getMainHandItem();
    if (item) {
    SpecialPropertyShieldStanceEvent(event, entity, item)
    }
}

function SpecialPropertyShieldStanceEvent(event, entity, item) {
    if (!hasSpecialProperty(item, "collectorsreap:lime_popsicle")) return
    if (entity.hasEffect('fast:offensive_stance')) return
    if (!entity.hasEffect('fast:defensive_stance')) {
    entity.potionEffects.add('fast:defensive_stance', 600, 0, false, false);
    } else {
    let DefensiveStance = entity.getEffect('fast:defensive_stance');
    let EffectLevel = DefensiveStance.getAmplifier();
    entity.removeEffect('fast:defensive_stance');
    entity.potionEffects.add('fast:defensive_stance', 600, Math.min((EffectLevel + 1), 14), false, false)
    }
}

