// priority: 500

registerItemMaidBauble("tarotcards:the_hermit")
EnderBonusOnEntityTick.addBonus("tarotcards:the_hermit", TheHermitTickEvent, 1)
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:the_hermit", TheHermitDamageEvent, 1)

//let HermitLastData = {}

function TheHermitDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!EventEntity.hasEffect('irons_spellbooks:true_invisibility')) return
    let TrueItyTime = 1;
    handler.addDamageMultiplier(0.5);
    EventEntity.removeEffect('irons_spellbooks:true_invisibility');
}

function TheHermitTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 200 !== 0) return
    let uuid = EventEntity.uuid
    
    EventEntity.potionEffects.add('irons_spellbooks:true_invisibility', 220, 0, false, false);
}