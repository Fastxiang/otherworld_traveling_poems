// priority: 500

registerItemMaidBauble("fast:blood_vitality")
EnderBonusOnLivingDamageByOthers.addBonus("fast:blood_vitality", BloodVitalityEvent, 1)
registerItemTag("fast:blood_vitality", "fast:magic")

function BloodVitalityEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let Damage = event.amount
    if (Damage >= 2) {
    EventEntity.heal(1)
    }
}