// priority: 500

EnderBonusOnLivingHurtByEntity.addBonus("str_talent3", StrTalent3Event, 1)

function StrTalent3Event(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    
    if (!isDamageTypePhysical(damagetype, EventEntity)) return;
    
    let hp = entity.getHealth();
    let maxHp = entity.getAttribute('minecraft:generic.max_health').getValue();
    
    let lostPercent = (1 - hp / maxHp);
    
    let segments = Math.floor(lostPercent / 0.10);
    
    let multiplier = segments * 0.08;
    handler.addDamageMultiplier(multiplier)
}