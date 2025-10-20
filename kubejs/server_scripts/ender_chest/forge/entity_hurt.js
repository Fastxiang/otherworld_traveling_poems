// priority: 600

function LivingHurt(event) {
    let actual = event.source.actual
    if (!actual) return
    let entity = event.entity
    if (!entity) return
    if (!entity.isLiving()) return
    if (!actual.isLiving()) return
    let uuid = actual.uuid
    let damagetype = event.source.getType();
    if (entity.hasEffect('fast:toxic')) {
    if (damagetype.includes('poison_cloud')) {
    let Roxic = entity.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    event.amount += EffectLevel
    }
    }
    if (actual.hasEffect('fast:toxic')) {
    let Roxic = actual.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    event.amount *= 1 + Math.floor(EffectLevel / 1000)
    }
}