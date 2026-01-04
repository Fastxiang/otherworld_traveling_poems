// priority: 500

EnderBonusOnLivingHurtByEntity.addBonus("str_talent4", StrTalent4Event, 1)

function StrTalent4Event(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    
    if (!isDamageTypePhysical(damagetype, EventEntity)) return;
    if (isInCooldown("str_talent4", uuid, level)) return
    let Attack = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
    EventEntity.server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        let Damageneed = event.amount;
        AttackEntity(EventEntity, entity, "fast:evocation_magic", Attack * 1.2)
        }
       });
    addCooldown("str_talent4", uuid, 40, level)
}