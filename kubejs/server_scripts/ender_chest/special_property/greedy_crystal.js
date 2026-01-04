// priority: 500

EnderBonusOnLivingHurtByEntity.addSpecialProperty("hmag:greedy_crystal", SpecialPropertyGreedyCrystalEvent, 7)

function SpecialPropertyGreedyCrystalEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (!isDamageTypePhysical(damagetype, EventEntity)) return;
        let NewDamageType = getMaxSpellDamageType(EventEntity)
        if (!NewDamageType) return;
        let thisPower = EventEntity.getAttribute(getSpellPowerId(NewDamageType));
        let Attack = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
        if (thisPower) {
        event.amount = Attack * 0.5 * thisPower.getValue()
        }
        handler.setDamageType(NewDamageType)
}