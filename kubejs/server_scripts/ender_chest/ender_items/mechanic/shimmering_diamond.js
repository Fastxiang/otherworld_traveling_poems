// priority: 500

registerItemMaidBauble("fast:shimmering_diamond")
EnderBonusOnLivingHurtByEntity.addBonus("fast:shimmering_diamond", ShimmeringDiamondDamageEvent, 1)
EnderBonusOnUpdate.addCheckBonus("fast:shimmering_diamond", ShimmeringDiamondUpdateEvent, ShimmeringDiamondRemoveEvent)

function ShimmeringDiamondUpdateEvent(handler, EventEntity) {
        let item = getEntityEnderBonusItem(EventEntity, "fast:shimmering_diamond")
        let Value = item.damageValue
        FEValue(EventEntity, Value)
}

function ShimmeringDiamondRemoveEvent(handler, EventEntity) {
        FEValue(EventEntity, 0)
}

function ShimmeringDiamondDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    
    let item = getEntityEnderBonusItem(EventEntity, "fast:shimmering_diamond")
    
    if (!item) return
    
    let mechanicCount = getEntityCustomData(EventEntity, "mechanicTag")
    
    let OldValue = item.damageValue
    if (OldValue >= 23333) {
    return
    }
    let Count = mechanicCount * 100
    let thisValue = OldValue + Count
    if (thisValue >= 23333) {
    Count = 23333 - OldValue
    thisValue = 23333
    }
    item.damageValue = thisValue
    handler.addDamageMultiplier(Count / 1500);
    handler.addExtraDamage(Count / 2)
    let NewValue = item.damageValue
    FEValue(EventEntity, NewValue)
}