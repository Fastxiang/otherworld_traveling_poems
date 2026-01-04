// priority: 500

EnderBonusOnLivingHurtByEntity.addSpecialProperty("irons_spellbooks:divine_pearl", SpecialPropertyHolyLifeDrainEvent, 1)

function SpecialPropertyHolyLifeDrainEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('holy')) return
    let Damage = event.amount
    let HealNeed = 0
    HealNeed += Math.floor(Damage * 0.01)
    if (HealNeed > 0) {
    EventEntity.heal(HealNeed)
    }
}