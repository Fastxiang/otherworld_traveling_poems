// priority: 500

registerItemMaidBauble("cataclysm:cursed_eye")
EnderBonusOnLivingHurtByEntity.addBonus("cataclysm:cursed_eye", CursedEyeEvent, 1)
registerItemTag("cataclysm:cursed_eye", "fast:magic")

function CursedEyeEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    let EntityPersistentData = entity.persistentData
    if (damagetype.includes('nature')) {
    let Damage = event.amount
    EntityPersistentData.CursedEye = Damage * 10
    } else if (damagetype.includes('poison_cloud')) {
    if (!EntityPersistentData.CursedEye) return
    let GetDamage = EntityPersistentData.CursedEye / 20
    EntityPersistentData.CursedEye -= GetDamage
    if (GetDamage > 0) {
    handler.addExtraDamage(GetDamage)
    }
    }
}