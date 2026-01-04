// priority: 500

registerItemMaidBauble("fast:water_precision_mechanism")
EnderBonusOnLivingHurtByEntity.addBonus("fast:water_precision_mechanism", WaterPrecisionMechanismEvent, 1)
registerItemTag("fast:water_precision_mechanism", "fast:magic")

let WaterPrecisionMechanismDamage = {}

function WaterPrecisionMechanismEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!MagicDamageType.includes(damagetype)) return
    let Damage = WaterPrecisionMechanismDamage[uuid]
    if (Damage > 0) {
    handler.addExtraDamage(Damage)
    }
}
