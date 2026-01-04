// priority: 500

registerItemMaidBauble("fast:blood_oath")
EnderBonusOnLivingDamageByOthers.addBonus("fast:blood_oath", BloodOathEvent, 2)
registerItemTag("fast:blood_oath", "fast:magic")

function BloodOathEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.damageType;
    if (!damagetype.includes('blood')) return
    let Damage = event.amount
    if (Damage <= 5) {
    event.amount = 5
    }
}