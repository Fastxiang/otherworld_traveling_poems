// priority: 500

registerItemMaidBauble("fast:blood_tally")
EnderBonusOnLivingDamageByOthers.addBonus("fast:blood_tally", BloodTallyEvent, 1)
registerItemTag("fast:blood_tally", "fast:magic")

function BloodTallyEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let Damage = event.amount
    if (Damage >= 2) {
    let Data = EntityBloodValueData[uuid]
    if (!Data) {
    EntityBloodValueData[uuid] = {}
    Data = EntityBloodValueData[uuid]
    Data.Value = 0
    }
    Data.Value += 1
    BloodBrandAttackEvent(EventEntity, Data)
    }
}
