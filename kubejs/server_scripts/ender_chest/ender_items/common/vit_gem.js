// priority: 500

registerItemMaidBauble("fast:vit_gem")
EnderBonusOnLivingDamageByOthers.addBonus("fast:vit_gem", VitGemEvent, 5)

function VitGemEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.damageType;
    event.amount -= 5
}