// priority: 500

EnderBonusOnLivingHurtByEntity.addBonus("str_talent5", StrTalent5Event, 1)
EnderBonusOnLivingHurtByOthers.addBonus("str_talent5", StrTalent5HurtEvent, 1)
EnderBonusOnLivingAttackByEntity.addBonus("str_talent5", StrTalent5AttackEvent, 1)

function StrTalent5Event(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    
    if (!isDamageTypePhysical(damagetype, EventEntity)) return;
    
   let EventEntityHp = EventEntity.getHealth();
   let NeedDamage = EventEntityHp * 0.05
   let Hp = EventEntityHp - NeedDamage;
   if (Hp >= 1) {
   EventEntity.setHealth(Hp);
   }
   handler.addDamageMultiplier(0.4)
}

function StrTalent5HurtEvent(handler, event) {
   event.amount *= 0.7
}

function StrTalent5AttackEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.oldDamageType
    if (isDamageTypePhysical(damagetype, EventEntity)) return
    if (damagetype.includes('holy')) return
    event.setCanceled(true);
}