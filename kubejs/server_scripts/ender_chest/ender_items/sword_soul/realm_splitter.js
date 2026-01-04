// priority: 500

registerItemMaidBauble("fast:realm_splitter")
EnderBonusOnLivingHurtByEntity.addBonus("fast:realm_splitter", RealmSplitterEvent, 1)

function RealmSplitterEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (damagetype.includes('mob')) return
    handler.addIndependentMultiplier(-0.9)
}