// priority: 500

EnderBonusOnLivingHurtByEntity.addBonus("vit_talent3", VitTalent3Event, 1)

function VitTalent3Event(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType

    let hp = EventEntity.getHealth();
    let maxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue();
    let lostPercent = (1 - hp / maxHp);
    let segments = Math.floor(lostPercent / 0.09);
    let finalMultiplier = 1.6 - segments * 0.05;
    if (finalMultiplier < 1.0) finalMultiplier = 1.0;
    let extra = finalMultiplier - 1.0;
    
    handler.addDamageMultiplier(extra);
}
