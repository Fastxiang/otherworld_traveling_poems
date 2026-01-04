// priority: 500

const wheelOfFortuneDamageType = ["player","fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic","arrow"]

registerItemMaidBauble("tarotcards:wheel_of_fortune")
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:wheel_of_fortune", wheelOfFortuneEvent, 5)

function wheelOfFortuneEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes("evocation_magic")) return
        let randomIndex = Math.floor(Math.random() * wheelOfFortuneDamageType.length);
        let randomDamageType = wheelOfFortuneDamageType[randomIndex];
        let NeedDamageType = null
        if (hasEntityEnderBonus(EventEntity, "fast:evocation_magic_shard")) {
        NeedDamageType = getMaxSpellDamageType(player);
        if (NeedDamageType && NeedDamageType != randomDamageType) {
        randomIndex = Math.floor(Math.random() * wheelOfFortuneDamageType.length);
        randomDamageType = wheelOfFortuneDamageType[randomIndex];
        }
        }
        let thisPower = EventEntity.getAttribute(getSpellPowerId(randomDamageType));
        if (thisPower) {
        handler.addIndependentMultiplier(1 - thisPower)
        }
        handler.setDamageType(randomDamageType)
}