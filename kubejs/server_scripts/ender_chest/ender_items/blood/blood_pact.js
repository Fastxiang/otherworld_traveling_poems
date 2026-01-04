// priority: 500

registerItemMaidBauble("fast:blood_pact")
EnderBonusOnLivingHurtByEntity.addBonus("fast:blood_pact", BloodPactDamageEvent, 1)
EnderBonusOnLivingDamageByOthers.addBonus("fast:blood_pact", BloodPactHurtEvent, 1)
registerItemTag("fast:blood_pact", "fast:magic")

function BloodPactDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType;
    if (!damagetype.includes('blood')) return
    let PlayerMaxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue(); 
    let Damage = PlayerMaxHp * 0.08
    if (EventEntity.isAlive()) {
    AttackEntity(null, EventEntity, `irons_spellbooks:blood_magic`, Damage);
    }
}

function BloodPactHurtEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let Damage = event.amount
    if (Damage >= 3) {
    if (!EventEntity.hasEffect('fast:blood_str')) {
    EventEntity.potionEffects.add('fast:blood_str', 600, 0, false, false)
    } else {
    let thisEffect = EventEntity.getEffect('fast:blood_str');
    let thisLevel = thisEffect.getAmplifier()
    EventEntity.removeEffect('fast:blood_str');
    EventEntity.potionEffects.add('fast:blood_str', 600, Math.min(thisLevel + 1, 49), false, false)
    }
    if (!EventEntity.hasEffect('fast:blood_int')) {
    EventEntity.potionEffects.add('fast:blood_int', 600, 0, false, false)
    } else {
    let thisEffect = EventEntity.getEffect('fast:blood_int');
    let thisLevel = thisEffect.getAmplifier()
    EventEntity.removeEffect('fast:blood_int');
    EventEntity.potionEffects.add('fast:blood_int', 600, Math.min(thisLevel + 1, 49), false, false)
    }
    }
}