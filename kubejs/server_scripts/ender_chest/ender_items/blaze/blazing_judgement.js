// priority: 500

registerItemMaidBauble("fast:blazing_judgement")
EnderBonusOnLivingHurtByEntity.addBonus("fast:blazing_judgement", BlazingJudgementDamageTypeEvent, 1)
EnderBonusOnLivingAttackByEntity.addBonus("fast:blazing_judgement", BlazingJudgementEvent, 5)
registerItemTag("fast:blazing_judgement", "fast:magic")

function BlazingJudgementDamageTypeEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('indirectMagic')) return
    handler.setDamageType("fire_magic")
}

function BlazingJudgementEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.oldDamageType
    if (!damagetype.includes('fire')) return;
        let pos = entity.position();
        let str = EventEntity.getAttribute(`fast:str`).getValue();
        let Attack = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
        let thisPower = EventEntity.getAttribute(getSpellPowerId(damagetype)).getValue();
        if (!thisPower) return
        let Damage = str + Attack
        let Radius = 4
        Radius *= thisPower
        NewFlameStrike(EventEntity, pos.x(), pos.y(), pos.z(), Damage, Radius, 40, 1, false)
        event.setCanceled(true);
}