// priority: 500

registerItemMaidBauble("cataclysm:necklace_of_the_desert")
EnderBonusOnLivingHurtByEntity.addBonus("cataclysm:necklace_of_the_desert", NecklaceOfTheDesertEvent, 1)

function NecklaceOfTheDesertEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!isDamageTypePhysical(damagetype, EventEntity)) return;
    let InFr = EventEntity.getAttribute('kubejs:generic.attack_invulnerable_frames').getValue();
    handler.addDamageMultiplier(InFr - 1)
}